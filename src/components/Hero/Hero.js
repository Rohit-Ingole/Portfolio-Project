import React from "react";
import Link from "next/link";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row="row" nopadding="nopadding">
    <LeftSection>
      <SectionTitle main="main" center="center">
        Hi! I am Rohit
        <br />
        Welcome to my Portfolio
      </SectionTitle>
      <SectionText>
        I am an Aspiring Data Scientist and Full Stack Web Developer. I build
        responsive web apps and app clones using React and Next Js.
      </SectionText>
      <Link href="#about">
        <Button>Learn More</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
