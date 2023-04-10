import { useEffect } from "react";

interface AgeProps {
    day: string,
    month: string,
    year: string
}
export default function Age({day, month, year}: AgeProps) {
    useEffect(() => {
        const currentDate = new Date();
        day = `${currentDate.getDay() - Number(day)}`;
    },[])
    return(
        <div className="ageTextContent">
            <p className="dateString">
                <span className="propValue"> {year} </span> 
                years
            </p>
            <p className="dateString">
                <span className="propValue"> {month} </span> 
                months
            </p>
            <p className="dateString">
                <span className="propValue"> {day} </span> 
                days
            </p>
        </div>
    );
}

