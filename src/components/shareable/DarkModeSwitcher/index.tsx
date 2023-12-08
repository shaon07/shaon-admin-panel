
import useColorMode from '@/hooks/useColorMode';
import DarkModeSwitcherViewLayer from '@/views/common/darkModeSwitcher';

export default function DarkModeSwitcher() {
    const [colorMode, setColorMode] = useColorMode();

    return <DarkModeSwitcherViewLayer colorMode={colorMode} setColorMode={setColorMode} />
}
