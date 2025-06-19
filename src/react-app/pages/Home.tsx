// src/App.tsx

import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("unknown");

  return (
    <>
    <Navbar />
    
    </>
  );
}

export default Home;
