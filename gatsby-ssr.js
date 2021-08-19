import React from "react";
import favicon from '/src/assets/images/favicon.ico'

export function onRenderBody(
  { setHeadComponents, setPreBodyComponents, setPostBodyComponents }) {
  setHeadComponents([
    <link rel="icon" href={favicon} />,
    <title>Smart Home Safe</title>,

  ]);

  setPreBodyComponents([
  ]);

  setPostBodyComponents([
    <script type="text/javascript" src="assets/js/vendor/jquery-3.2.1.min.js"></script>,
    <script key="abc" type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/20509803.js"></script>,
  ]);
}
