import { NAME } from '@repo/comman/config'
import express from 'express'

const app = express()

app.get('/', (req, res)=>{
    res.send(`Hello ${NAME}`)
})

app.listen(3333, ()=>{
    console.log("server is running on http://localhost:3333")
})