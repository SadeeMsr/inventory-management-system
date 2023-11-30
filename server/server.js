import "dotenv/config";

import express from "express";
import morgan from "morgan";
import routes from './Routes/index.js'
const app = express();
const PORT = process.env.PORT || 8000


app.use(express.json())
app.use(morgan('combined'))

// app.use(express.urlencoded({extended:false}))


app.get("/", (req, res) => {
    return res.send('hello')
})

app.use(routes)

app.listen(PORT, () =>
    console.log("HEY SERVER IS RUNNING")
)
