import React from "react";

export function onRenderBody(
  { setHeadComponents, setPreBodyComponents, setPostBodyComponents }) {
  setHeadComponents([
    <title>Smart Home Safe</title>,
  ]);

  setPreBodyComponents([
  ]);

  setPostBodyComponents([
    <script key="abc" type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/20509803.js"></script>,
  ]);
}
