import React from "react";
import Image from "next/image";
import profile from "../../public/profile.png";
import Badge from "./Badge";

const About = () => {
  return (
    <section
      id="ABOUT"
      className="flex min-h-screen w-full flex-col items-center justify-center p-4 pt-44 font-sans"
    >
      <article className="font-primary">
        <h1 className="pb-16 text-center text-4xl font-semibold md:pb-24 md:text-5xl">
          ABOUT
        </h1>
        <p className="max-w-4xl pb-6 text-xl text-slate-600 md:text-left">
          {`Hello! I'm Marcelo, a passionate Full-Stack Web Developer dedicated to creating responsive, user-friendly interfaces and APIs using JavaScript/TypeScript and Java.`}
          <br />
          <br />
          {`Not only do I bring technical proficiency but also a strong work ethic, adaptability, autonomy and effective communication skills to every project. I believe in the power of collaboration and building strong partnerships to achieve exceptional results.`}
          <br />
          <br />
          {`I’m open to new  job opportunities. Don't hesitate to contact me!`}
        </p>
      </article>
    </section>
  );
};

export default About;
