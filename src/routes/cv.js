import express from 'express'

const route = express()

route.get("/executavc", (req, res) => {
    res.send("Executa algum serviço de Visão Computacional")
})
route.get("/qrcode", (req, res) => {
    res.json({
        "qrcode": "https://www.google.com"
    })
})

export default route