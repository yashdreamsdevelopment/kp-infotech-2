import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Profile from "./components/Friend/Profile";
import "./App.css";
import Counter from "./components/Counter/Counter";

function App() {
  // const friendList = [
  //   { name: "abhishek", companyName: "reactify", companyLocation: "IN" },
  //   { name: "swapnil", companyName: "Amazon", companyLocation: "IN" },
  //   { name: "kishen", companyName: "flipkart", companyLocation: "IN" },
  //   { name: "krishna", companyName: "D&G", companyLocation: "IN" },
  //   { name: "artik", companyName: "Leaf", companyLocation: "IN" },
  // ];

  const [counter1, setCounter1] = useState(0);
  // const [counter2, setCounter2] = useState(0);

  // const [counter, setCounter] = useState({ count1: 0, count2: 0 });

  // const handleIncrement = (identifier) => {
  //   if (identifier === "count1") {
  //     setCounter((prevState) => ({
  //       ...prevState,
  //       count1: prevState.count1 + 1,
  //     }));
  //   } else {
  //     setCounter((prevState) => ({
  //       ...prevState,
  //       count2: prevState.count2 + 1,
  //     }));
  //   }
  // };

  // const handleIncrement1 = () => {
  //   setCounter1(counter1 + 1);
  // };

  // const handleIncrement2 = () => {
  //   setCounter2(counter2 + 1);
  // };

  const handleIncrement = () => {
    setCounter1((prevCount) => prevCount + 1);
    setCounter1((prevCount) => prevCount + 1);
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* <h1 title="this is a friedsn list">Friend Lists</h1>
      {friendList.map((friend, index) => (
        <Profile key={index} {...friend} />
      ))} */}

      <Counter
        label="counter 1"
        count={counter1}
        handleIncrement={handleIncrement}
      />
      {/* <Counter
        label="counter 2"
        count={counter.count2}
        handleIncrement={() => handleIncrement("count1")}
      /> */}
    </div>
  );
}

export default App;
