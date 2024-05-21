import "./home.css";
import homeImage from "../../assets/home-big.png";
import homeTop from "../../assets/home-top.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function signHandle(){
    console.log("Sign in clicked");
    navigate("/List");
  }

  return (
    <div className="home-container">
      <div className="left-div">
        <img src={homeImage} alt="home left" />
      </div>
      <div className="right-div">
        <img src={homeTop} alt="home top" />
        <span className="title-ai">AI Bot Creator</span>
        <span className="subtitle-ai">Powered by Kwaai</span>
        <button onClick={signHandle} className="signin-button">Sign in</button>
      </div>
    </div>
  );
}
