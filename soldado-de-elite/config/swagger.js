import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "My API",
            version: "1.0.0",
            description: " Documentação da API de Soldados",
        },
        servers: [
            {
                url: "http://localhost:3000/api"
            }
        ],
    },
    apis: ["./routes/*.js"],
}

export const swaggerSpec = swaggerJSDoc(options);
//http://localhost:3000/docs/
