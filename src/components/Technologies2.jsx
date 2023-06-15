import React from "react";

import technology from "../assets/technology.json";

const Technologies2 = () => {
  // const [technologies,setTechnologies]=useState([]);
  console.log(technology.technologies);

  return (
    <>
    <div id="technologies">

        <h1 style={{textAlign:"center",marginTop:"5vh"}}> Technologies</h1>
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

    // <div className="row" id="technologies">
    //   <h2 style={{ textAlign: "center" }}>TECHNOLOGIES</h2>

    //   <div
    //    className="col-xs-12 col-sm-6 col-md-4 col-lg-4 my-3  "
    //    >
    //     <Card className=" "
    //     style={{ width: "20rem" }}>
    //       <div
    //         style={{
    //           display: "flex",
    //           justifyContent: "center",
    //           margin: "1rem",
    //           padding: "0.5rem",
    //         }}
    //       >
    //         <Card.Img
    //           variant="top"
    //           style={{ width: "75px" }}
    //           src="https://media3.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif"
    //           alt="react-icon"
    //         />
    //         <Card.Img
    //           variant="top"
    //           style={{ width: "75px" }}
    //           src="https://media0.giphy.com/media/fsEaZldNC8A1PJ3mwp/giphy.gif"
    //           alt="css-icon"
    //         />

    //         <Card.Img
    //           variant="top"
    //           style={{ width: "75px" }}
    //           src="https://media4.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif"
    //           alt="js-icon"
    //         />
    //       </div>
    //       <Card.Body style={{ marginTop: "2rem" }}>
    //         <Card.Title>Front End </Card.Title>
    //         <Card.Text>
    //           My Preferred technologies for front end development and component
    //           design
    //         </Card.Text>
    //       </Card.Body>
    //     </Card>
    //   </div>
    //   <div
    //    className="col-xs-12 col-sm-6 col-md-4 col-lg-4 my-3  "
    //    >
    //     <Card className=" "
    //     style={{ width: "20rem" }}>
    //       <div
    //         style={{
    //           display: "flex",
    //           justifyContent: "center",
    //           margin: "1rem",
    //           padding: "0.5rem",
    //         }}
    //       >
    //         <Card.Img
    //           variant="top"
    //           style={{ width: "75px" }}
    //           alt="expressjs-icon"
    //           src="https://media0.giphy.com/media/ZG6ntb6RclFZ7sjqcz/giphy.gif?cid=ecf05e47hujgsk3y9rqoju6o7kdxbka25lyefh1rg90hkx5k&rid=giphy.gif"
    //         />

    //         <Card.Img
    //           style={{ width: "75px" }}
    //           variant="top"
    //           src="https://media0.giphy.com/media/kdFc8fubgS31b8DsVu/giphy.gif?cid=ecf05e475s8hxqzy0cpflybg0v5bj2pbnspil14434ddkto2&rid=giphy.gif"
    //           alt="node-icon"
    //         />

    //         <Card.Img
    //           style={{ width: "75px" }}
    //           variant="top"
    //           src="https://media0.giphy.com/media/wgFWLRiND4bkyYR4IN/giphy.gif"
    //         />
    //       </div>

    //       <Card.Body style={{ marginTop: "2rem" }}>
    //         <Card.Title>Back End </Card.Title>
    //         <Card.Text>
    //           My Preferred technologies for back end web programming and databse
    //           architecture.
    //         </Card.Text>
    //       </Card.Body>
    //     </Card>
    //   </div>

    //   <div
    //   className="col-xs-12 col-sm-6 col-md-4 col-lg-4 my-3
    //    ">
    //     <Card className="" style={{ width: "20rem"}}>
    //       <div
    //         style={{
    //           display: "flex",
    //           justifyContent: "center",
    //           margin: "1rem",
    //           padding: "0.5rem",
    //         }}
    //       >
    //         <Card.Img
    //           variant="top"
    //           style={{ width: "75px" }}
    //           src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif"
    //           alt="github-icon"
    //         />
    //         <Card.Img
    //           style={{ width: "75px" }}
    //           variant="top"
    //           src="https://media1.giphy.com/media/IdyAQJVN2kVPNUrojM/giphy.gif"
    //           alt="vscode-icon"
    //         />
    //         <Card.Img
    //           style={{ width: "75px" }}
    //           variant="top"
    //           src="https://media.giphy.com/media/kH6CqYiquZawmU1HI6/giphy.gif"
    //           alt="git-icon"
    //         />
    //       </div>
    //       <Card.Body style={{ marginTop: "2rem" }}>
    //         <Card.Title>Tools </Card.Title>
    //         <Card.Text>
    //           My favourite tools for version control , code editing and
    //           container orchestration.
    //         </Card.Text>
    //       </Card.Body>
    //     </Card>{" "}
    //   </div>
    // </div>
  );
};

export default Technologies2;
