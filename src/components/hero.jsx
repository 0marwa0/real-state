import heroImg from "../assets/real-state.jpg";
import "./hero.css";
import { FaArrowDown } from "react-icons/fa6";

function Hero() {
  return (
    <div className="hero">
      <div className="img-container">
        <img src={heroImg} />
      </div>
      <div>
        <p>Building Your Future, One Property at a Time</p>

        <button className="down-arrow">
          <FaArrowDown size={30} />
        </button>
      </div>
    </div>
  );
}
export default Hero;
