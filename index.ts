import express, { Request, Response } from 'express'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config(
  {
    path: path.join(__dirname, '.env')
  }
);

import GitlabCommunicator from './axios/gitlab'

const app = express()
const port = process.env.PORT || 3000
app.get('/', (req: Request, res: Response) => {
  GitlabCommunicator.get('/projects').then((response) => {
    res.send(response.data)
  })
})

app.listen(port)