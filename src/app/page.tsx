import Image from "next/image";
import MyImage from "@/app/image.png"; 
export default function Home() {
  return (
    <div className="parent-container">
      <div className="child-container">
        <p className="intro">
          Hey✋, I'm
          <br />
          <span className="hurma">HURMA</span>
          <br />
          I'm a GIAIC student with a passion for developing responsive web applications and enhancing user interfaces.
        </p>
        
      </div>

      <div className="child-container">
      <Image src={MyImage} alt="profile-pic" className="profile-pic"/>
      </div>
    </div>
  );
}
