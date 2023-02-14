import React from "react";
import './Work.css'

const Work = () => {
   return (
    <div id="Work">
      <h1 className="workExp">
        Work & <span className="highlight">Experience</span>
      </h1>
      <div className="Allwork">
       <div className="box">
       <h3 className="h3">Web Developer</h3>
            <p>
            Web developers create and maintain websites. They are also responsible 
            for the site's technical aspects, such as its 
            performance and capacity, which are measures of a website's 
            speed and how much traffic the site can handle. 
            </p>
        </div>
        <div className="box">
          <h3 className="h3">Back-End Developer</h3>
          <p>
          Back-end developers are the experts who build and maintain the mechanisms 
          that process data and perform actions on websites. Unlike front-end developers, 
          who control everything you can see on a website, back-end developers are involved in data storage, 
          security, and other server-side functions that you cannot see.
          </p>
        </div>

        <div className="box">
          <h3 className="h3">Web Designer</h3>
          <p>
          Web design refers to the design of websites that are displayed on the internet. 
          It usually refers to the user experience aspects of 
          website development rather than software development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
