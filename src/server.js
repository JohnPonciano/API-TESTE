const bd = require('./bd.js')
const bodyParser = require('body-parser')
const port = 3003
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({ extended : true }))

app.get('/produtos', (req,res,next) =>{

    res.send(bd.getProdutos())

})

app.get('/produtos/:id',(req,res)=>{
        res.send(bd.getProduto(req.params.id))
})

app.post('/produtos',(req,res,next)=>{
    
    const produto = bd.salvarProduto({
        name: req.body.name,
        preco: req.body.preco,
    })
    res.send(produto) //JSON
})

app.put('/produtos/:id',(req,res,next)=>{
    
    const produto = bd.salvarProduto({
        id: req.params.id,
        name: req.body.name,
        preco: req.body.preco,
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id',(req,res,next)=>{
    
    const produto = bd.deleteProduto( req.params.id)
    res.send(produto) //JSON
})


app.listen(port,()=>{
    console.log(`Run forest run ${port}.`)
})