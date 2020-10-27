import React from "react";
import { storiesOf } from "@storybook/react";
import CourseModulesStatic from "../components/exercises/01_staticComponent";
import CourseModulesEmbeddedVars from "../components/exercises/02_embeddedVariables";
import CourseModulesWithProps from "../components/exercises/03_props";
import CourseModulesCollections from "../components/exercises/04_iteration";

const course = "Software System Parcise";
const modules = [
  {
    name: "Enterprise Systems Architecture",
    noLectures: 48,
    noPracticals: 12
  },
  {
    name: "Business Analytics",
    noLectures: 24,
    noPracticals: 36
  }
];

storiesOf("Exercises", module)
  .add("01 - static component", () => {
    return <CourseModulesStatic />;
  })
  .add("02 - JSX embedded variables", () => {
    return <CourseModulesEmbeddedVars />;
  })
  .add("03 - component with props", () => {
    const twoModules = [modules[0], modules[1]];
    return <CourseModulesWithProps modules={twoModules} course={name} />;
  })
  .add("04 - iteration", () => {
    return <CourseModulesCollections modules={modules} course={name} />;
  });
