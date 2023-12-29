import BreadCrumb from "@/components/ui/pages/calender/breadCrumb"
import { styles } from "@/styles/tailwind/FormLayoutViewLayer/index.css"
import ContactForm from "@/views/common/contactForm"
import SignInForm from "@/views/common/signInForm"
import SignUpForm from "@/views/common/signUpForm"

export default function FormLayoutContainers() {
    return (
        <div>
            <BreadCrumb title="Form Layouts" />
            <div className={`${styles.formLayoutWrapper}`}>
                <div className={`${styles.container}`}>
                    <ContactForm />
                </div>

                <div className={`${styles.container}`}>
                    <SignInForm />
                    <SignUpForm />
                </div>
            </div>
        </div>
    )
}
