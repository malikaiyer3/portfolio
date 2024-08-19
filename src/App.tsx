/* eslint-disable no-extra-parens */
/* eslint-disable prettier/prettier */
import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import styled, { css, keyframes } from "styled-components";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import pyIcon from "./images/icons8-python-50.png";
import gitIcon from "./images/icons8-git.png";
import javaIcon from "./images/icons8-java-50.png";
import cIcon from "./images/icons8-c-50.png";
import tsIcon from "./images/icons8-code-50.png";
// import kotIcon from "./images/icons8-kotlin.svg";
import sqlIcon from "./images/icons8-database-administrator-50.png";
import backgroundImage from "./images/lagos-night.jpeg";
import ProjectContainerCode from "./Components/ProjectContainerCode";
import malikaHeadshot from "./images/headshot.jpg";

const typing = keyframes`
    from { width: 0 }
    to { width: 100% }
`;

const blinkCaret = keyframes`
    from, 10% { border-color: transparent } /* Caret is visible for the first 10% of the animation */
    50% { border-color: orange; } /* Caret blinks orange for the middle 40% of the animation */
    60%, to { border-color: transparent } /* Caret disappears for the last 10% of the animation */
`;

const TypewriterText = styled.h1`
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid orange; /* The typewriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em; /* Adjust as needed */

    animation: ${typing} 3.5s steps(40, end), ${blinkCaret} 0.75s step-end;
`;

const Header = styled.header`
    margin: 0;
    padding: 0;
    height: 100vh;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(40px + 2vmin);
    font-family: "Courier New";
    font-weight: bold;
    color: white;
`;

const HeaderComponent = styled.div`
    display: flex;
    justify-content: space-between; /* Align items to the start and end of the container */
    align-items: center; /* Align items vertically */
    position: -webkit-sticky;
    position: sticky;
    top: -5px;
    z-index: 2;
    height: 70px;
    min-height: 70px;
    width: 100%;
    background-color: #242526;
    padding: 0 1rem;
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.11);
    gap: 20px;
`;

const NavList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
`;

const NavItem = styled.li`
    margin-left: 1rem;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: #faf9f6;
    font-weight: bold;
    padding: 0.5rem;
    transition: color 0.3s ease;

    &:hover {
        color: #b36a5e;
    }
`;

const Section = styled.section<{ inView: boolean }>`
    padding: 20px;
    opacity: 0;
    transition: opacity 2s ease, transform 2s ease;
    transform: translateY(20px);
    ${({ inView }) =>
        inView &&
        css`
            opacity: 1;
            transform: translateY(0);
        `}
    background-color: #2a2a2a; /* Make sure sections have a background to display the shadow */
    border-radius: 10px; /* Optional: add some rounding to the section corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.19); /* Adjust shadow for better visibility */
    margin-bottom: 20px; /* Add space between sections for shadows to be visible */
`;

const AboutContainer = styled.p`
    font-size: 1.2rem;
    display: flex;
    margin-bottom: 20px;
    margin-right: 20px;
`;

const AboutImage = styled.img`
    width: 100%; /* Scale down with the container */
    max-height: 180px; /* Limit the height to prevent overflow */
    width: auto;
    margin-left: 20px;

    @media (max-width: 768px) {
        margin-left: 0; /* Adjust margin for smaller screens */
    }
`;

const AboutText = styled.p`
    flex: 1;
    text-align: top;
    margin-left: 200 px;
    text-align: left;
    margin-bottom: 5px;
    margin-left: 20px;
    overflow-wrap: break-word;

    @media (max-width: 768px) {
        font-size: 1rem; /* Adjust font size for smaller screens */
    }

    @media (max-width: 480px) {
        font-size: 0.9rem; /* Further adjust for very small screens */
    }
`;

/* Skills Section  */

// Styled components for Skills section
const BoxesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Box = styled.div`
    margin: 20px 0;
    width: calc(100% / 3 - 20px);
    text-align: center;
    border-radius: 12px;
    padding: 30px 10px;
    background-color: #333; /* Make sure boxes have a background to display the shadow */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); /* Adjust shadow for better visibility */
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: var(--primary-color);
        color: var(--white-color) !important;
    }

    @media (max-width: 768px) {
        width: calc(100% / 2 - 20px); /* Adjust width for smaller screens */
    }

    @media (max-width: 480px) {
        width: 100%; /* Full width on very small screens */
    }
