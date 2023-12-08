import { NotificationIcon } from '@/custom-icons';
import { checkArray } from '@/helpers';
import { styles } from '@/styles/tailwind/notificationBoard/index.css';
import Link from 'next/link';
import NotificationItem from './notificationItem';

type NotificationBoardViewLayerProps = {
    trigger: any;
    handleToggleBoard: () => void;
    notifying: boolean;
    dropdown: any;
    toggleDropDown: (data: boolean) => void;
    dropdownOpen: boolean;
}

// !TODO: temp loop for showing multiple data
const notificationData: number[] = [];

for (let i = 0; i <= 25; i++) {
    notificationData.push(i);
}

const NotificationBoardViewLayer = ({ dropdown, dropdownOpen, handleToggleBoard, notifying, toggleDropDown, trigger }: NotificationBoardViewLayerProps) => {

    return (
        <li className="relative">
            <Link
                ref={trigger}
                onClick={() => {
                    handleToggleBoard();
                }}
                href="#"
                className={`${styles.boardWrapper}`}
            >
                <span
                    className={`${styles.notificationDotWrapper} ${notifying === false ? 'hidden' : 'inline'
                        }`}
                >
                    <span className={`${styles.notificationDot}`}></span>
                </span>

                <NotificationIcon />
            </Link>

            <div
                ref={dropdown}
                onFocus={() => toggleDropDown(true)}
                onBlur={() => toggleDropDown(false)}
                className={`${styles.notificationListWrapper} ${dropdownOpen === true ? 'block' : 'hidden'
                    }`}
            >
                <div className="px-4.5 py-3">
                    <h5 className={`${styles.notificationListHeader}`}>Notification</h5>
                </div>

                <ul className={`${styles.notificationListItemWrapper}`}>
                    {
                        checkArray(notificationData) && notificationData.map((_notify, index) => {
                            return (
                                <NotificationItem key={index} />
                            )
                        })
                    }

                </ul>
            </div>
        </li>
    );
};

export default NotificationBoardViewLayer;
