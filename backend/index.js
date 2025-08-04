const express = require('express')
const app = express()
const PORT = 5000

app.use(express.json())
app.use((req,res,next) => {
    console.log(`Method: ${req.method} \nURL: ${req.url} \nTime: ${new Date().toISOString()}`)
    next()
})


app.get('/getfootage', (req, res) => {
        res.send({
            message: 'Footage retrieved successfully',
        })
    })

app.post('/postfootage', (req, res) => {
    res.send({
        message: 'Footage posted successfully',
    })

})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})