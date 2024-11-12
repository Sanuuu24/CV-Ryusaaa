import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Header />
    <Profile />
    </>
    
  )
}
export default App