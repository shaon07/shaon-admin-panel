import NotificationBoardViewLayer from "@/views/common/notificationBoard";
import { useEffect, useRef, useState } from "react";

export default function NotificationBoard() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [notifying, setNotifying] = useState(true);

    const trigger = useRef<any>(null);
    const dropdown = useRef<any>(null);

    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!dropdown.current) return;
            if (
                !dropdownOpen ||
                dropdown.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setDropdownOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    const handleToggleBoard = () => {
        setNotifying(false);
        setDropdownOpen(!dropdownOpen);
    }

    const toggleDropDown = (isOpen: boolean) => {
        setDropdownOpen(isOpen);
    }

    return <NotificationBoardViewLayer trigger={trigger} dropdown={dropdown} dropdownOpen={dropdownOpen} handleToggleBoard={handleToggleBoard} notifying={notifying} toggleDropDown={toggleDropDown} />
}
