import { Link } from 'react-router-dom'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Dashboard from './Admin/Dashboard'
import Landing from './Landing/Landing'
import Referral from './User/Referral'
import Rewards from './Admin/Rewards'
import Feedback from './Admin/Feedback'
import FeedbackDeleted from './Admin/FeedbackDeleted'
import Users from './Admin/Users'
import UsersDeleted from './Admin/UsersDeleted'
// import Login from './User/login'


function App() {

  let currentPath = useLocation().pathname;

  return (
   <div>
    {currentPath === "/" && <div> <h1> Navigation </h1>  
    <Link to="/Landing"> <div> Landing Page</div> </Link>
    <Link to="/Referral" > <div> User Section</div></Link>
    <Link to="/Admin"> <div> Admin Dashboard</div> </Link>
    <Link to="/Admin/Users"> <div> Admin Users</div> </Link>
    </div>}

   

    <Routes>
      <Route path='/Landing' element={<Landing/>}/>
      <Route path='/Referral' element={<Referral/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Feedback' element={<Feedback/>}/>
      <Route path='/FeedbackDeleted' element={<FeedbackDeleted/>}/>
      <Route path='/Rewards' element={<Rewards/>}/>
      <Route path='/Admin/Users' element={<Users/>}/>
      <Route path='/Admin/UsersDeleted' element={<UsersDeleted/>}/>
    </Routes>
   </div>
   
  )
}

export default App
