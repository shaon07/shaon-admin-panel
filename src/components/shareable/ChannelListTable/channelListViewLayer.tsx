import { checkArray } from '@/helpers'
import { styles } from '@/styles/tailwind/ChannelListViewLayer/index.css'
import { channelListType } from '@/types'
import Image from 'next/image'
import { channelHeading } from './data/channelData'
import TableHeading from './tableHeading'

type ChannelListViewLayerProps = {
    channelListData: channelListType[]
}

export default function ChannelListViewLayer({ channelListData }: ChannelListViewLayerProps) {
    return (
        <div className={`${styles.channelListWrapper}`}>
            <h4 className={`${styles.heading}`}>
                Top Channels
            </h4>

            <div className={`${styles.channelContentWrapper}`}>
                <div className={`${styles.channelContent}`}>
                    {
                        checkArray(channelHeading) && channelHeading.map((brand, key) => {
                            return (
                                <TableHeading
                                    key={key}
                                    title={brand.title}
                                />
                            )
                        })
                    }
                </div>

                {checkArray(channelListData) && channelListData.map((brand, key) => (
                    <div
                        className={`grid grid-cols-3 sm:grid-cols-5 ${key === channelListData.length - 1
                            ? ""
                            : "border-b border-stroke dark:border-strokedark"
                            }`}
                        key={key}
                    >
                        <div className="flex items-center gap-3 p-2.5 xl:p-5">
                            <div className="flex-shrink-0">
                                <Image src={brand.logo} alt="Brand" width={48} height={48} />
                            </div>
                            <p className="hidden text-black dark:text-white sm:block">
                                {brand.name}
                            </p>
                        </div>

                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-black dark:text-white">{brand.visitors}K</p>
                        </div>

                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-meta-3">${brand.revenues}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{brand.sales}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-meta-5">{brand.conversion}%</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
