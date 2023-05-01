const express = require('express')
var cors = require('cors')
const recipes = require('./recipe.json');
const chef=require('./chef.json')
const app = express()
const port = 3000
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World . We are Muslim!')
})

app.get('/recipe', (req, res) => {
  res.send(recipes)
})
app.get('/chef', (req, res) => {
  res.send(chef)
})

app.get('/chef/:id', (req, res) => {
    const id=req.params.id
    console.log(id)
    const selectedNews=chef.find(n=>n._id==id) || {}
    res.send(selectedNews)
})

app.get('/chef/:id', (req, res) => {
  const id=req.params.id
  if(id==0){
    res.send(chef)
  }
  else{
    const category=chef.filter(n=>n.category_id==id) || {}
    res.send(category)
  } 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})