import "./app.css";
import Buttons from "./components/buttons/Buttons";
import { useEffect, useState } from "react";
import { fetchData } from "./utilities/fetchData";
import { ThreeDots } from "react-loader-spinner";

const App = () => {
  const storedData = JSON.parse(localStorage.getItem("score"))
  const [data, setData] = useState(0);
  const [disable, setDisable] = useState(false);
  const [score, setScore] = useState(storedData ? storedData : 0);
  useEffect(() => {
    const fetchInfo = async () => {
      const value = await fetchData();
      console.log(value);
      setData(value);
    };
    fetchInfo();
  }, []);

  const handleClick = (type) => {
    setDisable(true);
    let newprice;
    setTimeout(async () => {
      setDisable(false);
      newprice = await fetchData();

      if (type === "inc" && data < newprice) {
        setScore((score) => score + 1);
        alert("you guessed it right 1 point added :) !!");
      } else if (type === "dec" && data > newprice) {
        setScore((score) => score + 1);
        alert("you guessed it right 1 point added :) !!");
      } else if (type === "same" && data === newprice) {
        setScore((score) => score + 1);
        alert("you guessed it right 1 point added :) !!");
      } else {
        setScore((score) => score - 1);
        alert("you made a wrong guess 1 point deducted :( !!");
      }
      setData(newprice);

    }, 5000);
  };
  localStorage.setItem("score", JSON.stringify(score));

  return (
    <div className="Container">
      <h1 style={{ color: "white" }}>Current BitCoin Price :${data}</h1>
      <h1 style={{ color: "white",marginTop:"30px" }}>Predict the price of the BitCoin</h1>
      <h1 style={{ color: "white",marginTop:"30px" }}>score : {score}</h1>
      {disable ? (
        <ThreeDots color="black" height={80} width={80} />
      ) : (
        <div className="btnContainer">
          <Buttons
            value="increment"
            onClick={() => handleClick("inc")}
            className="button"
            disabled={disable}
          />
          <Buttons
            value="same"
            onClick={() => handleClick("same")}
            className="button"
            disabled={disable}
          />
          <Buttons
            value="decrement"
            onClick={() => handleClick("dec")}
            className="button"
            disabled={disable}
          />
        </div>
      )}
    </div>
  );
};

export default App;
