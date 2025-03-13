import PageHeading from "../components/PageHeading";

const Contact = () => {
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
          >
            <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-3 md:gap-5">
              <input
                type="text"
                placeholder="Enter your name"
                className="input w-full text-zinc-500 focus:outline-none dark:bg-dark-background light:bg-light-background"
              />
              <input
                type="text"
                placeholder="Enter your Phone"
                className="input w-full text-zinc-500 focus:outline-none dark:bg-dark-background light:bg-light-background"
              />
              <input
                type="text"
                placeholder="Enter your email"
                className="input w-full text-zinc-500 focus:outline-none dark:bg-dark-background light:bg-light-background"
              />
              <input
                type="text"
                placeholder="Enter your Subject"
                className="input w-full text-zinc-500 focus:outline-none dark:bg-dark-background light:bg-light-background"
              />
            </div>
            <textarea
              className="textarea resize-none
                        input w-full text-zinc-500 focus:outline-none  h-52 dark:bg-dark-background light:bg-light-background"
              rows={5}
              placeholder="Enter your Message"
            ></textarea>

            <button
              className="btn btn-ghost btn-wide  text-lg py-2 mx-auto rounded-full dark:bg-dark-background light:bg-light-background"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
