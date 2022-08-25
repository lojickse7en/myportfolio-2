import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { SocialMediaIconsReact } from 'social-media-icons-react';
import { BiWorld } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }

  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
  .project__button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px 0px;
  }
`;
export default function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  desc = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusmod tempor',
  ghlink = 'google.com',
  wslink = 'firefox.com',
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        <div className="project__button">
          {/* <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="0"
            borderStyle="solid"
            icon="github"
            iconColor="rgba(188,180,180,1)"
            backgroundColor="rgba(0,0,0,0)"
            iconSize="0"
            roundness="50%"
            url={ghlink}
            size="100"
          />
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="0"
            borderStyle="solid"
            icon="web"
            iconColor="rgba(188,180,180,1)"
            backgroundColor="rgba(0,0,0,0)"
            iconSize="0"
            roundness="50%"
            url={wslink}
            size="100"
          /> */}
          <a href={wslink}>
            <BiWorld size="75" />
          </a>
          <a href={ghlink}>
            <BsGithub size="62" />
          </a>
        </div>
      </div>
    </ProjectItemStyles>
  );
}
