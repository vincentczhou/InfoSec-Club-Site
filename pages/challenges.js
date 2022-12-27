import challengeData from '@/data/challengeData'
import siteMetadata from '@/data/siteMetadata'
import ChallengeCard from '@/components/ChallengeCard'
import { PageSEO } from '@/components/SEO'

export default function Challenges() {
  return (
    <>
      <PageSEO
        title={`Challenges - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Challenges
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {
              'All challenges are authored by ☕Black Matcha🍵 members! Flags are in the format BLACKMATCHA{...}!'
            }
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {Object.entries(challengeData).map((d) => (
              <ChallengeCard
                key={d[0]}
                id={d[0]}
                name={d[1].name}
                author={d[1].author}
                category={d[1].category}
                difficulty={d[1].difficulty}
                body={d[1].body}
                link={d[1].link}
                download={d[1].download}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
