import { dateList } from "@/components/pages/calender/data/date";
import { checkArray } from "@/helpers";
import { styles } from "@/styles/tailwind/Calender/calenderHead.css";
import { dateListType } from "@/types";

export default function CalenderHead() {
    return (
        <thead>
            <tr className={`${styles.calenderHeadWrapper}`}>
                {
                    checkArray(dateList) && dateList.map((date: dateListType) => {
                        return (
                            <th key={date.id} className={`${styles.headRow}`}>
                                <span className="hidden lg:block"> {date.fullName} </span>
                                <span className="block lg:hidden"> {date.shortName} </span>
                            </th>
                        )
                    })
                }
            </tr>
        </thead>
    )
}
