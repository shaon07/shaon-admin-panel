import { styles } from "@/styles/tailwind/ChannelListViewLayer/tableHeading.css";

export type TableHeadingProps = {
    title: string
}

export default function TableHeading({ title }: TableHeadingProps) {
    return (
        <div className={`${styles.tableHeadingWrapper}`}>
            <h5 className={`${styles.tableHeading}`}>
                {title}
            </h5>
        </div>
    )
}
