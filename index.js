/*Реализовать роутин на несколько компонентов
- \home
- \about
- \price

с выводом разметки(должно храниться в отдельном файла html) на страницу
в случае не верного маршрута - перенаправлять на 404 страницу*/

import express from 'express'
import path from "path";

const __dirname = path.resolve()
const PORT = 3000
const app = express()

/*app.use(express.static(path.resolve(__dirname, 'static')))*/

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'home.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'about.html'))
})

app.get('/price', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'price.html'))
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', '404.html'))
})

app.listen(PORT, ()=>{
    console.log(`Server has been started on port ${PORT}...`)
})