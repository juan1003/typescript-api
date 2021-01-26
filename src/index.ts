import express from 'express'
import cors from 'cors'
import cp from 'cookie-parser'
import helmet from 'helmet'
import morgan from 'morgan'

let app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cp())
app.use(morgan('dev'))
app.use(helmet())

app.get('/', (req: any, res: any) => {
    res.status(200).json({
        message: "Welcome to the Typescript API"
    })
})

app.listen(8080)