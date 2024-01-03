import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    /* position: absolute; */
    /* left: 38rem; */
  }
  .item-title {
    width: 30rem;
    display: flex;
    justify-content: left;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
      display: flex;
      flex-wrap: wrap;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem({
  title = 'this is title',
  items = ['HTML', 'CSS', 'JS'],
}) {
  return (
    <AboutItemStyles>
      <div className="item-title">
        <h1 className="title">{title}</h1>
      </div>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
