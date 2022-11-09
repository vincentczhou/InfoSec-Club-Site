import SocialIcon from '@/components/social-icons'
import Image from './Image'
import Link from './Link'

const MemberCard = ({ name, occupation, avatar, href, mdxSource, frontMatter }) => (
  <div
    className="md p-4 md:w-1/2"
    style={{ position: "relative", maxWidth: "544px", maxHeight: "544px" }}
  >
      <div
      className={`${
        avatar && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
            {avatar &&
        (href ? (
          <Link href={href} aria-label={`Link to ${name}`}>
            <div
              className="my-1 px-2 w-full overflow-hidden xl:my-1 xl:px-2 xl:w-1/2"
              style={{
                position: "relative",
                Width: "500px",
                Height: "500px",
                display: "flex",
                justifyContent: "center"
                        }} >
                            <Image
                                alt={name}
                                src={avatar}
                                className="object-cover object-center md:h-36 lg:h-48"
                                objectFit='contain'
                                width={175}
                                height={175}
                            />
                        </div>
                    </Link>
                ) : (
                    <div classname="my-1 px-2 w-full overflow-hidden xl:my-1 xl:px-2 xl:w-1/2" style={{
                        position: "relative", Width: "500px", Height: "500px", display: "flex",
                        justifyContent: "center"
                    }} >
                        <Image
                            alt={name}
                            src={avatar}
                            className="object-cover object-center md:h-36 lg:h-48"
                            objectFit='contain'
                            width={175}
                            height={175}
                        />
                    </div>
                ))}
            <div className="p-6">
                <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                    {href ? (
                        <Link href={href} aria-label={`Link to ${name}`}>
                            {name}
                        </Link>
                    ) : (
                        name
                    )}
                </h2>
                <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400"><b>[{frontMatter.role}]</b></p>
                <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{frontMatter.specialty}</p>
                <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{occupation}</p>
                {/* {href && (
                    <Link
                        href={href}
                        className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Link to ${name}`}
                    >
                        Learn more &rarr;
                    </Link>
                )} */}
            </div>
            <div className="mt-16 flex flex-col items-center">
                <div className="mb-3 flex space-x-4">
                    <SocialIcon kind="mail" href={`mailto:${frontMatter.email}`} />
                    <SocialIcon kind="github" href={frontMatter.github} />
                    <SocialIcon kind="facebook" href={frontMatter.facebook} />
                    <SocialIcon kind="linkedin" href={frontMatter.linkedin} />
                    <SocialIcon kind="youtube" href={frontMatter.youtube} />
                    <SocialIcon kind="twitter" href={frontMatter.twitter} />
                    <SocialIcon kind="discord" href={frontMatter.discord} />
                    <SocialIcon kind="instagram" href={frontMatter.instagram} />
                    <SocialIcon kind="homepage" href={frontMatter.homepage} />
                    <SocialIcon kind="ctftime" href={frontMatter.ctftime} />
                </div>
            </div>
        </div>
    </div>
)

export default MemberCard
