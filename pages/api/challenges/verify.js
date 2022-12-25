import challengeData from '@/data/challengeData'

export default function handler(req, res) {
  if (req.method === 'POST') {
    const id = req.body.id
    const flag = req.body.flag
    if (!id || !flag) {
      return res.status(400).json({ message: 'Flag and ID are required' })
    }

    let challenge = challengeData[id]

    if (flag === challenge?.flag) {
      return res.status(200).json({ message: `Successfully solved ${challenge.name}` })
    } else {
      return res.status(400).json({ message: 'Flag or ID are invalid' })
    }
  } else {
    return res.status(405).json({ message: 'Invalid Request Type' })
  }
}
