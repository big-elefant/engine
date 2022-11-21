import express from 'express'
const route = express()

route.get("/sendfile", (req, res) => {
    res.send("Endereço para enviar um arquivo")
})
route.get("/receivefile", (req, res) => {
    res.send("Endereço para receber um arquivo")
})
route.get("/receivelib", (req, res) => {
    res.send("Endereço para receber dados do banco de dados")
})

export default route