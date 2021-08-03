import React from "react";
import {DiFirebase, DiJqueryLogo, DiReact} from "react-icons/di";
import {Section, SectionDivider, SectionText, SectionTitle} from "../../styles/GlobalComponents";
import {List, ListContainer, ListItem, ListParagraph, ListTitle} from "./TechnologiesStyles";

const Technologies = () => (<Section id="tech">
  <SectionDivider/>
  <br/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've Worked with wide range of technologies in Web Developement world. From Backend to Frontend designing.
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem"/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with
          <br/>
          React.js and Next.js
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem"/>
      <ListContainer>
        <ListTitle>Backend-End</ListTitle>
        <ListParagraph>
          Experience with
          <br/>
          Node.js and Databases
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiJqueryLogo size="3rem"/>
      <ListContainer>
        <ListTitle>Other</ListTitle>
        <ListParagraph>
          Experience with
          <br/>
          GraphQl and Apollo
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
</Section>);

export default Technologies;
