import Social from "../json/social.json";

const SocialIcon = () => {
  return (
    <div className="flex sm:gap-2 md:gap-5">
      {Social.map((elem, index) => (
        <a
          target="_blank"
          href={elem.url}
          className="btn btn-ghost border-1 sm:h-10 sm:min-h-10 sm:w-10 md:h-12 md:w-12 border-primary/50 hover:border-primary/80 shadow-lg  text-light-text/80 dark:text-dark-text/90 hover:text-primary "
          key={index}
        >
          <i className={`bx ${elem.icon} sm:text-xl md:text-2xl`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialIcon;
