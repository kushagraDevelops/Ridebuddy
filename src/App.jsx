import React from 'react'; // Import React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/parts/navbar';
import RideBuddyHomepage from './assets/components/homepage';
import RideBuddyPage from './assets/components/ridepage';
import RideOffer from './assets/components/rideoffer';
import ProfilePage from './assets/components/profile';
import PostRideForm from './assets/components/postride';


function App() {
  return (  
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<RideBuddyHomepage />} />
        <Route path="/ridepage" element={<RideBuddyPage />} />
        <Route path="/RideOffer" element={<RideOffer />} />   
        <Route path="/profile" element={<ProfilePage />} />    
        <Route path="/postride" element={<PostRideForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;