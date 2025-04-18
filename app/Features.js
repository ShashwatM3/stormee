import React from 'react';
import "./FeatureStyles.css";
import Feature from "./Feature";
import agent from "../media/agent.png";
import visionboard from "../media/visionboard.png";
import sectionwise from "../media/sectionwise.png";
import flexcard from "../media/flexcard.png";
// import Feature2 from "./Feature2"

function Features() {
  let features = {
    "AI Brainstorming Agent": ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,   molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed", agent],
    "Vision Board": ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,   molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed", visionboard],
    "Section-wise Idea Organization": ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,   molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed", sectionwise],
    "Your Own FlexCard": ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,   molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed", flexcard],
  }
  return (
    <div id="features" className='features-main'>
      <h1>
        <span>
          Where you take <b>control</b> of your ideas and your frontal cortex (creativity)
        </span>
      </h1>
      <br/><br/><br/>
      <div className='flex items-center justify-center w-[100%]'>
        <div className='flex flex-wrap gap-[20px] w-[70%]'>
          {Object.entries(features).map(([title, des]) => (
            <Feature
              key={title}
              title={title}
              description={des[0]}
              image={des[1]}
            />
          ))}
        </div>
      </div>
      <br/><br/>
      {/* <Feature2 title={"Lorem Ipsum"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam"} image={agent} imageWhere={1} />
      <Feature2 title={"Lorem Ipsum"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam"} image={agent} imageWhere={2} />
      <Feature2 title={"Lorem Ipsum"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam"} image={agent} imageWhere={1} />
      <Feature2 title={"Lorem Ipsum"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam"} image={agent} imageWhere={2} /> */}
      <br/><br/>
    </div>
  )
}

export default Features