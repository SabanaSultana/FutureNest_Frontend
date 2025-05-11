import React, {useEffect,useState} from "react"
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
import Context from "./Contexts/index";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./Store/userSlice";
import SummaryApi from "./Common/index";
function App() {
  const dispatch = useDispatch();
  const fetchUserDetails = async () => {
    const dataApi = await SummaryApi.current_user.method(
      SummaryApi.current_user.url,
      {
        withCredentials: true,
      }
    );    
  
    if (dataApi.data.success) {
      // console.log("Data api ", dataApi);
      console.log("user data ", dataApi.data.user);
      dispatch(setUserDetails(dataApi.data.user));
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <Context.Provider
    value={{
      fetchUserDetails,
    }}
  >
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
    </Context.Provider>
  )
}

export default App
