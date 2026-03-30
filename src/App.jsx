import { useState } from 'react';
import { BookingSite } from './pages/BookingSite'
import { ConfirmedBookingSite } from './pages/ConfirmedBookingSite'
import './App.css';




function App() {

  const [isBooked, setIsBooked] = useState(false);
  const [bookingDetails, setBookingDetails] = useState ("");

  const goBack = () => {
    console.log("Nu körs goBack funktionen")
    setIsBooked(false)
  };

  if (isBooked) {

    return <ConfirmedBookingSite details = {bookingDetails} onBack={goBack} />;

  }
   

  return (
    <div className="App">
      <h1>Välkommen till bokningssidan</h1>
      <BookingSite onBookingComplete={(bookingDetails) => {setIsBooked(true), setBookingDetails(bookingDetails)}} />

    </div>

  );
}

export default App
