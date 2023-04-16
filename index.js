const chalk = require('chalk')
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({
    extended: true,
}),)

app.use(express.json())
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.render('home')
})

app.listen(port, () => {
    console.log(chalk.blue.bold(`Servidor rodando ok na porta: ${port}`))
}) 