`;

const Icon = styled.img`
    width: 50px; /* Adjust the width as needed */
    height: auto;
    margin-bottom: 10px; /* Add some margin to separate the icon and text */
`;

const Topic = styled.div`
    color: var(--black-color);
    font-size: 18px; /* Reduce the font size for better alignment */
    font-weight: 500;
`;
/* Skills styling ends here */

const StyledHr = styled.hr`
    width: 50%;
    margin: 0 auto;
    margin-bottom: 20px;
`;

function App(): JSX.Element {
    //animation code for each section
    const { ref: aboutRef, inView: aboutInView } = useInView({
        triggerOnce: true
    });
    const { ref: skillsRef, inView: skillsInView } = useInView({
        triggerOnce: true
    });
    const { ref: projectsRef, inView: projectsInView } = useInView({
        triggerOnce: true
    });
    const { ref: contactRef, inView: contactInView } = useInView({
        triggerOnce: true
    });

    //skills array
    const skills = [
        { name: "Python", icon: pyIcon },
        { name: "TS/HTML/CSS", icon: tsIcon },
        { name: "Java", icon: javaIcon },
        { name: "C++", icon: cIcon },
        { name: "SQL", icon: sqlIcon },
        { name: "Git", icon: gitIcon }
    ];

    return (
        <div className="App">
            <Helmet>
                <title>Malika Portfolio</title>
            </Helmet>
            <HeaderComponent>
                <header>
                    <nav>
                        <NavList>
                            <NavItem>
                                <NavLink
                                    activeClass="active"
                                    smooth
                                    spy
                                    to="about"
                                    duration={300}
                                >
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    activeClass="active"
                                    smooth
                                    spy
                                    to="skills"
                                    duration={300}
                                >
                                    Skills
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    activeClass="active"
                                    smooth
                                    spy
                                    to="projects"
                                    duration={300}
                                >
                                    Projects
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    activeClass="active"
                                    smooth
                                    spy
                                    to="contact"
                                    duration={300}
                                >
                                    Contact
                                </NavLink>
                            </NavItem>
                        </NavList>
                    </nav>
                </header>
            </HeaderComponent>
            <Header>
                <div>
                    <TypewriterText>
                        <p>
                            Hi I&apos;m Malika Iyer :) Welcome to my Portfolio!
                        </p>
                    </TypewriterText>
                </div>
            </Header>
            <Section id="about" ref={aboutRef} inView={aboutInView}>
                <h2>
                    <b>About</b>
                </h2>
                <StyledHr />
                <AboutContainer>
                    <AboutText>
                        Hello! I am Malika Iyer, a fourth year BS Computer
                        Science student at the University of Delaware. I am
                        interested in the fields of Human-Computer Interaction
                        and Artificial Intelligence. I have experience as a
                        software engineering intern at Mindsprint and as a
                        research assistant at the Sensify Lab at UD. I hope to
                        work in software engineering in the future, specifically
                        on something that makes a real-world impact because I am
                        passionate about social change and human rights. In my
                        free time, I like to spend time with friends/family, do
                        photography, listen to music, sing, or play the ukulele!
                        I am an avid dog and cat lover but do not have any pets
                        of my own (yet)!
                    </AboutText>
                    <AboutImage src={malikaHeadshot} alt="Image" />
                </AboutContainer>
            </Section>
            <Section id="skills" ref={skillsRef} inView={skillsInView}>
                <h2>
                    <b>Skills</b>
                </h2>
                <StyledHr />
                <BoxesContainer>
                    {skills.map((skill, index) => (
                        <Box key={index}>
                            <Icon src={skill.icon} alt="Image" />
                            <Topic>{skill.name}</Topic>
                        </Box>
                    ))}
                </BoxesContainer>
            </Section>
            <Section id="projects" ref={projectsRef} inView={projectsInView}>
                <h2>
                    <b>Projects</b>
                </h2>
                <StyledHr />
                <ProjectContainerCode />
            </Section>
            <Section id="contact" ref={contactRef} inView={contactInView}>
                <h2>
                    <b>Contact</b>
                </h2>
                <StyledHr />
                <p>Email: malika@udel.edu</p>
                <p>
                    Linkedin: 
                    <a
                        href= "https://www.linkedin.com/in/malikaiyer/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                         malika-iyer
                    </a>
                </p>
            </Section>
        </div>
    );
}

export default App;
