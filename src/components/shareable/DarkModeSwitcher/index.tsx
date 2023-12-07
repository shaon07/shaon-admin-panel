
import useColorMode from '@/hooks/useColorMode';
import DarkModeSwitcherViewLayer from '@/views/darkModeSwitcher';

export default function DarkModeSwitcher() {
    const [colorMode, setColorMode] = useColorMode();

    return <DarkModeSwitcherViewLayer colorMode={colorMode} setColorMode={setColorMode} />
}
