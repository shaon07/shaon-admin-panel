import FormInputBox from "@/components/shareable/forms/FormInputBox";
import FormTextAreaBox from "@/components/shareable/forms/FormTextArea";
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
                        <FormInputBox label="Full Name" placeholder="Devid Jhon" PrefixIcon={<UserIconBox />} />

                        <FormInputBox label="Phone Number" type="number" placeholder="Phone Number" />
                    </div>

                    <div className="mb-5.5">
                        <FormInputBox label="Email Address" placeholder="devidjond45@gmail.com" PrefixIcon={<EnvelopIcon />} />
                    </div>

                    <div className="mb-5.5">
                        <FormInputBox label="Username" placeholder="devidjhon24" />
                    </div>

                    <div className="mb-5.5">
                        <FormTextAreaBox label="Bio" placeholder="Write your bio here" PrefixIcon={<EditIconPen />} />
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
