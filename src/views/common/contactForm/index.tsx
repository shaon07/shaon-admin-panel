
"use client";
import Button from "@/components/shareable/Button";
import SelectBox from "@/components/shareable/SelectBox";
import FormInputBox from "@/components/shareable/forms/FormInputBox";
import FormTextAreaBox from "@/components/shareable/forms/FormTextArea";
import { styles } from "@/styles/tailwind/contactForm/index.css";
import { globalStyles } from "@/styles/tailwind/global/index.css";

export default function ContactForm() {
  return (
    <div className={`${globalStyles.container}`}>
      <div className={`${globalStyles.border}`}>
        <h3 className={`${styles.heading}`}>
          Contact Form
        </h3>
      </div>

      <form action="#">
        <div className="p-6.5">
          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">

            <div className="w-full xl:w-1/2">
              <FormInputBox label="First name" placeholder="Enter your first name" />
            </div>

            <div className="w-full xl:w-1/2">
              <FormInputBox label="Last name" placeholder="Enter your last name" />
            </div>
          </div>

          <div className="mb-4.5">
            <FormInputBox label="Email" placeholder="Enter your email address" />
          </div>

          <div className="mb-4.5">
            <FormInputBox label="Subject" placeholder="Select subject" />
          </div>

          <div className="mb-4.5">
            <SelectBox label="Subject" options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} onChange={(data) => { console.log(data) }} />
          </div>

          <div className="mb-6">
            <FormTextAreaBox label="Message" placeholder="Type your message" />
          </div>

          <Button text="Send Message" />

        </div>
      </form>
    </div>
  )
}
