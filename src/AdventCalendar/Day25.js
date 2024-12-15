import HeroSection from "./HeroSection";
import DogImages from "./DogImages";
import MusicIcon from "./MusicIcon";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Day25 = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#E40F37", padding: "20px" }}>
      <HeroSection/>
      <MusicIcon />
      <DogImages />
    </div>
  );
};

export default Day25;
