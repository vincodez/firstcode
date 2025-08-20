import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Card from './Components/Card';
import Info from './Components/Info';
import Address from './Components/Address';
import Footer from './Components/Footer';
import About from './Components/About';
import Material from './Components/Material';
import Item from './Components/Item';


import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';

function App() {
  return (
    <GoogleOAuthProvider clientId="1095641734237-lunugb5ms0knq68qevv86uv6rdm1g88i.apps.googleusercontent.com">
      <>
      
        <Navbar />
       
        <Material />
      
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <Card />
                <Info />
                <Item />
                <Address />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        
        </Routes>
      </>
    </GoogleOAuthProvider>
  );
}

export default App;
