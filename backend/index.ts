import express, { type Request, type Response } from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.get('/api/health', (_request: Request, response: Response) => {
  response.json({ status: 'ok', message: 'Portfolio API is running.' })
})

app.post('/api/contact', (request: Request, response: Response) => {
  const { name, email, message, projectType } = request.body as {
    name?: string
    email?: string
    message?: string
    projectType?: string
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return response.status(400).json({ message: 'Name, email, and message are required.' })
  }

  console.log(`New project inquiry from ${name} (${email})`, { projectType, message })
  return response.status(201).json({
    message: 'Thanks! Your message is on its way. I’ll get back to you shortly.',
  })
})

app.listen(port, () => {
  console.log(`Portfolio API listening on http://localhost:${port}`)
})
