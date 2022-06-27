import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  //*triggering on every render/mount

  // useEffect(() => {
  //   console.log("I rendered");
  // });

  //! on first render/mount only (component did mount)
  // useEffect(() => {
  //   console.log("I will mount only once");
  // }, []);

  // **on first render/mount AND whenever the dependency changes (alternate to componentDidUpdate)

  // useEffect(() => {
  //   console.log(`My name is" ${name} `);
  // }, [name]);

  // TODO : cleanup example / Unsubscribing
  // useEffect(() => {
  //   console.log(`My name is" ${name} `);

  //   return () => {
  //     console.log("I unmounted");
  //   };
  // }, [name]);

  useEffect(() => {
    // cleanup function

    window.addEventListener("resize", updateWindowWidth);
    // console.log("Before cleanup");

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
      // console.log("After cleanup");
    };
  });

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div>
      <center>
        <h1> Testing the useEffect hook</h1>
        <h2> The window width is: {windowWidth}</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </center>
    </div>
  );
};

export default App;
