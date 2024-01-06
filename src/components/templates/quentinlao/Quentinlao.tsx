"use client";
import { data } from "../../../app/utils/data";
import { Experiences } from "../Experiences/Experiences";
import { Header } from "../Header/Header";
import { Hobbies } from "../Hobbies/Hobbies";
import { Projects } from "../Projects/Projects";
import { Services } from "../Services/Services";

export const Quentinlao = () => {
  const { header, services, experiences, projects, hobbies } = data;
  return (
    <>
      <Header header={header} />
      <Services services={services} />
      <Experiences experiences={experiences} />
      <Projects projects={projects} />
      <Hobbies hobbies={hobbies} />
    </>
  );
};
