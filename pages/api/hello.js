// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from '../../libs/db'

export default async function handler(req, res) {
  const create = await db('posts').insert({
    title:'Post title',
    content:"Post content 1"
  })

  res.status(200).json({ name: 'John Doe' })
}
