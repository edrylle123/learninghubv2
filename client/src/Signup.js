// import React, { useState } from "react";
// import "./admin.css";
// import { Link, useNavigate } from "react-router-dom";
// import { Card } from "./Components/Card";
// import Axios from "axios";

// import image1 from "./Components/one.PNG";
// import image2 from "./Components/NUMBERING/2.png";
// import image3 from "./Components/NUMBERING/3.png";
// import image4 from "./Components/NUMBERING/4.png";
// import image5 from "./Components/NUMBERING/5.png";
// import image6 from "./Components/NUMBERING/6.png";
// import image7 from "./Components/NUMBERING/7.png";
// import image8 from "./Components/NUMBERING/8.png";
// import image9 from "./Components/NUMBERING/9.png";
// import image10 from "./Components/NUMBERING/10.png";
// import image11 from "./Components/NUMBERING/11.png";
// import image12 from "./Components/NUMBERING/12.png";
// import image13 from "./Components/NUMBERING/13.png";
// import image14 from "./Components/NUMBERING/14.png";
// import image15 from "./Components/NUMBERING/15.png";
// import image16 from "./Components/NUMBERING/16.png";
// import image17 from "./Components/NUMBERING/17.png";
// import image18 from "./Components/NUMBERING/18.png";
// import image19 from "./Components/NUMBERING/19.png";
// import image20 from "./Components/NUMBERING/20.png";
// import image21 from "./Components/NUMBERING/21.png";
// import image22 from "./Components/NUMBERING/22.png";
// import image23 from "./Components/NUMBERING/23.png";
// import image24 from "./Components/NUMBERING/24.png";

// function Signup() {
//   const [selectedPC, setSelectedPC] = useState(null);
//   const navigate = useNavigate();

//   const handleCardClick = (pcNumber) => {
//     console.log("Selected PC:", pcNumber);
//     setSelectedPC(pcNumber);
//     navigate("/landing", { state: { selectedPC: pcNumber } });

//     // Include the following code to send the selected PC number to the server
//     Axios.post("http://localhost:3001/api/selectedPC", {
//       selectedPC: pcNumber,
//     })
//       .then((response) => {
//         console.log("Response from the server:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error sending selected PC to the server:", error);
//       });
//   };

//   const images = [
//     image1,
//     image2,
//     image3,
//     image4,
//     image5,
//     image6,
//     image7,
//     image8,
//     image9,
//     image10,
//     image11,
//     image12,
//     image13,
//     image14,
//     image15,
//     image16,
//     image17,
//     image18,
//     image19,
//     image20,
//     image21,
//     image22,
//     image23,
//     image24,
//   ];

//   return (
//     <div className="App">
//       <div className="card-grid">
//         {images.map((image, index) => (
//           <div className="col" key={index}>
//             {/* Pass state to the landing page via Link */}
//             <Link
//               to={{ pathname: "/landing", state: { selectedPC: index + 1 } }}
//             >
//               {/* Pass a callback to handle card click */}
//               <Card
//                 imgSrc={image1}
//                 imgAlt={`PC ${index + 1}`}
//                 buttonText="LOGIN"
//                 onClick={() => handleCardClick(1)}
//               />
//             </Link>
//           </div>
//         ))}
//         {/* <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image1} imgAlt="PC 1" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image2} imgAlt="PC 2" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image3} imgAlt="PC 3" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image4} imgAlt="PC 4" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image5} imgAlt="PC 5" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image6} imgAlt="PC 6" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image7} imgAlt="PC 7" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image8} imgAlt="PC 8" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image9} imgAlt="PC 9" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image10} imgAlt="PC 10" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image11} imgAlt="PC 11" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image12} imgAlt="PC 12" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image13} imgAlt="PC 13" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image14} imgAlt="PC 14" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image15} imgAlt="PC 15" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image16} imgAlt="PC 16" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image17} imgAlt="PC 17" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image18} imgAlt="PC 18" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image19} imgAlt="PC 19" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image20} imgAlt="PC 20" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image21} imgAlt="PC 21" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image22} imgAlt="PC 22" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image23} imgAlt="PC 23" buttonText="LOGIN" />
//           </Link>
//         </div>
//         <div className="col">
//           <Link to="/landing">
//             <Card imgSrc={image24} imgAlt="PC 24" buttonText="LOGIN" />
//           </Link>
//         </div> */}
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import "./admin.css";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "./Components/Card";
import Axios from "axios";

