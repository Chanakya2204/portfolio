import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Homepg from "./components/Homepg";
import MyProfile from "./components/MyProfile";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";




function App() {
  return (
    <div>
   <NavBar></NavBar>
  <Homepg></Homepg>
  <SocialLinks/>
  <About></About>
 <MyProfile/>
 <Experience/>
 <Contact/>
  
    </div>
  );
}

export default App;
