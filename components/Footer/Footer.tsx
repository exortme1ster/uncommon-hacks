import { title, year } from "@/functionality/data";
import NavigationComponent from "../Topnav/Navigation";
import {
  ContactInfo,
  ContactInfoContainer,
  ContactSection,
  FooterSection,
} from "./Footer.style";

const Footer = () => {
  return (
    <FooterSection>
      <ContactSection>
        <ContactInfoContainer>
          <ContactInfo>
            {title}&nbsp;{year}
          </ContactInfo>
        </ContactInfoContainer>
        <ContactInfoContainer>
          <ContactInfo>
            Written by David Serrano & Nikita Manschenko
          </ContactInfo>
        </ContactInfoContainer>
        <ContactInfoContainer>
          <ContactInfo>Blessed with the deisgns of Nstkdl</ContactInfo>
        </ContactInfoContainer>
        <ContactInfoContainer>
          <ContactInfo>Uncommon Hackathon 2023, March 25th-26th</ContactInfo>
        </ContactInfoContainer>
      </ContactSection>
      <NavigationComponent
        navigationState={true}
        openNavigation={undefined}
        isNavBar={false}
        isMobile={false}
      />
    </FooterSection>
  );
};

export default Footer;
