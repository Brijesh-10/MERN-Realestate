import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile'
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing';
import Search from './pages/Search';
import Footer from './components/Footer';
import ForgotPassword from './pages/Forgotpassword';
export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="pt-14"> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/listing/:listingId" element={<Listing/>}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/> 
        <Route element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/create-listing" element={<CreateListing/>}/>
          <Route path="/update-listing/:listingId" element={<UpdateListing/>}/>
        </Route>
      </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}
