import axios from "axios";
export const fetchData = async (res) => {
  try {
    const res = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
    console.log("current price",res.data.bpi.USD.rate_float);
    return res.data.bpi.USD.rate_float
  } catch (error) {
    console.log(error);
  }
};
