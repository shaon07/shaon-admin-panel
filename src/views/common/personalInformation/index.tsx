import { EditIconPen, EnvelopIcon, UserIconBox } from "@/custom-icons";
import { globalStyles } from "@/styles/tailwind/global/index.css";
import { styles } from "@/styles/tailwind/personalInformation/index.css";

export default function PersonalInformation() {
    return (
        <div className={`${globalStyles.container}`}>
            <div className={`${globalStyles.border}`}>
                <h3 className={`${styles.heading}`}>
                    Personal Information
                </h3>
            </div>

            <div className="p-7">
                <form action="#">
                    <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                        <div className="w-full sm:w-1/2">
                            <label
                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                htmlFor="fullName"
                            >
                                Full Name
                            </label>
                            <div className="relative">
                                <span className="absolute left-4.5 top-4">
                                    <UserIconBox />
                                </span>
                                <input
                                    className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    placeholder="Devid Jhon"
                                    defaultValue="Devid Jhon"
                                />
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2">
                            <label
                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                htmlFor="phoneNumber"
                            >
                                Phone Number
                            </label>
                            <input
                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                placeholder="+990 3343 7865"
                                defaultValue="+990 3343 7865"
                            />
                        </div>
                    </div>

                    <div className="mb-5.5">
                        <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="emailAddress"
                        >
                            Email Address
                        </label>
                        <div className="relative">
                            <span className="absolute left-4.5 top-4">
                                <EnvelopIcon />
                            </span>
                            <input
                                className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                type="email"
                                name="emailAddress"
                                id="emailAddress"
                                placeholder="devidjond45@gmail.com"
                                defaultValue="devidjond45@gmail.com"
                            />
                        </div>
                    </div>

                    <div className="mb-5.5">
                        <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="Username"
                        >
                            Username
                        </label>
                        <input
                            className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                            type="text"
                            name="Username"
                            id="Username"
                            placeholder="devidjhon24"
                            defaultValue="devidjhon24"
                        />
                    </div>

                    <div className="mb-5.5">
                        <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="Username"
                        >
                            BIO
                        </label>
                        <div className="relative">
                            <span className="absolute left-4.5 top-4">
                                <EditIconPen />
                            </span>

                            <textarea
                                className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                name="bio"
                                id="bio"
                                rows={6}
                                placeholder="Write your bio here"
                                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet."
                            ></textarea>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4.5">
                        <button
                            className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                            type="submit"
                        >
                            Cancel
                        </button>
                        <button
                            className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-95"
                            type="submit"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
