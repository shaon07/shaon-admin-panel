
import TablesViewLayer from "@/components/pages/tables";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Tables Page | Next.js E-commerce Dashboard Template",
    description: "This is Tables page for TailAdmin Next.js",
    // other metadata
};

const TablesPage = () => {
    return <TablesViewLayer />
};

export default TablesPage;
