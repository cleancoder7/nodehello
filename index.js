const express = require('express')
const app = express()
const port = 3000

//522b3cbc9e7e70146d0ddafb7cc6d54a3c5c5c11

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))