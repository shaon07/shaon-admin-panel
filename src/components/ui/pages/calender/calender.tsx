import { checkArray } from "@/helpers";
import { styles } from "@/styles/tailwind/Calender/index.css";
import { dayList } from "../../../../resources/calenderData/calender";
import CalenderHead from "./calenderHead";

export default function Calender() {
    return (
        <div className={`${styles.calenderWrapper}`}>
            <table className="w-full">
                <CalenderHead />
                <tbody>
                    <tr className="grid grid-cols-7">
                        {
                            checkArray(dayList) && dayList.map((day: number) => (
                                <td key={day} className={`${styles.dayWrapper}`}>
                                    <span className={`${styles.day}`}>
                                        {day}
                                    </span>
                                </td>
                            ))
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
