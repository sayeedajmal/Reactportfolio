import React from "react";
import { NavigationDots, SocialMedia } from "../components";

/* @Component means wrapping up motion to the component */
/* @idName means some modificaions regarding the component */
/* @classNames  means some bg modifications for the component */
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p
              className="p-text"
              style={{ textTransform: "none", color: "gray" }}
            >
              @2024 SayeedTheDev
            </p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
