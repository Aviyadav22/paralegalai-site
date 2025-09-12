import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse){
  try {
    const { q } = JSON.parse(req.body || '{}')
    // Mocked response demonstrating RAG + citations (seeded)
    const response = {
      query: q || '',
      answer: 'Based on Delhi High Court precedents, interim relief in trademark disputes often requires a prima facie case, balance of convenience and irreparable injury; courts apply familiar principles subject to case facts.',
      citations: [
        { title: 'Delhi High Court — Case A (Mock)', url: 'https://example.com/case-a', paragraph: 3 },
        { title: 'Delhi High Court — Case B (Mock)', url: 'https://example.com/case-b', paragraph: 12 }
      ]
    }
    res.status(200).json(response)
  } catch(e){
    res.status(500).json({error: 'invalid request'})
  }
}
