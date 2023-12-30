import { DownloadIcon, EyeIcon, TrashIcon } from "@/custom-icons";
import { checkArray } from "@/helpers";
import { packageData } from "@/resources/topPackageListTable";
import { globalStyles } from "@/styles/tailwind/global/index.css";

const TopPackageTable = () => {
    return (
        <div className={`${globalStyles.border}`}>
            <div className="mb-4">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    Top Packages
                </h4>
            </div>

            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                            <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Package
                            </th>
                            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                Invoice date
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                Status
                            </th>
                            <th className="py-4 px-4 font-medium text-black dark:text-white">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {checkArray(packageData) && packageData.map((packageItem, key) => (
                            <tr key={key}>
                                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                    <h5 className="font-medium text-black dark:text-white">
                                        {packageItem.name}
                                    </h5>
                                    <p className="text-sm">${packageItem.price}</p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <p className="text-black dark:text-white">
                                        {packageItem.invoiceDate}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <p
                                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${packageItem.status === "Paid"
                                            ? "text-success bg-success"
                                            : packageItem.status === "Unpaid"
                                                ? "text-danger bg-danger"
                                                : "text-warning bg-warning"
                                            }`}
                                    >
                                        {packageItem.status}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <div className="flex items-center space-x-3.5">
                                        <button className="hover:text-primary">
                                            <EyeIcon />
                                        </button>
                                        <button className="hover:text-primary">
                                            <TrashIcon />
                                        </button>
                                        <button className="hover:text-primary">
                                            <DownloadIcon />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TopPackageTable;
