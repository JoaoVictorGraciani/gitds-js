import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken";
import { User } from "../models/User.js";

export class AuthService {
    async register(data) {
        const userExists = await User.findOne ({
            where: {
                email: data.email
            }
        });
        if(userExists) {
            throw new Error("Email já cadastrado");
        }
    
        const hashPassword = await bcrypt.hash(data.password, 10);
        const user = await User.create({
            ...data,
            password: hashPassword
        });
        return user;
    }
    
    async login(email, password) {
        const user = await User.findOne ({
            where: {
                email
            }
        });
        if(!user) {
            throw new Error("Usário não encontrado");
        }

        const passwordValid = await bcrypt.compare(password, user.password);
        if(!passwordValid) {
            throw new Error("Senha inválida");
        }
        
        const token = jwt.sign({
            id: user.id,
            email: user.email
        }, 
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        });

        return {user, token}
    }


}