import express from 'express'
import path from 'path'

const route = express()

import admin    from './admin.js'
import cv       from './cv.js'
import navigate from './navigate.js'

route.get('/', (req, res) => {
    res.sendFile(path.resolve(".", "./src/view/index.html"))
})

// REST
route.use('/login', admin);
route.use('/cv', cv);
route.use('/operational', navigate);

export default route