import { Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Alldeatils from "./Pages/Alldeatils"
import ChildrenList from "./Pages/ChildrenList"
import Child from "./Pages/Child"
function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/all-orphn" element={<Alldeatils/>}/>
        <Route path="/all-chldrn" element={<ChildrenList/>}/>
        <Route path="/child" element={<Child/>}/>
        
      </Routes>
    </div>
  )
}

export default App
