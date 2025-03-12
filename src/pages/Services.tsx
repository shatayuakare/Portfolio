import React from "react";
import PageHeading from "../components/PageHeading";
import Service from "../json/services.json";

const Services = () => {
  return (
    <section className="content-center sm:pt-4" id="servises">
      <PageHeading title={"My Services"} describe={"What i Do"} />

      <div className="grid sm:grid-cols-1 md:grid-cols-3 sm:gap-5 md:gap-8 mt-8">
        {Service.map((elem, index) => (
          <div
            className="p-8 shadow-xl dark:bg-dark-lightBackground rounded-xl"
            key={index}
          >
            <i className={`bx text-[3rem] text-primary ${elem.icon}`}></i>
            <h4 className="text-2xl p-1 font-semibold dark:text-dark-text light:text-light-text">
              {elem.title}
            </h4>
            <p className="dark:text-dark-lightText light:text-light-lightText">
              {elem.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
