import { formatSlug, getFileBySlug, getFiles } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import memberData from '@/data/memberData'
import MemberCard from '@/components/MemberCard'
import { PageSEO } from '@/components/SEO'

function compare(a, b) {
  const rolenumber = {}
  rolenumber['President'] = 1
  rolenumber['Co-President'] = 2
  rolenumber['Treasurer'] = 3
  rolenumber['Secretary'] = 4
  rolenumber['Officer'] = 5
  rolenumber['Member'] = 10
  rolenumber['Guest'] = 100
  const a_number =
    rolenumber[a.frontMatter.role.replace('Former ', '')] +
    (a.frontMatter.role.includes('Former') ? 10 : 0)
  const b_number =
    rolenumber[b.frontMatter.role.replace('Former ', '')] +
    (b.frontMatter.role.includes('Former') ? 10 : 0)
  return (
    (a_number == undefined ? Infinity : a_number) - (b_number == undefined ? Infinity : b_number)
  )
}

export async function getStaticProps() {
  const authors = await getFiles('authors')
  const filesPromise = authors.map((filename) => getFileBySlug('authors', formatSlug(filename)))
  const files = (await Promise.all(filesPromise)).sort(compare)
  return { props: { members: files } }
}

export default function Members({ members }) {
  return (
    <>
      <PageSEO title={`Members - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Members
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Members of BC InfoSec Club
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {members.map((d) => (
              <MemberCard
                key={d.frontMatter.name}
                name={d.frontMatter.name}
                occupation={d.frontMatter.occupation}
                avatar={d.frontMatter.avatar}
                href={d.frontMatter.homepage}
                mdxSource={d.mdxSource}
                frontMatter={d.frontMatter}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
