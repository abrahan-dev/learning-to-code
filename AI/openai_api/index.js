import { OpenAISdk } from "./OpenAISdk"

const results = await OpenAISdk.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: [
    {
      role: 'system',
      content:
        'You are a AI assistant, answer any questions to the best of your ability.',
    },
    {
      role: 'user',
      content: 'Hi!',
    },
  ],
})

console.log(results.choices[0].message.content)
