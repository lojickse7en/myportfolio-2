import React from 'react';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemSytles = styled.div`
  /* padding: 10rem 0; */
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemSytles>
      <div className="container">
        <SectionTitle heading="Services" subheading="what will i do for you" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="I have a strong background in various CMS such as Wordpress, WooCommerce, Wix, Joomla to name a few."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Website Dev"
            desc="I bring UI design to life using various coding languages. "
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="I have experience in front end and backend application development with stellar UI"
          />
        </div>
      </div>
    </ServicesItemSytles>
  );
}
