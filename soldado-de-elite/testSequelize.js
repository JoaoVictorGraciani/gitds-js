import database from './config/database.js';
import { Produto } from './models/produto.js';


(async () => {

    await database.sync();

    const novoProduto = await Produto.create({
        nome: "MacBook Pro",
        preco: 10999.99,
        descricao: "Notebook de alta performance"
    })

    console.log(novoProduto);

})();