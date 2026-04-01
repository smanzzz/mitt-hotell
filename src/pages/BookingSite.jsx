import { useState } from "react";



export function BookingSite({ onBookingComplete }) {

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guestName, setGuestName] = useState("");
    const [roomType, setRoomType] = useState("Standard");
    const [guests, setGuests] = useState(1);



    const today = new Date().toISOString().split('T')[0];


    function handleSubmit(e) {
        e.preventDefault();

        if (new Date(checkOut) <= new Date(checkIn)) {
            alert("Utcheckning måste ske efter incheckning")
            return;
        }

        if (new Date(checkIn) < new Date(today)) {
            alert("Du kan inte boka bakåt i tiden.")

        }

        if (guests < 1 || guests > 10) {
            alert("Antal gäster måste vara mellan 1 och 10!");
            return;
        }
        const bookingData = {
            guestName,
            checkIn,
            checkOut,
            guests,
            roomType
        };


        localStorage.setItem("hotelBokning", JSON.stringify(bookingData));

        onBookingComplete(bookingData);


    }
    const isFormValid = guestName.length > 2 && checkIn !== "" && checkOut !== "" && guests >= 1 && guests <= 10 && roomType !== "";
    return (
        <>
            <div className="body">

                <form onSubmit={handleSubmit}>
                    <h2>Boka rum!</h2>
                    <div>
                        <label>Välj incheckningsdatum </label>
                        <input
                            type="date"
                            min={today}
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            onClick={(e) => e.target.showPicker()}
                            required
                        />
                    </div>
                    <div>
                        <label>Välj utcheckningsdatum </label>
                        <input
                            type="date"
                            min={checkIn}
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            onClick={(e) => e.target.showPicker()}
                            required
                        />
                    </div>
                    <div>
                        <label >Skriv in ditt namn</label>
                        <input type="text" value={guestName}
                            onChange={(e) => setGuestName(e.target.value)} />

                    </div>
                    <div>
                        <label>Välj rumstyp</label>
                        <select value={roomType}
                            onChange={(e) => setRoomType(e.target.value)}>
                            <option value="Standard">Standard</option>
                            <option value="Deluxe">Deluxe</option>
                            <option value="Suite">Suite</option>

                        </select>

                    </div>

                    <div>
                        <label>Ange antal personer mellan 1-10</label>
                        <input type="number" min="1"
                            max="10" value={guests}
                            onChange={(e) => setGuests(parseInt(e.target.value))} />
                    </div>

                    <button className="btn btn-primary" disabled={!isFormValid} >Boka nu</button>
                    <p>Vänligen fyll i alla fält för att kunna boka.</p>
                </form>
            </div>
        </>

    );
}
