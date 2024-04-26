import { useEffect } from "react";

const Cards = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("dummyjson.com/users");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        throw new Error("Couldn't fetch data");
      }
    };
    fetchData();
  });
  return <div>Cards</div>;
};
export default Cards;
