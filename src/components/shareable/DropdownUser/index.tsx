import ProfileBoardViewLayer from "@/views/common/profileBoard";
import { useEffect, useRef, useState } from "react";

const ProfileBoard = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const trigger = useRef<any>(null);
    const dropdown = useRef<any>(null);

    // close on click outside
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
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    const handleToggleBoard = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const toggleDropDown = (isOpen: boolean) => {
        setDropdownOpen(isOpen);
    }

    return (
        <ProfileBoardViewLayer handleToggleBoard={handleToggleBoard} dropdownOpen={dropdownOpen} trigger={trigger} dropdown={dropdown} toggleDropDown={toggleDropDown} />
    );
};

export default ProfileBoard;
