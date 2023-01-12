import React from 'react';
import {Helmet} from "react-helmet";

//helmet - browser tabl nammude paginte name automatic aayitt varaan
//first install - npm i react-helmet

function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>About page</h1>
    </> 
  )
}
//


//datas collect cheythathin shesham product name koodi browser tabl varan
// function About() {
//   return (
//     <>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>{`About | ${product.title}`}</title>
//         <link rel="canonical" href="http://mysite.com/example" />
//       </Helmet>
//       <h1>{product.title}</h1>
//     </> 
//   )
// }
export default About;