// import { useState } from "react";
// import axios from "axios";
// import "./buttons.css";
// import { fetchData } from "../../utilities/fetchData";

// const Buttons = ({ data}) => {
//   const [newprice, setNewprice] = useState({});
//   const [disable, setDisable] = useState(false);
//   const [score, setScore] = useState(0);

//   const handlePrediction = async (type) => {
//     setDisable(true);

//     setTimeout(async () => {
//       setDisable(false);
//       try {
//         const res = await fetchData()
//         setNewprice(res.data)
//       } catch (error) {
//         console.log(error);
//       }

//       refresh()

//       if (type === "inc" && data.lprice < newprice.lprice) {
//         setScore((score) => score + 1);
//         localStorage.setItem("score", JSON.stringify(score));
//       } if (type === "dec" && data.lprice > newprice.lprice) {
//         setScore((score) => score + 1);
//         localStorage.setItem("score", JSON.stringify(score));
//       } if (type === "same" && data.lprice === newprice.lprice) {
//         setScore((score) => score + 1);
//         localStorage.setItem("score", JSON.stringify(score));
//       } else {
//         setScore((score) => score - 1);
//         localStorage.setItem("score", JSON.stringify(score));
//       }

//     }, 5000);
//   };

//   return (
//     <div className="btnContainer">
//       <h2 style={{ color: "white" }}>Score : {score}</h2>
//       <div className="btns">
//         <button
//           className="button"
//           onClick={() => handlePrediction("inc")}
//           disabled={disable}
//         >
//           Increment
//         </button>
//         <button
//           className="button"
//           onClick={() => handlePrediction("dec")}
//           disabled={disable}
//         >
//           Decrement
//         </button>
//         <button
//           className="button"
//           onClick={() => handlePrediction("same")}
//           disabled={disable}
//         >
//           Same
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Buttons;
import React from 'react'

const Buttons = ({value,onClick,disabled}) => {
  return (
    <div>
      <div>
      <button onClick={onClick} className="button" disabled={disabled}>{value}</button>
      </div>
    </div>
  )
}

export default Buttons