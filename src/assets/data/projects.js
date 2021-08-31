import { v4 as uuidv4 } from 'uuid';
import WeldingWebsite from '../images/rod_welding_website.png';
import ReactPortfolio from '../images/react_portfolio_screenshot.png';
import CovidTracker from '../images/covid_tracker.png';
import HTMLPortfolio from '../images/portfolio_site.png';
import PasswordGenerator from '../images/password_generator.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Portfolio Websitie II',
    desc: 'My portfolio website built using React, JavaScript, HTML and CSS.',
    img: ReactPortfolio,
    ghlink: 'https://github.com/lojickse7en?tab=repositories',
    wslink: 'https://sass-lang.com/guide',
  },
  {
    id: uuidv4(),
    name: 'Covid-19 Tracker',
    desc:
      'This is an app I built to track the number of covid cased by country and represents the data graphically. Built using React, Javascript, HTML and CSS. There is also some API integration using Axios.',
    img: CovidTracker,
    ghlink: 'https://github.com/lojickse7en/covid_19_tracker',
    wslink: 'http://lojickse7en.github.io/covid_19_tracker',
  },
  {
    id: uuidv4(),
    name: 'Portfolio Website I',
    desc:
      'My first portfolio website built on HTML, CSS and Vanilla JavaScript',
    img: HTMLPortfolio,
    ghlink: 'https://github.com/lojickse7en/myportfolio',
    wslink: 'https://lojickse7en.github.io/myportfolio/',
  },
  {
    id: uuidv4(),
    name: 'Password Generator',
    desc:
      'A simple yet very handy password generator, for when you need a password gnereated in a pinch! Builting using CSS, HTML and Vanilla JavaScript ',
    img: PasswordGenerator,
    ghlink: 'https://github.com/lojickse7en/password-generator',
    wslink: 'https://lojickse7en.github.io/password-generator/',
  },
  {
    id: uuidv4(),
    name: 'Welding Website',
    desc:
      'Website for a client who runs a Welding company. Built on WordPress CMS with some custom CSS and HTML',
    img: WeldingWebsite,
    wslink: 'https://rodriguezwelding.com/',
  },
];

export default projects;
