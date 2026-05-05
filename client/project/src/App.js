import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Component/Nav'
import College from './Component/College/College'
import EventCard from './Component/EventCards'
import EventFinderss from './Component/EventFinderss'
import Admin from './Component/Admin'
import Login from './Component/Events/Login'
import FeedForm from './Component/FeedForm'
import ReportForm from './Component/ReportForm'
import About from './Pages/About'
import CardFooter from './Component/CardFooter/Footer'
import Carousel from './Component/Carousel'
import Loginss from './Component/Loginss'
import Category from './Component/Category'
import ManageCategory from './Component/ManageCategory'

import ManageFeedback from './Component/ManageFeedback';
import Update from './Component/Update'
import AddCat from './Component/AddCat'
import Home from './Pages/Home'
import Swipers from './Component/Swipers'
import Events from './Pages/Events'
import InsrtEvnt from './Component/InsrtEvnt'
import ManageEvents from './Component/ManageEvents'
import ManageReport from './Component/ManageReport'
import Manageuser from './Component/ManageUser'
import UpdateEvnt from './Component/UpdateEvnt'
import Apply from './Component/Apply'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
<Route path='/Reg' element={<College/>}/>
 <Route path='/event' element={<Events/>}/> 
<Route path='/find' element={<EventFinderss/>}/>
<Route path='/admi' element={<Admin/>}/>
{/* <Route path='/log' element={<Login/>}/> */}
{/* <Route path='/feed' element={<FeedForm/>}/> */}
{/* <Route path='/report' element={<ReportForm/>}/> */}
<Route path='/about' element={<About/>}/>
<Route path='/carousel' element={<Carousel/>}/>
<Route path='/log' element={<Loginss/>}/>
<Route path='/category' element={<Category/>}/>
<Route path='/cat' element={<ManageCategory/>}/>
<Route path='/add' element={<AddCat/>}/>
<Route path='/feed' element={<ManageFeedback/>}/>
<Route path='/update/:id' element={<Update/>}/>
<Route path='/updatevnt/:id' element={<UpdateEvnt/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/swipe' element={<Swipers/>}/>
<Route path='/card' element={<EventCard/>}/>
<Route path='/insrt' element={<InsrtEvnt/>}/>
<Route path='/mevnt' element={<ManageEvents/>}/>
<Route path='/mreport' element={<ManageReport/>}/>
<Route path='/muser' element={<Manageuser/>}/>
<Route path='/apply' element={<Apply/>}/>
        </Routes>
        <CardFooter/>
        </BrowserRouter>
    </div>
  )
}
