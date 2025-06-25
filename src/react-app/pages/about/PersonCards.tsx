import "./PersonCards.css";
import Person from "../../assets/media/about/person.jpeg";
export default function PersonCards(){
    return (
        <>
        <div className="card-wrapper-about">
            <PersonCard image={Person} blurb="abcdef"/>
            <PersonCard image={Person} blurb="abcdef"/>
            <PersonCard image={Person} blurb="abcdef"/>
            <PersonCard image={Person} blurb="abcdef"/>
            
        </div>
        </>
    );
}
function PersonCard({ image, blurb }: { image: any; blurb: string }) {
    return(
        <div className="card-about">
            <img src={image}></img>
            <div>{blurb}</div>
        </div>
    )
}