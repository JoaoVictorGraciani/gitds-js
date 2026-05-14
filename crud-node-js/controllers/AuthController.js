import { AuthService } from "../services/AutService.js";

export class AuthController {
    constructor () {
        this.service = new AuthService();
    
    }

    register = async (req, res) => {
        try {
            const user = await this.service.register(req.body);
            return res.status(201).json(user);
        }catch (error) {
            return res.status(400).json({ error: error.message});
        }
    }

    login = async (req, res) => {
        try {
            const {email, password} = req.body;
            const result = await this.service.login(email, password);
            return res.status(200).json(result);
        }catch (error) {
            return res.status(401).json({ error: error.message});
        
        }
    }
            
}