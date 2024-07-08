import express from "express";

const app = express()
const port = 8000

app.use(express.json())

app.post('/trigger-event', (req, res) =>{
    
})

app.listen(port, () => {
    console.log('Server is started running')
    console.log(`http://localhost:${port}`)
})