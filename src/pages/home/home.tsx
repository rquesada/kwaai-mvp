import "./home.css";
import homeImage from "../../assets/home-big.png";
import homeTop from "../../assets/home-top.png";

export default function Home() {
  return (
    <div className="home-container">
      <div className="left-div">
        <img src={homeImage} alt="home left" />
      </div>
      <div className="right-div">
        <img src={homeTop} alt="home top" />
        <h1>AI Bot Creator</h1>
        <h2>Powered by Kwaai</h2>
        <button>Sign in</button>
        
      </div>
    </div>
  );
}
