interface PageHeadingProps {
  title: string;
  describe: string;
}

const PageHeading = ({ title, describe }: PageHeadingProps) => {
  return (
    <div className="text-center leading-tight">
      <div className={`uppercase font-semibold sm:text-sm pb-3 text-primary`}>
        {title}
      </div>
      <div className="text-white sm:text-xl md:text-[3.4vw] capitalize font-[Orbitron] leading-0">
        {describe}
      </div>
    </div>
  );
};

export default PageHeading;
