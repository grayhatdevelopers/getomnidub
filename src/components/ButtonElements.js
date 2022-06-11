import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
border-radius: 50px;
background: ${({ primary }) => (primary ? '#E50914' : '#010606')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
color: ${({ dark }) => (dark ? '#fff' : '#fff')};
font-size: ${({ fontBig }) => (fontBig ? '24px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
&:hover {
  transition: all 0.2s ease-in-out;
  background: ${({ primary }) => (primary ? '#B81D24' :'#B81D24')};
}
`;

export const ExternalButton = styled.a`
border-radius: 50px;
background: ${({ primary }) => (primary ? '#E50914' : '#010606')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
color: ${({ dark }) => (dark ? '#fff' : '#fff')};
font-size: ${({ fontBig }) => (fontBig ? '24px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover {
  transition: all 0.2s ease-in-out;
  background: ${({ primary }) => (primary ? '#B81D24' :'#B81D24')};
}
`;

// export const Button = styled(Link)`

// .btn-0 {
//   color: #8084cc;
// }
// .btn-0:before {
//   content: "";
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   background-color: #3f4275;
//   transform: translateX(-100%);
// }
// .btn-0:hover {
//   color: #dadbf0;
// }
// .btn-0:hover:before {
//   transform: translateX(0);
// }

// .btn-1 {
//   color: #2c91b4;
// }
// .btn-1:before {
//   content: "";
//   position: absolute;
//   top: 0;
//   right: -50px;
//   bottom: 0;
//   left: 0;
//   border-right: 50px solid transparent;
//   border-bottom: 80px solid #044b64;
//   transform: translateX(-100%);
// }
// .btn-1:hover {
//   color: #c1dfe9;
// }
// .btn-1:hover:before {
//   transform: translateX(0);
// }

// .btn-1-2 {
//   color: #7c7893;
// }
// .btn-1-2:before, .btn-1-2:after {
//   content: "";
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   border-bottom: 80px solid #3d3a4d;
// }
// .btn-1-2:before {
//   right: -50px;
//   border-right: 50px solid transparent;
//   transform: translateX(-100%);
// }
// .btn-1-2:after {
//   left: -50px;
//   border-left: 50px solid transparent;
//   transform: translateX(100%);
// }
// .btn-1-2:hover {
//   color: #d9d7df;
// }
// .btn-1-2:hover:before {
//   transform: translateX(-40%);
// }
// .btn-1-2:hover:after {
//   transform: translateX(40%);
// }

// .btn-2 {
//   color: #897f6e;
// }
// .btn-2:before, .btn-2:after {
//   content: "";
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
// }
// .btn-2:before {
//   right: -50px;
//   border-right: 50px solid transparent;
//   border-bottom: 80px solid #463e32;
//   transform: translateX(-100%);
// }
// .btn-2:after {
//   left: -50px;
//   border-left: 50px solid transparent;
//   border-top: 80px solid #463e32;
//   transform: translateX(100%);
// }
// .btn-2:hover {
//   color: #dcd9d4;
// }
// .btn-2:hover:before {
//   transform: translateX(-49%);
// }
// .btn-2:hover:after {
//   transform: translateX(49%);
// }

// .btn-3:before, .btn-3:after {
//   content: "";
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   border-top: 40px solid #341661;
//   border-bottom: 40px solid #341661;
// }
// .btn-3:before {
//   border-right: 40px solid transparent;
//   transform: translateX(-100%);
// }
// .btn-3:after {
//   border-left: 40px solid transparent;
//   transform: translateX(100%);
// }
// .btn-3:hover {
//   color: #d5c8e8;
// }
// .btn-3:hover:before {
//   transform: translateX(-30%);
// }
// .btn-3:hover:after {
//   transform: translateX(30%);
// }

// .btn-4 {
//   color: #b851cf;
// }
// .btn-4:before, .btn-4:after,
// .btn-4 span:before,
// .btn-4 span:after {
//   content: "";
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   background-color: #671e77;
// }
// .btn-4:before {
//   transform: translate(-100%, -100%);
// }
// .btn-4:after {
//   transform: translate(-100%, 100%);
// }
// .btn-4 span:before {
//   transform: translate(100%, -100%);
// }
// .btn-4 span:after {
//   transform: translate(100%, 100%);
// }
// .btn-4:hover {
//   color: #eaccf1;
// }
// .btn-4:hover:before {
//   transform: translate(-50%, -50%);
// }
// .btn-4:hover:after {
//   transform: translate(-50%, 50%);
// }
// .btn-4:hover span:before {
//   transform: translate(50%, -50%);
// }
// .btn-4:hover span:after {
//   transform: translate(50%, 50%);
// }

// .btn-5 {
//   color: #718028;
// }
// .btn-5:after {
//   content: "";
//   width: 0;
//   height: 0;
//   -webkit-transform: rotate(360deg);
//   border-style: solid;
//   border-width: 0 0 0 0;
//   border-color: transparent #354001 transparent transparent;
//   position: absolute;
//   top: 0;
//   right: 0;
// }
// .btn-5:before {
//   content: "";
//   width: 0;
//   height: 0;
//   -webkit-transform: rotate(360deg);
//   border-style: solid;
//   border-width: 0 0 0 0;
//   border-color: transparent transparent transparent #354001;
//   position: absolute;
//   bottom: 0;
//   left: 0;
// }
// .btn-5:before, .btn-5:after {
//   content: "";
//   position: absolute;
//   width: 0;
//   height: 0;
//   border: 0 solid;
//   transform: rotate(360deg);
// }
// .btn-5:before {
//   bottom: 0;
//   left: 0;
//   border-color: transparent transparent transparent #354001;
// }
// .btn-5:after {
//   top: 0;
//   right: 0;
//   border-color: transparent #354001 transparent transparent;
// }
// .btn-5:hover {
//   color: #d5dac0;
// }
// .btn-5:hover:before, .btn-5:hover:after {
//   border-width: 80px 262.5px;
// }

// .btn-6 {
//   color: #3957a7;
// }
// .btn-6 span {
//   position: absolute;
//   display: block;
//   width: 0;
//   height: 0;
//   border-radius: 50%;
//   background-color: #0d225b;
//   transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
//   transform: translate(-50%, -50%);
//   z-index: -1;
// }
// .btn-6:hover {
//   color: #c5cee5;
// }
// .btn-6:hover span {
//   width: 225%;
//   height: 562.5px;
// }
// .btn-6:active {
//   background-color: #163997;
// }

// .btn-7 {
//   color: #475748;
// }
// .btn-7:before, .btn-7:after,
// .btn-7 span:before,
// .btn-7 span:after {
//   content: "";
//   position: absolute;
//   top: 0;
//   width: 25.25%;
//   height: 0;
//   background-color: #172218;
// }
// .btn-7:before {
//   left: 0;
// }
// .btn-7:after {
//   left: 50%;
// }
// .btn-7 span:before, .btn-7 span:after {
//   top: auto;
//   bottom: 0;
// }
// .btn-7 span:before {
//   left: 25%;
// }
// .btn-7 span:after {
//   left: 75%;
// }
// .btn-7:hover {
//   color: #c9cec9;
// }
// .btn-7:hover:before, .btn-7:hover:after,
// .btn-7:hover span:before,
// .btn-7:hover span:after {
//   height: 80px;
// }

// .btn-8 {
//   color: #ca5094;
// }
// .btn-8:before, .btn-8:after {
//   content: "";
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   background-color: #741d4d;
// }
// .btn-8:before {
//   transform: translateY(-100%);
// }
// .btn-8:after {
//   transform: translateY(100%);
// }
// .btn-8:hover {
//   color: #f0cce0;
// }
// .btn-8:hover:before {
//   transform: translateY(-50%);
// }
// .btn-8:hover:after {
//   transform: translateY(50%);
// }

// .btn-9 {
//   color: #3752c2;
// }
// .btn-9:before, .btn-9:after,
// .btn-9 span:before,
// .btn-9 span:after {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 0;
//   background-color: rgba(12, 31, 110, 0.25);
//   transition: 0.4s ease-in-out;
// }
// .btn-9:after,
// .btn-9 span:before {
//   top: auto;
//   bottom: 0;
// }
// .btn-9 span:before,
// .btn-9 span:after {
//   transition-delay: 0.4s;
// }
// .btn-9:hover {
//   color: #c4cced;
// }
// .btn-9:hover:before, .btn-9:hover:after,
// .btn-9:hover span:before,
// .btn-9:hover span:after {
//   height: 80px;
// }
// .btn-9:active {
//   background-color: #1434b7;
// }

// .btn-10 {
//   color: #8096a0;
// }
// .btn-10:before, .btn-10:after,
// .btn-10 span:before,
// .btn-10 span:after {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 0;
//   height: 80px;
//   background-color: rgba(64, 79, 86, 0.25);
//   transition: 0.4s;
// }
// .btn-10:after,
// .btn-10 span:before {
//   left: auto;
//   right: 0;
// }
// .btn-10 span:before,
// .btn-10 span:after {
//   transition-delay: 0.4s;
// }
// .btn-10:hover {
//   color: #dae0e3;
// }
// .btn-10:hover:before, .btn-10:hover:after,
// .btn-10:hover span:before,
// .btn-10:hover span:after {
//   width: 250px;
// }
// .btn-10:active {
//   background-color: #6a848f;
// }

// @-webkit-keyframes criss-cross-left {
//   0% {
//     left: -20px;
//   }
//   50% {
//     left: 50%;
//     width: 20px;
//     height: 20px;
//   }
//   100% {
//     left: 50%;
//     width: 375px;
//     height: 375px;
//   }
// }

// @keyframes criss-cross-left {
//   0% {
//     left: -20px;
//   }
//   50% {
//     left: 50%;
//     width: 20px;
//     height: 20px;
//   }
//   100% {
//     left: 50%;
//     width: 375px;
//     height: 375px;
//   }
// }
// @-webkit-keyframes criss-cross-right {
//   0% {
//     right: -20px;
//   }
//   50% {
//     right: 50%;
//     width: 20px;
//     height: 20px;
//   }
//   100% {
//     right: 50%;
//     width: 375px;
//     height: 375px;
//   }
// }
// @keyframes criss-cross-right {
//   0% {
//     right: -20px;
//   }
//   50% {
//     right: 50%;
//     width: 20px;
//     height: 20px;
//   }
//   100% {
//     right: 50%;
//     width: 375px;
//     height: 375px;
//   }
// }
// .btn-11 {
//   position: relative;
//   color: #96be42;
// }
// .btn-11:before, .btn-11:after {
//   position: absolute;
//   top: 50%;
//   content: "";
//   width: 20px;
//   height: 20px;
//   background-color: #83b221;
//   border-radius: 50%;
// }
// .btn-11:before {
//   left: -20px;
//   transform: translate(-50%, -50%);
// }
// .btn-11:after {
//   right: -20px;
//   transform: translate(50%, -50%);
// }
// .btn-11:hover {
//   color: #e0ecc8;
// }
// .btn-11:hover:before {
//   -webkit-animation: criss-cross-left 0.8s both;
//           animation: criss-cross-left 0.8s both;
//   -webkit-animation-direction: alternate;
//           animation-direction: alternate;
// }
// .btn-11:hover:after {
//   -webkit-animation: criss-cross-right 0.8s both;
//           animation: criss-cross-right 0.8s both;
//   -webkit-animation-direction: alternate;
//           animation-direction: alternate;
// }`
// ;

// export const Button = styled(Link)`
//   color: #3957a7;

//   & span {
//     position: absolute;
//     display: block;
//     width: 0;
//     height: 0;
//     border-radius: 50%;
//     background-color: #0d225b;
//     transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
//     transform: translate(-50%, -50%);
//     z-index: -1;
//   }
//   &:hover {
//     color: #c5cee5;
//   }
//   &:hover span {
//     width: 225%;
//     height: 562.5px;
//   }
//   &:active {
//     background-color: #163997;
//   }
// `
// ;
