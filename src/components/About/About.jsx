import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/prop124.png";

const About = () => {
  const text1 =
    "I am an experienced Software Engineer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege collaborating with prestigious organizations, contributing to their success and growth.";

  const text2 =
    "My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.";

  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  const aboutRef = useRef(null);

  /* ===== START TYPING ON SCROLL ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, [hasStarted]);

  /* ===== TYPING EFFECT ===== */
  useEffect(() => {
    if (!hasStarted) return;

    let i = 0;
    let j = 0;

    const typeFirst = setInterval(() => {
      if (i < text1.length) {
        setDisplayText1(text1.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeFirst);

        const typeSecond = setInterval(() => {
          if (j < text2.length) {
            setDisplayText2(text2.slice(0, j + 1));
            j++;
          } else {
            clearInterval(typeSecond);
          }
        }, 28);
      }
    }, 28);

    return () => clearInterval(typeFirst);
  }, [hasStarted]);

  return (
    <div id="about" className="about" ref={aboutRef}>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-section">
        {/* ===== STATIC IMAGE (NO EFFECT) ===== */}
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>

        <div className="about-right">
          {/* ===== TYPING PARAGRAPH ===== */}
          <div className="about-para">
            <p>{displayText1}</p>
            <p>{displayText2}</p>
          </div>

          {/* ===== SKILLS ===== */}
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Git & GitHub</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>

      {/* ===== ACHIEVEMENTS ===== */}
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>HACKATHON CERTIFICATES</p>
        </div>
      </div>
    </div>
  );
};

export default About;
