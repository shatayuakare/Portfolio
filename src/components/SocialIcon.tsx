import Social from "../json/social.json";

const SocialIcon = () => {
  return (
    <div className="flex sm:gap-2 md:gap-5">
      {Social.map((elem, index) => (
        <a
          target="_blank"
          href={elem.url}
          className="btn btn-ghost border-1 sm:h-10 sm:min-h-10 sm:w-10 md:h-12 md:w-12 dark:border-dark-border dark:hover:bg-dark-lightBackground dark:text-zinc-200 hover:text-primary light:text-zinc-800 light:border-light-border"
          key={index}
        >
          <i className={`bx ${elem.icon} sm:text-xl md:text-2xl`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialIcon;
