const express = require('express')
const products = require('./data/products.js')
const dotenv = require('dotenv') 
const app = express()



dotenv.config()
app.get('/', (req, res) => {
    res.send('api is running.....')
}) 



app.get('/api/products', (req, res) => {
    res.json(products)
}) 


app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => {
        return p._id === req.params.id
    })
    res.json(product)
}) 

const PORT  = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server running in port  ${PORT}`)
})