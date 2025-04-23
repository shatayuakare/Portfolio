import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="sm:py-6 md:py-16 dark:bg-dark-background bg-light-background border-t-2 border-zinc-600">
      <div className="flex flex-col items-center justify-between sm:gap-6 md:gap-10 lg:gap-12">
        <SocialIcon />
        <div className="text-center text-dark-lightText sm:px-6">
          Portfolio @2025 All Right Reserved By Shatayu
        </div>
      </div>
    </footer>
  );
};

export default Footer;
