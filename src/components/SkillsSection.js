import React from 'react';
import styled from 'styled-components';
import AboutInfoItem from './AboutInfoItem';
import SectionTitle from './SectionTitle';

const AboutPageStyles = styled.div`
  padding: 10rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 1rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
  .skills__list {
    padding-top: 3rem;
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        {/* <h1 className="about__info__heading">Skills</h1> */}
        <SectionTitle
          className=""
          heading="Skills"
          subheading="here are some of my"
        />
        <div className="skills__list">
          <AboutInfoItem
            title="Languages"
            items={[
              'Javascript/JSX',
              'CSS',
              'HTML5',
              'PHP',
              'C++',
              'Typescript',
            ]}
          />
          <AboutInfoItem
            title="Dev Tools/Frameworks"
            items={[
              'React',
              'Node.js',
              'Terminal/Bash',
              'Git',
              'MySQL',
              'Oracle',
            ]}
          />
        </div>
      </div>
    </AboutPageStyles>
  );
}
