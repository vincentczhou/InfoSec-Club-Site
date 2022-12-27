export default function handler(req, res) {
  if (req.method === 'POST') {
    let input = req.body.input
    const flag = process.env.FLAG_3

    if (!input) {
      return res.status(400).json({ message: 'Input is required' })
    }

    if (typeof input == 'string' || input instanceof String) {
      input = input.replace(/[|&;$%@"<>()+,]/g, '')
    }

    if (input == "<script>alert('vulnerable')</script>") {
      return res.status(200).json({ message: `The flag is: ${flag}` })
    }

    return res.status(200).json({ message: 'Okay.' })
  } else {
    return res.status(405).json({ message: 'Invalid Request Type' })
  }
}
