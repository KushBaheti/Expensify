const path = require('path')
const express = require('express')
const app = express()
const publicDirPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000

app.use(express.static(publicDirPath))

app.get('*', (req, res) => {
    res.sendFile(path.join(publicDirPath, 'index.html'))
})

app.listen(port, () => {
    console.log("Server is running on port 3000.")
})