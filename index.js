const Blockchain = require('./blockchain')

const blockchain = new Blockchain()

//Criar bloco / transicao
blockchain.addBlock({ sender: "Paulo Augusto", recived: "Adriane", amount: 10.5 })
blockchain.addBlock({ sender: "Paulo Augusto", recived: "Adriane", amount: 22.5 })
blockchain.addBlock({ sender: "Adriane", recived: "Paulo Augusto", amount: 5.3 })

// ver blocos
console.log(blockchain)

// Ver bloco especifico
console.log(blockchain.blocks[1])

//consulta 
console.log(blockchain.blocks.filter(blockchain => blockchain.data.recived == 'Adriane'));

//Validar Blocos
console.log(blockchain.isValid())

//Violar blocos
blockchain.blocks[1].data.amount = 20
console.log(blockchain.isValid()) 