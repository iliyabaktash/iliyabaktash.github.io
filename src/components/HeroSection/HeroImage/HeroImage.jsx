import './HeroImage.css'
import myImage from "../../../assets/pictures/iliya.jpg";

export default function HeroImage(){
    return (
        <div className={'my-image'}>
            <img src={myImage}/>
        </div>
    )
}