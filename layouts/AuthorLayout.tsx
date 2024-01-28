import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
    children: ReactNode
    content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
    const {
        name,
        avatar,
        description,
        email,
        twitter,
        linkedin,
        github,
        ctftime,
    } = content

    return (
        <>
            <div className="md:h-[calc(100vh-139px)] divide-y divide-gray-200 dark:divide-gray-700">
                <div className="my-8 items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                    {/* my shadcn styles aren't working */}
                    <div className="flex h-full flex-col items-center space-x-2 rounded-xl bg-[#e6e6e6] p-8 dark:bg-[#191715]">
                        {avatar && (
                            <Image
                                src={avatar}
                                alt="avatar"
                                width={192}
                                height={192}
                                className="h-48 w-48 rounded-full"
                                unoptimized
                            />
                        )}
                        <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
                            {name}
                        </h3>
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            {description}
                        </div>
                        <div className="flex space-x-3 pt-6">
                            <SocialIcon kind="mail" href={`mailto:${email}`} />
                            <SocialIcon kind="github" href={github} />
                            <SocialIcon kind="linkedin" href={linkedin} />
                            <SocialIcon kind="twitter" href={twitter} />
                            <SocialIcon kind="ctftime" href={ctftime} />
                        </div>
                    </div>
                    <div className="prose h-full max-w-none rounded-xl bg-[#e6e6e6] p-8 dark:prose-invert dark:bg-[#191715] xl:col-span-2">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
