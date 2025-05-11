import { Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Alldeatils from "./Pages/Alldeatils"
import ChildrenList from "./Pages/ChildrenList"
import Child from "./Pages/Child"
import Orphange_dashboard from "./Pages/dashboard/Orphange_dashboard"
import Donor from "./Pages/dashboard/Donor"
import Admin from "./Pages/dashboard/Admin"
import Login from "./Pages/Login"
function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/orphanages" element={<Alldeatils/>}/>
        <Route path="/children" element={<ChildrenList/>}/>
        <Route path="/child" element={<Child/>}/>
        <Route path="/orphanage-dashboard" element={<Orphange_dashboard/>}/>  
        <Route path="/donor-dashboard" element={<Donor/>}/>
        <Route path="/admin-dashboard" element={<Admin/>}/>   
        <Route path="/login" element={<Login/>}/>     
      </Routes>
    </div>
  )
}

export default App
