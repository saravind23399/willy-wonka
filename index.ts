import express, { Request, Response } from 'express'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config(
  {
    path: path.join(__dirname, '.env')
  }
);

import GitlabCommunicator from './axios/gitlab'
import { Project } from './types';
import SlackCommunicator from './axios/slack';

const app = express()
const port = process.env.PORT || 3000
app.get('/', async (req: Request, res: Response) => {
  try {
    const encodedProjectString = encodeURIComponent(process.env.GITLAB_PROJECT_URL || '')
    const { data: project } = await GitlabCommunicator.get<Project>(`/projects/${encodedProjectString}`)
    const slack = await SlackCommunicator.post('', {
      text: 'Hello World!'
    })
    res.send('Success')
  } catch (error) {
    res.status(500).send(error)
  }
})

app.listen(port)