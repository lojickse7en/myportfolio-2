import { v4 as uuidv4 } from 'uuid';
import WeldingWebsite from '../images/rod_welding_website.png';
import ReactPortfolio from '../images/react_portfolio_screenshot.png';
// import CovidTracker from '../images/covid_tracker.png';
import HTMLPortfolio from '../images/portfolio_site.png';
import PasswordGenerator from '../images/password_generator.png';
import ConstructionWebsite from '../images/camtristate_website.png';
import PokedexWebApp from '../images/pokedex_screenshot.png';
import BCCWebsite from '../images/BCC_Screeshot.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Portfolio Website II',
    desc: 'My portfolio website built using React, JavaScript, HTML and CSS.',
    img: ReactPortfolio,
    ghlink: 'https://github.com/lojickse7en/myportfolio-2',
    wslink: 'https://lojickse7en.github.io/myportfolio-2/',
  },
  {
    id: uuidv4(),
    name: 'Pokedex Web Application',
    desc: 'Small application utilizing React to display detailed stats on listed Pokemon',
    img: PokedexWebApp,
    ghlink: 'https://github.com/lojickse7en/pokedex-app',
    wslink: 'https://lojickse7en.github.io/pokedex-app/',
  },
  {
    id: uuidv4(),
    name: 'Portfolio Website I',
    desc: 'My first portfolio website built on HTML, CSS and Vanilla JavaScript',
    img: HTMLPortfolio,
    ghlink: 'https://github.com/lojickse7en/myportfolio',
    wslink: 'https://lojickse7en.github.io/myportfolio/',
  },
  {
    id: uuidv4(),
    name: 'Password Generator',
    desc: 'A simple yet very handy password generator, for when you need a password generated in a pinch! Built using CSS, HTML and Vanilla JavaScript',
    img: PasswordGenerator,
    ghlink: 'https://github.com/lojickse7en/password-generator',
    wslink: 'https://lojickse7en.github.io/password-generator/',
  },
  {
    id: uuidv4(),
    name: 'Client Cattle Website',
    desc: 'A website for one of clients selling cattle. Built using NextJS 14, Tailwind and APIs used to handle form submissions.',
    img: BCCWebsite,
    ghlink: 'https://github.com/lojickse7en/brotherscattleco_nextjs',
    wslink: 'https://brotherscattleco.com/',
  },
  {
    id: uuidv4(),
    name: 'Construction Website',
    desc: 'Website for construction firm based in New York City. Built on WordPress CMS with some custom CSS and HTML',
    img: ConstructionWebsite,
    wslink: 'https://camtristate.com/',
  },
  {
    id: uuidv4(),
    name: 'Welding Website',
    desc: 'Website for a client who runs a Welding company. Built on WordPress CMS with some custom CSS and HTML',
    img: WeldingWebsite,
    wslink: 'https://rodriguezwelding.com/',
  },
];

export default projects;
