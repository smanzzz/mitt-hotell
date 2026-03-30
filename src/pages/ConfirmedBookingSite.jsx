import { useState } from "react"


export function ConfirmedBookingSite({details, onBack}) {


    
    const amountOfPeople = details.guests === 1 ? "person" : "personer";
    

    return( 
        <div>
            <h1>Tack {details.guestName}</h1>
            <p>Du har bokat ett rum av typen {details.roomType} för {details.guests} {amountOfPeople} </p>
             <p>Du har bokat mellan {details.checkIn} och {details.checkOut} vi syns! </p>
           < button className="btn btn-primary" onClick={onBack}> Gör en ny bokning</button>
        </div>
    )
}

 


