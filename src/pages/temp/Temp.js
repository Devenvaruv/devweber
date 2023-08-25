import Dev from "../../assets/images/Dev.jpg";
import './Temp.css'

function Temp() {
    return (
        <div className="image-container">
        <img
          src={Dev}
          alt="A beautiful landscape"
          className="centered-image"
        />
      </div>
    );
  }
  
  export default Temp;
  