import image1 from "./Components/one.PNG";
import image2 from "./Components/NUMBERING/2.png";
import image3 from "./Components/NUMBERING/3.png";
import image4 from "./Components/NUMBERING/4.png";
import image5 from "./Components/NUMBERING/5.png";
import image6 from "./Components/NUMBERING/6.png";
import image7 from "./Components/NUMBERING/7.png";
import image8 from "./Components/NUMBERING/8.png";
import image9 from "./Components/NUMBERING/9.png";
import image10 from "./Components/NUMBERING/10.png";
import image11 from "./Components/NUMBERING/11.png";
import image12 from "./Components/NUMBERING/12.png";
import image13 from "./Components/NUMBERING/13.png";
import image14 from "./Components/NUMBERING/14.png";
import image15 from "./Components/NUMBERING/15.png";
import image16 from "./Components/NUMBERING/16.png";
import image17 from "./Components/NUMBERING/17.png";
import image18 from "./Components/NUMBERING/18.png";
import image19 from "./Components/NUMBERING/19.png";
import image20 from "./Components/NUMBERING/20.png";
import image21 from "./Components/NUMBERING/21.png";
import image22 from "./Components/NUMBERING/22.png";
import image23 from "./Components/NUMBERING/23.png";
import image24 from "./Components/NUMBERING/24.png";

function Signup() {
  const navigate = useNavigate();

  const cardData = [
    // Define your card data with corresponding PC numbers
    { cardNumber: 1, pcNumber: "pc1" },
    { cardNumber: 2, pcNumber: "pc2" },
    { cardNumber: 3, pcNumber: "pc3" },
    { cardNumber: 4, pcNumber: "pc4" },
    { cardNumber: 5, pcNumber: "pc5" },
    { cardNumber: 6, pcNumber: "pc6" },
    { cardNumber: 7, pcNumber: "pc7" },
    { cardNumber: 8, pcNumber: "pc8" },
    { cardNumber: 9, pcNumber: "pc9" },
    { cardNumber: 10, pcNumber: "pc10" },
    { cardNumber: 11, pcNumber: "pc11" },
    { cardNumber: 12, pcNumber: "pc12" },
    { cardNumber: 13, pcNumber: "pc13" },
    { cardNumber: 14, pcNumber: "pc14" },
    { cardNumber: 15, pcNumber: "pc15" },
    { cardNumber: 16, pcNumber: "pc16" },
    { cardNumber: 17, pcNumber: "pc17" },
    { cardNumber: 18, pcNumber: "pc18" },
    { cardNumber: 19, pcNumber: "pc19" },
    { cardNumber: 20, pcNumber: "pc20" },
    { cardNumber: 21, pcNumber: "pc21" },
    { cardNumber: 22, pcNumber: "pc22" },
    { cardNumber: 23, pcNumber: "pc23" },
    { cardNumber: 24, pcNumber: "pc24" },
  ];
  const [selectedCard, setSelectedCard] = useState(null);
  const handleSelectedPC = () => {
    if (!selectedCard) {
      alert("Please select a card");
      return;
    }
    const selectedPC = cardData.find(
      (card) => card.cardNumber === selectedCard
    ).pcNumber;

    // Now, pass the selectedPC to the Landing component
    navigate("/landing", { state: { selectedPC } });
  };

  const handleCardClick = (pcNumber) => {
    console.log("pcNumber before navigation:", pcNumber);
    // if (pcNumber !== null) {
    //   console.log("Selected PC:", pcNumber);
    //   setSelectedPC(pcNumber);
    //   navigate("/landing", { state: { selectedPC } });
    // }

    // Include the following code to send the selected PC number to the server
    Axios.post("http://localhost:3001/api/selectedPC", {
      selectedPC: pcNumber,
    })
      .then((response) => {
        console.log("Response from the server:", response.data);
      })
      .catch((error) => {
        console.error("Error sending selected PC to the server:", error);
      });
  };

  const getImageForPC = (pcNumber) => {
    // Define an object mapping PC numbers to images
    const pcImages = {
      1: image1,
      2: image2,
      3: image3,
      4: image4,
      5: image5,
      6: image6,
      7: image7,
      8: image8,
      9: image9,
      10: image10,
      11: image11,
      12: image12,
      13: image13,
      14: image14,
      15: image15,
      16: image16,
      17: image17,
      18: image18,
      19: image19,
      20: image20,
      21: image21,
      22: image22,
      23: image23,
      24: image24,
    };

    // Return the image for the selected PC number, or a default image
    return pcImages[pcNumber] || image1; // Use image1 as the default
  };

  return (
    <div className="App">
      <div className="card-grid">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24,
        ].map((pcNumber, index) => (
          <div className="col" key={index}>
            {/* Pass state to the landing page via Link */}
            <Link
              to={{ pathname: "/landing", state: { selectedPC: pcNumber } }}
            >
              {/* Pass a callback to handle card click */}
              <Card
                imgSrc={getImageForPC(pcNumber)}
                imgAlt={`PC ${pcNumber}`}
                buttonText="LOGIN"
                onClick={() => handleSelectedPC(pcNumber)}
              />
            </Link>
          </div>
        ))}
        {/* <button onClick={handleSelectedPC}>Select PC</button> */}
      </div>
    </div>
  );
}

export default Signup;
