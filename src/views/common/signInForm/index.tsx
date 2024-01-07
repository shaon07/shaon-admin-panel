import Button from "@/components/shareable/Button";
import FormInputBox from "@/components/shareable/forms/FormInputBox";
import { CheckIcon } from "@/custom-icons";
import { styles } from "@/styles/tailwind/SignInForm/index.css";
import { globalStyles } from "@/styles/tailwind/global/index.css";

export default function SignInForm() {
    return (
        <div className={`${globalStyles.container}`}>
            <div className={`${globalStyles.border}`}>
                <h3 className={`${styles.heading}`}>
                    Sign In Form
                </h3>
            </div>

            <form action="#">
                <div className="p-6.5">
                    <div className="mb-4.5">
                        <FormInputBox label="Email" placeholder="Enter your email address" />
                    </div>

                    <div>
                        <FormInputBox label="Password" placeholder="Enter password" type="password" />
                    </div>

                    <div className="mt-5 mb-5.5 flex items-center justify-between">
                        <label htmlFor="formCheckbox" className="flex cursor-pointer">
                            <div className="relative pt-0.5">
                                <input
                                    type="checkbox"
                                    id="formCheckbox"
                                    className="taskCheckbox sr-only"
                                />
                                <div className={`${styles.checkBoxWrapper}`}>
                                    <span className="text-white opacity-0">
                                        <CheckIcon />
                                    </span>
                                </div>
                            </div>
                            <p>Remember me</p>
                        </label>

                        <a href="#" className="text-sm text-primary">
                            Forget password?
                        </a>
                    </div>

                    <Button text="Sign In" type="submit" />
                </div>
            </form>
        </div>
    )
}
