import { Avatar, AvatarFallback, AvatarImage } from '@/components/Avatar'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Home({ posts }) {
    return (
        <>
            <div className="-mt-32 flex h-screen items-center justify-center">
                <div className="flex flex-col items-center gap-6 md:flex-row md:gap-12">
                    <Avatar className="h-48 w-48 md:h-64 md:w-64">
                        <AvatarImage
                            alt="User Avatar"
                            src="/static/images/climbing.jpg"
                        />
                        <AvatarFallback>PD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-2 text-2xl md:gap-4 md:text-3xl">
                        <div className="text-center text-4xl font-bold md:text-left md:text-6xl">
                            Hey! 👋, I&apos;m Philip.
                        </div>
                        <div className="text-center text-gray-500 dark:text-gray-400 md:text-left text-base">
                            I&apos;m a cybersecurity enthusiast, CTF player, and software developer. Feel free to check out my <a href="/about" className="text-blue-500">about</a> page or contact me at the links below!
                        </div>
                        <div className="mt-4 flex justify-center gap-4 md:justify-start md:gap-8">
                            <SocialIcon
                                kind="mail"
                                href={`mailto:${siteMetadata.email}`}
                                size={10}
                            />
                            <SocialIcon
                                kind="linkedin"
                                href={siteMetadata.linkedin}
                                size={10}
                            />
                            <SocialIcon
                                kind="twitter"
                                href={siteMetadata.twitter}
                                size={10}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
