import Button from "@/components/shareable/Button";
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
            <label className="mb-2.5 block text-black dark:text-white">
              Subject
            </label>
            <div className="relative z-20 bg-transparent dark:bg-form-input">
              <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                <option value="">Type your subject</option>
                <option value="">USA</option>
                <option value="">UK</option>
                <option value="">Canada</option>
              </select>
              <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                      fill=""
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
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
