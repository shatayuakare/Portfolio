import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="py-16 dark:bg-dark-background light:bg-light-background border-t-2 border-zinc-600">
      <div className="flex flex-col items-center justify-between gap-12">
        <SocialIcon />
        <div className="text-center sm:px-6">
          Portfolio @2025 All Right Reserved By Shatayu
        </div>
      </div>
    </footer>
  );
};

export default Footer;
