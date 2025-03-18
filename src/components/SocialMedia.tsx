import Social from "../json/social.json";

// this component for home page
const SocialMedia = () => {
  return (
    <div className="flex gap-8">
      {Social.map((elem, index) => (
        <button
          className={`btn btn-ghost border-1 rounded-full hover:text-primary dark:hover:bg-dark-lightBackground flex justify-center items-center dark:text-dark-lightText border-dark-border dark:hover:text-primary`}
          key={index}
        >
          <i className={`bx text-lg ${elem.icon}`}></i>
          <i>{elem.title}</i>
        </button>
      ))}
    </div>
  );
};

export default SocialMedia;
