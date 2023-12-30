
import SettingsViewLayer from "@/components/pages/settings";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Settings Page | Next.js E-commerce Dashboard Template",
    description: "This is Settings page for TailAdmin Next.js",
    // other metadata
};

const Settings = () => {
    return <SettingsViewLayer />
};

export default Settings;
