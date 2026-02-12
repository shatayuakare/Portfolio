interface PageHeadingProps {
  title: string;
  describe: string;
}

const PageHeading = ({ title, describe }: PageHeadingProps) => {
  return (
    <div className="text-center leading-tight">
      <div
        className={`uppercase font-semibold sm:text-sm md:mb-3 sm:mb-0 text-primary`}
      >
        {title}
      </div>
      <div className="dark:text-white text-light-text sm:text-xl md:text-[3vw] capitalize font-[Orbitron] leading-0">
        {describe}
      </div>
    </div>
  );
};

export default PageHeading;
