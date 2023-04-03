import { useEffect } from "react";

interface AgeProps {
    day: string,
    month: string,
    year: string
}
export default function Age({day, month, year}: AgeProps) {

    useEffect(() => {
        const currentDate = new Date();
        console.log(currentDate.getDate());
        
        day = `${currentDate.getDay() - Number(day)}`;
        console.log(day)
    },[])
    return(
        <div className="ageTextContent">
            <h1>
                <span className="propValue"> {year} </span> 
                years
            </h1>
            <h1>
                <span className="propValue"> {month} </span> 
                months
            </h1>
            <h1>
                <span className="propValue"> {day} </span> 
                days
            </h1>
        </div>
    );
}

