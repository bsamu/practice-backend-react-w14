const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
app.use(cors())
app.use(express.json())

// npm i cors

let serieses = [];
let id = 0;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/serieses', (req, res) => {
    res.json(serieses)
})

app.post('/api/serieses', (req, res) => {
    let series = {
        id: id++,
        name: req.body.name,
        characters: req.body.charList
    }
    serieses.push(series);
    res.sendStatus(204);
})

app.delete('/api/serieses/:id', (req, res) => {
    let idParam = req.params.id;
    // const newSerieses = [];
    // for (const s of serieses) {
    //     if (s.id !== idParam) {
    //         newSerieses.push(s)
    //     }
    // }
    // serieses = newSerieses;
    serieses = serieses.filter(s => s.id !== Number(idParam))
    res.sendStatus(204)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})