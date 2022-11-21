import express from 'express'
import routes from './routes/main.js'

const port = 8000
const server = express()

server.use(routes);

server.listen(port, () => {
    console.log('Server has been initialized successfully.')
})
