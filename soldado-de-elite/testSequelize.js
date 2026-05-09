import Sequelize from "./config/dbTestSequelize.js";
import Produto from "./models/produto.js";
import Fabricante from "./models/fabricante.js";
import Categoria from "./models/Categoria.js";
import CategoriaProduto from "./models/CategoriaProduto.js";

(async () => {

    await Sequelize.sync({ force: true });

    const novoFabricante = await Fabricante.create({
        nome: "Apple" 
    })
    console.log(novoFabricante);


    const novoProduto = await Produto.create({
        nome:"MacBook Pro 2",
        preco: 10999.99,
        descricao: "Notebook de alta performace",
        idFabricante: novoFabricante.id
    });
    console.log(novoProduto);

    const novoProduto2 = await Produto.create({
        nome:"MacBook Air",
        preco: 7999.99,
        descricao: "Notebook de baixa performace",
        idFabricante: novoFabricante.id
    });
    console.log(novoProduto2);
    // const produtos = await Produto.findAll();
    // console.log(produtos);
    
    //1:1
    // Lazy loading
    const produtoLazy = await Produto.findByPk(1);
    const fabricanteLazy = await produtoLazy.getFabricante();
    console.log(fabricanteLazy.nome);

    // Eager Loading
    // const produtoEager = await Produto.findByPk(1, {
    //     include: [Fabricante]
    // });
    // console.log(produtoEager.fabricante.nome);

    // 1:N
    const fabricante1ToN = await Fabricante.findByPk(1);
    const produtos = await fabricante1ToN.getProdutos();
    console.log(fabricante1ToN.Produto)

    // N:M
    const novaCategoria = await Categoria.create({
        nome: "Notebook"
    });

    const produto = await Produto.findByPk(1);
    await produto.setCategoria(novaCategoria);

    const produtoNtoM = await Produto.findByPk(1, {
        include: [Categoria]
    });
    console.log(produtoNtoM.categoria);

    
    
})();