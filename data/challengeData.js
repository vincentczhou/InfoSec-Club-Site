import Link from '@/components/Link'

const challengeData = {
  1: {
    name: 'Sanity Check',
    author: 'Vincent C.',
    category: 'Misc',
    difficulty: 'Easy',
    body: <>Hmm... I wonder where the flag could be?</>,
    download: '',
    flag: 'W3lcom3_t0_Bl4ck_M4tch4',
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
    flag: process.env.FLAG_2,
  },
  // 3: {
  //   name: 'Placeholder 2',
  //   author: 'placeholder',
  //   category: 'placeholder',
  //   difficulty: 'placeholder',
  //   body: 'placeholder',
  //   flag: 'cool',
  // },
}

export default challengeData
