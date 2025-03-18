import { useState } from "react";
import PageHeading from "../components/PageHeading";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const contactDetail = [
    {
      icon: "bx-map-alt",
      title: "Nagpur, Maharashtra, India",
    },
    {
      icon: "bx-phone-call",
      title: "+91 9359966102",
    },
    {
      icon: "bx-mail-send",
      title: "shatayuakare121outlook.com",
    },
    {
      icon: "bx-message-rounded-check",
      title: "Freelance Available",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.name === "") {
      setError("Name is required");
      return;
    }
    if (formData.email === "") {
      setError("Email is required");
      return;
    }
    if (formData.phone === "") {
      setError("Phone is required");
      return;
    }
    if (formData.subject === "") {
      setError("Subject is required");
      return;
    }
    if (formData.message === "") {
      setError("Message is required");
      return;
    }

    const serviceID = "service_syv2azv";
    const templateID = "template_yulsx1h";
    const publicKey = "jEwLKezMiGp2g-tZ0";

    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: formData.name,
          to_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          text:
            `*New Contact Form Submission*%0A` +
            `*Name:* ${formData.name}%0A` +
            `*Phone:* ${formData.phone}%0A` +
            `*Email:* ${formData.email}%0A` +
            `*Subject:* ${formData.subject}%0A` +
            `*Message:* ${formData.message}`,
        },
        publicKey
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Thank you for Contacting us");

        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        setStatus(
          "Thank you for reaching out to us! We appreciate your interest and will get back to you shortly."
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
        toast.error(
          `Contact Failed to send email. Please try again. ${error.text}`
        );
        const text =
          `*New Contact Form Submission*%0A` +
          `*Name:* ${formData.name}%0A` +
          `*Phone:* ${formData.phone}%0A` +
          `*Email:* ${formData.email}%0A` +
          `*Subject:* ${formData.subject}%0A` +
          `*Message:* ${formData.message}`;
        const phoneNumber = "9359966102";
        const waURL = `https://wa.me/${phoneNumber}?text=${text}`;

        setIsLoading(false);
        setTimeout(() => {
          window.open(waURL, "_blank");
        }, 2000);
      });
  };

  return (
    <section className="contant-center sm:py-6 md:py-10 sm:pt-0" id="contact">
      <PageHeading title="Contact" describe="Contact with me" />

      <div className="flex flex-1 sm:flex-col md:flex-row sm:gap-4 md:gap-8 sm:p-6 md:p-10 sm:px-0">
        <div className="flex-1 flex flex-col justify-between sm:gap-4 sm:order-2 md:order-1">
          {contactDetail.map((elem, idx) => (
            <div
              className="p-4 md:p-6 shadow-lg rounded-xl flex flex-col items-center justify-between  dark:bg-dark-lightBackground light:bg-light-background gap-2"
              key={idx}
            >
              <i
                className={`bx ${elem.icon} text-primary font-light text-[2.5rem]`}
              ></i>
              <div className="text-md text-dark-lightText">{elem.title}</div>
            </div>
          ))}
        </div>

        <div className="flex-2 shadow-lg bg-dark-lightBackground rounded-xl sm:order-1 md:order-2">
          <form
            className="shadow-xl sm:p-6 md:p-10  w-full grid sm:gap-3 md:gap-5"
            action=""
            onSubmit={handleSubmit}
          >
            <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-3 md:gap-5">
              <input
                type="text"
                placeholder="Enter your name"
                className="input w-full text-zinc-300 focus:outline-none dark:bg-dark-background light:bg-light-background"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Enter your Phone"
                className="input w-full text-zinc-300 focus:outline-none dark:bg-dark-background light:bg-light-background"
                name="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Enter your email"
                className="input w-full text-zinc-300 focus:outline-none dark:bg-dark-background light:bg-light-background"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Enter your Subject"
                className="input w-full text-zinc-300 focus:outline-none dark:bg-dark-background light:bg-light-background"
                name="subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />
            </div>
            <textarea
              className="textarea resize-none
                        input w-full text-zinc-300 focus:outline-none  h-52 dark:bg-dark-background light:bg-light-background"
              rows={5}
              placeholder="Enter your Message"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            {error && <div className="text-red-500">{error}</div>}
            {!status && (
              <div className="light:text-light-lightText dark:text-dark-lightText">
                {status}
              </div>
            )}

            <button
              className="btn btn-ghost btn-wide  text-lg py-2 mx-auto rounded-full dark:bg-dark-background light:bg-light-background"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <i className="loading loading-spinner loading-md"></i>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
