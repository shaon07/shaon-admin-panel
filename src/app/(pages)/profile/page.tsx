import ProfilePageViewLayer from "@/components/pages/profile";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Profile Page",
    description: "This is Profile page for TailAdmin Next.js",
    // other metadata
};

export default function Profile() {
    return <ProfilePageViewLayer />
}
