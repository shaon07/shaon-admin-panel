import { checkArray } from "@/helpers";
import { topProductData, topProductHeading } from "@/resources/topProductTable";
import { globalStyles } from "@/styles/tailwind/global/index.css";
import { styles } from "@/styles/tailwind/topProductTable/index.css";
import { topProductHeadingType, topProductPriceType } from "@/types";
import Image from "next/image";



const TopProductTable = () => {
    return (
        <div className={`${globalStyles.container}`}>
            <div className="py-6 px-4 md:px-6 xl:px-7.5">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    Top Products
                </h4>
            </div>

            <div className={`${styles.grid}`}>
                {
                    checkArray(topProductHeading) && topProductHeading.map((heading: topProductHeadingType,) => (
                        <div
                            className="col-span-1 flex items-center"
                            key={heading.id}
                        >
                            <p className="font-medium">{heading.name}</p>
                        </div>
                    ))
                }
            </div>

            {checkArray(topProductData) && topProductData.map((product: topProductPriceType, key: any) => (
                <div
                    className={`${styles.grid}`}
                    key={key}
                >
                    <div className="col-span-3 flex items-center">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <div className="h-12.5 w-15 rounded-md">
                                <Image
                                    src={product.image}
                                    width={60}
                                    height={50}
                                    alt="Product"
                                />
                            </div>
                            <p className="text-sm text-black dark:text-white">
                                {product.name}
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2 hidden items-center sm:flex">
                        <p className="text-sm text-black dark:text-white">
                            {product.category}
                        </p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="text-sm text-black dark:text-white">
                            ${product.price}
                        </p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="text-sm text-black dark:text-white">{product.sold}</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="text-sm text-meta-3">${product.profit}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopProductTable;
