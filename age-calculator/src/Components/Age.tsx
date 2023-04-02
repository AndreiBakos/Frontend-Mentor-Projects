
interface AgeProps {
    day: number,
    month: number,
    year: number
}
export default function Age({day, month, year}: AgeProps) {
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