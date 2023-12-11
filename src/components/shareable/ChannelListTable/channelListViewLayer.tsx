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
                        className={`${styles.channelListTableWrapper} ${key === channelListData.length - 1
                            ? ""
                            : styles.tableListBorder
                            }`}
                        key={key}
                    >
                        <div className={`${styles.logoWrapper}`}>
                            <div className="flex-shrink-0">
                                <Image src={brand.logo} alt="Brand" width={48} height={48} />
                            </div>
                            <p className={`${styles.brandName}`}>
                                {brand.name}
                            </p>
                        </div>

                        <div className={`${styles.listWrapperOne}`}>
                            <p className="text-black dark:text-white">{brand.visitors}K</p>
                        </div>

                        <div className={`${styles.listWrapperOne}`}>
                            <p className="text-meta-3">${brand.revenues}</p>
                        </div>

                        <div className={`${styles.listWrapperTwo}`}>
                            <p className="text-black dark:text-white">{brand.sales}</p>
                        </div>

                        <div className={`${styles.listWrapperTwo}`}>
                            <p className="text-meta-5">{brand.conversion}%</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
