import React from 'react'; // Import React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/parts/navbar';
import RideBuddyHomepage from './assets/components/homepage';
import RideBuddyPage from './assets/components/ridepage';
import RideOffer from './assets/components/RideOffer';


function App() {
  return (  
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<RideBuddyHomepage />} />
        <Route path="/ridepage" element={<RideBuddyPage />} />
        <Route path="/RideOffer" element={<RideOffer />} />       
      </Routes>
    </BrowserRouter>
  );
}

export default App;