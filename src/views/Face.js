import React, { useState } from "react";
import "./Face.css";
import Card from "./Card";

const Face = () => {
  // const [category] = useState([
  //   {
  //     title: "Face",
  //     paragraph: "The face is the attention grabber, to have a clear, glowing, vibrant face",
  //     image:
  //       "https://lh3.googleusercontent.com/proxy/FGGdJzY-ORTvIPiokwoPNyRhWU33XuY8Y5vxeWSxGLceGEVmaxNCuSfY7qJraSTh4zPR8lmDi3AT5BrzCRE-J_ZDlqXZEvDJLf-JM4vZbA2ElTiHGmIc6UNlEXac6CFBWabESw"
  //   },
  //   {
  //       title: "Lips",
  //       paragraph: "Lips are full, kissable, and attractive. To keep them looking great you must take care of them ",
  //       image:
  //         "https://yccollection.net/wp-content/uploads/2019/06/Rejoice-300x300.jpg"
  //     },
  //     {
  //       title: "Eyelashes",
  //       paragraph: "Your natural long eyelashes will grab peoples attention and makes your eyes looks more bigger"
  //       ,
  //       image:
  //         "https://healthyeyelashes.com/wp-content/uploads/2017/06/Eyelash-Extensions-Pinterest-Nautral-Eyelash-Growth-300x300.jpg"
  //       }
  // ]);
  return (
    <div>
    <div className="homebody">
      <div className="Homejumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Face</h1>
        </div>
      </div>
      {/* <div className="boxhome">
          {category.map((category, index) => {
          return (
     <Card key={index} title={category.title} paragraph={category.paragraph} image={category.image} />
          )
           })}
      </div> */}
 
    </div>
    <div className="top">
    hi
  </div>
  </div>
  );
};

export default Face;
