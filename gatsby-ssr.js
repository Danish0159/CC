import React from "react";
import favicon from '/src/assets/images/favicon/favicon.ico'
import favicon1 from '/src/assets/images/favicon/apple-icon-57x57.png'
import favicon2 from '/src/assets/images/favicon/apple-icon-60x60.png'
import favicon3 from '/src/assets/images/favicon/apple-icon-72x72.png'
import favicon4 from '/src/assets/images/favicon/apple-icon-76x76.png'
import favicon5 from '/src/assets/images/favicon/apple-icon-114x114.png'
import favicon6 from '/src/assets/images/favicon/apple-icon-120x120.png'
import favicon7 from '/src/assets/images/favicon/apple-icon-144x144.png'
import favicon8 from '/src/assets/images/favicon/apple-icon-152x152.png'
import favicon9 from '/src/assets/images/favicon/apple-icon-180x180.png'
import favicon10 from '/src/assets/images/favicon/android-icon-192x192.png'
import favicon11 from '/src/assets/images/favicon/favicon-32x32.png'
import favicon12 from '/src/assets/images/favicon/favicon-96x96.png'
import favicon13 from '/src/assets/images/favicon/favicon-16x16.png'
import manifest from '/src/assets/images/favicon/manifest.json'


export function onRenderBody(
  { setHeadComponents, setPreBodyComponents, setPostBodyComponents }) {
  setHeadComponents([
    <link rel="icon" href={favicon} />,
    <link rel="apple-touch-icon" sizes="57x57" href={favicon1} />,
    <link rel="apple-touch-icon" sizes="60x60" href={favicon2} />,
    <link rel="apple-touch-icon" sizes="72x72" href={favicon3} />,
    <link rel="apple-touch-icon" sizes="76x76" href={favicon4} />,
    <link rel="apple-touch-icon" sizes="114x114" href={favicon5} />,
    <link rel="apple-touch-icon" sizes="120x120" href={favicon6} />,
    <link rel="apple-touch-icon" sizes="144x144" href={favicon7} />,
    <link rel="apple-touch-icon" sizes="152x152" href={favicon8} />,
    <link rel="apple-touch-icon" sizes="180x180" href={favicon9} />,
    <link rel="icon" type="image/png" sizes="192x192" href={favicon10} />,
    <link rel="icon" type="image/png" sizes="32x32" href={favicon11} />,
    <link rel="icon" type="image/png" sizes="96x96" href={favicon12} />,
    <link rel="icon" type="image/png" sizes="16x16" href={favicon13} />,
    <link rel="manifest" href={manifest} />,
    <meta name="msapplication-TileColor" content="#ffffff" />,
    <meta name="msapplication-TileImage" content="/src/assets/images/favicon/ms-icon-144x144.png" />,
    <meta name="theme-color" content="#ffffff" />,
    <link rel="preconnect" href="https://fonts.googleapis.com" />,
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />,
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet" />,
    <title>Smart Home Safe</title>,
  ]);

  setPreBodyComponents([
  ]);


  setPostBodyComponents([
    <script key="abc" type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/20509803.js"></script>,
  ]);
}
