import React from "react";
import "./SplashScreen.css";
import {greeting} from "../../portfolio";
import Animation from "./animation";

export default function SplashScreen() {
  return (
    <>
    <div className="background"></div>
    <div className="check"> </div>
      <div className="splash-container">
        {/* <div className="splash-animation-container">
          <DisplayLottie animationData={splashScreen.animation} />
        </div> */}
        <div className="splash-animation-container">
          <Animation/>
        </div>

        <div className="splash-title-container">
          <span className="black-color"> &lt;</span>
          <span className="splash-title">{greeting.username}</span>
          <span className="black-color">/&gt;</span>
        </div>
      </div>
    </>
    
  );
}
