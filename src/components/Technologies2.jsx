import React from "react";

import technology from "../assets/technology.json";

const Technologies2 = () => {
  // const [technologies,setTechnologies]=useState([]);
  console.log(technology.technologies);

  return (
    <>
    <div id="technologies">

        <h2  className="h2-speacial" style={{textAlign:"center",marginTop:"5vh"}}> Technologies</h2>
      <div className="container" >
        
        
            {technology.technologies.map((item) => 
          <div className="col1">
              
                <>
                  <div className="img-container">
                    <img src={item.imgSrc[0]} alt="" />
                    <img src={item.imgSrc[1]} alt="" />
                    <img src={item.imgSrc[2]} alt="" />
                  </div>
                  <div className="wrapper">
                  <div className="heading">
                    <h3> {item.title}</h3>
                  </div>
                  <div className="content">
                    <p>{item.description}</p>
                  </div>

                  </div>
                </>
              
          </div>
            )}
          
      </div>
    </div>

    </>

  );
};

export default Technologies2;
