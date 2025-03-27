import { Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Alldeatils from "./Pages/Alldeatils"
import ChildrenList from "./Pages/ChildrenList"
function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/all" element={<Alldeatils/>}/>
        <Route path="/all-children" element={<ChildrenList/>}/>
        
      </Routes>
    </div>
  )
}

export default App
