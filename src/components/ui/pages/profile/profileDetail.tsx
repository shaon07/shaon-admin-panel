import SocialShare from '@/components/shareable/SocialShare'
import { ADMIN_NAME, ADMIN_PASSION } from '@/constant'
import ProfileAboutMeCard from './profileAboutMeCard'
import ProfileStaticsInfo from './profileStaticsInfo'

export default function ProfileDetail() {
    return (
        <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                {ADMIN_NAME}
            </h3>

            <p className="font-medium">{ADMIN_PASSION}</p>

            <ProfileStaticsInfo />

            <ProfileAboutMeCard />

            <SocialShare />
        </div>
    )
}
