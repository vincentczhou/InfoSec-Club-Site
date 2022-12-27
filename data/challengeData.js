import siteMetadata from '@/data/siteMetadata'

const challengeData = {
  1: {
    name: 'Sanity Check',
    author: 'Vincent C.',
    category: 'Misc',
    difficulty: 'Easy',
    body: <>Hmm... I wonder where the flag could be?</>,
    download: '',
    link: '',
    flag: 'W3lcom3_t0_Bl4ck_M4tch4', // BLACKMATCHA{W3lcom3_t0_Bl4ck_M4tch4} It was right here all along!
  },
  2: {
    name: 'Xorry! I Broke Your Hard Drive!',
    author: 'Vincent C.',
    category: 'Crypto',
    difficulty: 'Easy',
    body: (
      <>
        My lab partner decided to pour Hydrochloric Acid all over my PC and damaged my Hard Drive!
        Good thing I always carry my trusty bottle of CHRomium (III) Hydroxide with me (my friends
        call me based for a reason), otherwise my very ORDinary, plain NVIDIA® GeForce RTX™ 9990TI
        Super could have gotten damaged.
      </>
    ),
    download: {
      'encryptor.py': 'encryptor.py',
    },
    link: '',
    flag: process.env.FLAG_2,
  },
  3: {
    name: 'DOMPurify Alternative',
    author: 'Vincent C.',
    category: 'Web',
    difficulty: 'Easy',
    body: (
      <>
        I stol- I mean I found a regular expression on StackExchange that is totally better than
        DOMPurify! Goodbye malicious user input, my API is totally secure!
      </>
    ),
    download: '',
    link: {
      Link: '/api/challenges/3',
      Source: `${siteMetadata.siteRepo}/blob/master/pages/api/challenges/3/index.js`,
    },
    flag: process.env.FLAG_3,
  },
}

export default challengeData
