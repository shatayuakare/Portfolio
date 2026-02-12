import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="sm:py-6 md:py-16 bg-primaryDark border-t-2 border-zinc-600">
      <div className="flex flex-col items-center justify-between sm:gap-6 md:gap-10 lg:gap-12">
        <div className="text-center">
          <div className="text-[1rem] font-semibold dark:text-dark-text text-light-text mb-3">Get in Touch</div>
          <SocialIcon />
        </div>
        <div className="text-center text-dark-lightText sm:px-6">
          Portfolio @2025 All Right Reserved By Shatayu
        </div>
      </div>
    </footer >
  );
};

export default Footer;
