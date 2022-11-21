import express from 'express'

const route = express()

route.get("/auth", (req, res) => {
    res.json({
        "user": "admin",
        "password": "minhaSenha"
    })
})
route.get("/error", (req, res) => {
    res.send("Página de erro na autenticação")
})

export default route