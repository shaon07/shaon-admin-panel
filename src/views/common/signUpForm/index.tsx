import Button from "@/components/shareable/Button";
import FormInputBox from "@/components/shareable/forms/FormInputBox";
import { globalStyles } from "@/styles/tailwind/global/index.css";
import { styles } from "@/styles/tailwind/signUpForm/index.css";

export default function SignUpForm() {
    return (
        <div className={`${globalStyles.container}`} >
            <div className={`${globalStyles.border}`}>
                <h3 className={`${styles.heading}`}>
                    Sign Up Form
                </h3>
            </div>

            <form action="#">
                <div className="p-6.5">
                    <div className="mb-4.5">
                        <FormInputBox label="Name" placeholder="Enter your username" />
                    </div>

                    <div className="mb-4.5">
                        <FormInputBox label="Email" placeholder="Enter your email address" />
                    </div>

                    <div className="mb-4.5">
                        <FormInputBox label="Phone" placeholder="Enter your phone number" type="password" />
                    </div>

                    <div className="mb-5.5">
                        <FormInputBox label="Re-type Password" placeholder="Re-enter password" type="password" />
                    </div>

                    <Button text="Sign Up" type="submit" />
                </div>
            </form>
        </div>
    )
}
