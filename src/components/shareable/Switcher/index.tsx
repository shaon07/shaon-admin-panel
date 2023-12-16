import SwitcherFour from './SwitchFour';
import SwitcherOne from './SwitchOne';
import SwitcherThree from './SwitchThree';
import SwitcherTwo from './SwitchTwo';

type SwitcherProps = {
    variant?: "one" | "two" | "three" | "four";
}

export default function Switcher({ variant = "one" }: SwitcherProps) {

    const handleVariant = () => {
        switch (variant) {
            case "one":
                return <SwitcherOne />
            case "two":
                return <SwitcherTwo />
            case "three":
                return <SwitcherThree />
            default:
                return <SwitcherFour />
        }
    }

    return handleVariant()
}
