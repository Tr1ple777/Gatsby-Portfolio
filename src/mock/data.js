import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Justin | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am',
  name: 'Justin Roopnarine',
  subtitle: 'Front End Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_full.jpg',
  paragraphOne:
    "I'm a seasoned software developer from Florida working in the United States Air Force as a Developmental Engineer assuring U.S. access to space.",
  paragraphTwo: "I enjoy learning about new technologies and I'm interested in AI/ML and FinTech.",
  paragraphThree: 'I Strive to be Limitless!',
  resume: 'https://drive.google.com/file/d/1JAOz0rGSrCBLmljJc_pTYr4pn5SfKspT/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'OneChat',
    info:
      'oneChat, is built with a user-centric design and industry-standard security and encryption, which allows users to quickly and easily communicate in a secure environment.  The program is entirely self-contained and can be installed on physical hardware or in a cloud platform.  The program has a multi-level security database that allows users with different classification requirements to store data in the same location.',
    info2: '',
    url: 'https://onechat.shoc.us/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jroopnarine2013@fau.edu?subject=Portfolio%20Inquiry',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/justin-roopnarine/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Tr1ple777',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
