//Se S --> mostrar as categorias disponiveis e perguntar qual é a categoria escolhida
//Se N --> mostrar todos os livros em ordem crescente pela quantidade de páginas

const livros = require('./database')

//pegar o input
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N') //propriedade nativa da readline

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponiveis:')
    console.log('Romance', '/Comedia', '/Politica', '/Antropologia', '/Tecnologia', '/Nao ficcao')

    const entradaCategoria = readline.question('Qual categoria voce escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros disponiveis:')
    console.table(livrosOrdenados)

}