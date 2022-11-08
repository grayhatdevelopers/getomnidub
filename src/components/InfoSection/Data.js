export const aboutObj = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'What We Do',
  headline: 'Videos for Everyone!',
  description: 'We aim to make videos more accessible to people of different languages and cultures, by translating the human speech in videos from one language to any other, and also syncing the lips to make it more realistic.',

  buttons: [
  {
    buttonLabel: 'Get started',
    buttonTo: 'signup',
    dark: true,
    primary: true
  }  
],
  imgStart: false,
  img: require('../../images/multilingual.png'),
  alt: 'multilingual video with people watching',
  darkText: false
};

export const discoverObj = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Our Product',
  headline: 'We automate the dubbing process',
  description: 'Using deep learning and artificial intelligence, our award-winning system translates videos from their original language to any other language - automatically.',
  
  //button info
  buttons: [
    {
      iconPosition: 'left',
      icon: "fa-solid fa-play-circle",
      buttonLabel: 'Watch demos',
      buttonTo: 'https://youtu.be/1TYDNq2J-Dc',
      target: '_blank',
      dark: false,
      primary: true,      
    },
    {
      iconPosition: 'left',
      icon: 'fa fa-info-circle',
      buttonLabel: 'Read Research',
      buttonTo: 'https://ieeexplore.ieee.org/document/9773697',
      target: '_blank',
      dark: false,
      primary: false,
    }
  ],

  imgStart: true,
  img: require('../../images/dubbing.png'),
  alt: 'person dubbing a video',
  dark: false,
  primary: false,
  darkText: true
};

export const signupObj = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Try Our Beta',
  headline: 'We\'re looking for users',
  description: 'We are open to users and businesses willing to integrate OmniDub into their workflow - Content creators, studios, media production houses, and anyone else!',
  
  buttons: [
    {
        buttonLabel: 'Join Waitlist',
        buttonTo: 'https://forms.gle/Tg3xaxBtHrBdLaUc9',
        dark: true,
        primary: true,
        target: "_blank"
    },
    ],

  imgStart: false,
  img: require('../../images/people.png'),
  alt: 'people',
  darkText: true
};
