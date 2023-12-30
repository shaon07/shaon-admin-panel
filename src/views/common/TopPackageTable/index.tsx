import { DownloadIcon, EyeIcon, TrashIcon } from "@/custom-icons";
import { checkArray } from "@/helpers";
import { packageData } from "@/resources/topPackageListTable";
import { globalStyles } from "@/styles/tailwind/global/index.css";
import { styles } from "@/styles/tailwind/topPackageTable/index.css";

const TopPackageTable = () => {
    return (
        <div className={`${globalStyles.container} p-4 md:p-8`}>
            <div className="mb-4">
                <h4 className={`${styles.heading}`}>
                    Top Packages
                </h4>
            </div>

            <div className={`${styles.tableContentWrapper}`}>
                <table className={`${styles.tableWrapper}`}>
                    <thead>
                        <tr className={`${styles.tableRow}`}>
                            <th className={`min-w-[220px] xl:pl-11 ${styles.tableHead}`}>
                                Package
                            </th>
                            <th className={`min-w-[150px] ${styles.tableHead}`}>
                                Invoice date
                            </th>
                            <th className={`min-w-[120px] ${styles.tableHead}`}>
                                Status
                            </th>
                            <th className={`${styles.tableHead}`}>
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {checkArray(packageData) && packageData.map((packageItem, key) => (
                            <tr key={key}>
                                <td className={`${styles.topRow}`}>
                                    <h5 className="font-medium text-black dark:text-white">
                                        {packageItem.name}
                                    </h5>
                                    <p className="text-sm">${packageItem.price}</p>
                                </td>
                                <td className={`${styles.tableData}`}>
                                    <p className="text-black dark:text-white">
                                        {packageItem.invoiceDate}
                                    </p>
                                </td>
                                <td className={`${styles.tableData}`}>
                                    <p
                                        className={`${styles.statusRow} ${packageItem.status === "Paid"
                                            ? "text-success bg-success"
                                            : packageItem.status === "Unpaid"
                                                ? "text-danger bg-danger"
                                                : "text-warning bg-warning"
                                            }`}
                                    >
                                        {packageItem.status}
                                    </p>
                                </td>
                                <td className={`${styles.tableData}`}>
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
