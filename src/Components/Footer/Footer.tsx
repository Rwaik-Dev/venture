import React from "react";
import {
  Container,
  DevInformations,
  Text,
  ContactList,
  Contacts,
  Redirect,
} from "./style";
import {
  GitHubIcon,
  InstagramLogo,
  LinkedInLogo,
} from "../../Midea/Icons/Icons";

const Footer = () => {
  const sizesLogo = ["30px", "30px"];
  // let heightLogos = "80px"

  return (
    <Container>
      <DevInformations>
        <Text>Desenvolvido por: Wilker Rwaik Eloi</Text>
        <ContactList>
          <Contacts>
            <Redirect
              href="https://github.com/Rwaik-Dev"
              target={"_blank"}
              rel="noreferrer"
            >
              <Text>GitHub</Text>
              <GitHubIcon height={sizesLogo[0]} width={sizesLogo[1]} />
            </Redirect>
          </Contacts>
          <Contacts>
            <Redirect
              href="https://www.linkedin.com/in/rwaik/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Text>LinkedIn</Text>
              <LinkedInLogo height={sizesLogo[0]} width={sizesLogo[1]} />
            </Redirect>
          </Contacts>
          <Contacts>
            <Redirect
              href="https://www.instagram.com/wilkerr/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Text>Instagram</Text>
              <InstagramLogo height={sizesLogo[0]} width={sizesLogo[1]} />
            </Redirect>
          </Contacts>
        </ContactList>
      </DevInformations>
    </Container>
  );
};

export default Footer;
