import 'dotenv/config'
import OpenAI from 'openai'

export const OpenAISdk = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})