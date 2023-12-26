/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Badge from "@/components/Badge";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import Link from "next/link";
import profile from "../../public/profile.png";
import { ContactForm } from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <main
      id="Home"
      className="container mx-auto flex min-h-screen max-w-7xl  flex-col p-4  pt-28 md:items-start md:pt-52 "
    >
      <section className="flex w-full flex-col items-center justify-between px-2  text-center md:mt-10 md:flex-row md:text-left">
        <section className="flex flex-col  p-2">
          <p className=" text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            Hi, I{"'"}m Marcelo.
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            A Fullstack Web Developer <br />
            who turns ideas into reality.
          </h1>
        </section>
        <section className="flex justify-center overflow-hidden rounded-lg">
          <Image
            src={profile}
            alt="avatar"
            width={350}
            height={350}
            // className="rounded-full"
          />
        </section>
      </section>
      <div className="flex w-full items-center justify-center gap-4  p-2  py-4 md:justify-start">
        <Link href={"https://github.com/marceloxhenrique"} target="_blank">
          <VscGithub className="h-10 w-10" />
        </Link>
        <Link
          href={
            "https://www.linkedin.com/in/marcelo-henrique-da-silva-891b36220/"
          }
          target="_blank"
        >
          <AiOutlineLinkedin className="h-[3rem] w-[3rem]" />
        </Link>
      </div>
      <h2 className="w-full py-2 text-4xl  md:mt-20"></h2>
      <Badge />
      <About />
      <section className="flex w-full justify-center ">
        <ContactForm />
      </section>
    </main>
  );
}
