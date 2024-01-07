import { checkArray } from "@/helpers";
import { styles } from "@/styles/tailwind/ProfilePageViewLayer/profileStaticsInfo.css";
import { profile_dataType } from "@/types";
import { profile_data } from "../../../../resources/profileData";


export default function ProfileStaticsInfo() {
  return (
    <div className={`${styles.staticsInfoWrapper}`}>
      {
        checkArray(profile_data) && profile_data.map((data: profile_dataType) => (
          <div key={data.id} className={`${styles.staticsContent}`}>
            <span className={`${styles.text}`}>
              {data.count}
            </span>
            <span className="text-sm">{data.title}</span>
          </div>
        ))
      }
    </div>
  )
}
