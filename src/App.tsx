/* eslint-disable prettier/prettier */
import React from "react";
import "./App.css";
import styled, { css, keyframes } from "styled-components";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";

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
    background-color: #f0f0f0;
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
    color: #333;
    font-weight: bold;
    padding: 0.5rem;
    transition: color 0.3s ease;

    &:hover {
        color: #b36a5e;
    }
`;

const AboutSection = styled.section<{ inView: boolean }>`
    display: flex;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.11);
    font-size: 1.5 rem;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;

    ${({ inView }) => inView && fadeInAnimation}
`;

const AboutImage = styled.img`
    width: 200px;
    height: auto;
    margin-left: 20px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInAnimation = css`
    opacity: 0;
    animation: ${fadeIn} 1s forwards;
`;

/* Skills Section  */

// Styled components for Skills section
const SkillsSection = styled.section<{ inView: boolean }>`
    padding: 20px;

    ${({ inView }) => inView && fadeInAnimation}
`;

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
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: var(--primary-color);
        color: var(--white-color);
    }
`;

const Icon = styled.div`
    height: 50px;
    width: 50px;
    background-color: var(--primary-color);
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    color: var(--white-color);
    margin: 0 auto 10px auto;
`;

const Topic = styled.div`
    color: var(--black-color);
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 10px;
`;
/* Skills styling ends here */

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
        { name: "HTML", icon: "fab fa-html5" },
        { name: "CSS", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "Bootstrap", icon: "fab fa-bootstrap" },
        { name: "React JS", icon: "fab fa-react" },
        { name: "Git", icon: "fab fa-git-alt" }
    ];

    return (
        <div className="App">
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
                                >
                                    Navigation
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    activeClass="active"
                                    smooth
                                    spy
                                    to="projects"
                                >
                                    Connect
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    activeClass="active"
                                    smooth
                                    spy
                                    to="contact"
                                >
                                    Contact Us
                                </NavLink>
                            </NavItem>
                        </NavList>
                    </nav>
                </header>
            </HeaderComponent>
            <header className="App-header">
                <div
                    className="animate__animated animate__bounceIn"
                    style={{ animationDuration: "2s" }}
                >
                    Welcome to Malika Iyer&rsquo;s Personal Website!
                </div>
            </header>
            <AboutSection id="about" ref={aboutRef} inView={aboutInView}>
                Hello! I am Malika Iyer, a fourth year BS Computer Science
                student at the University of Delaware. I am interested in the
                fields of Human-Computer Interaction and Artificial
                Intelligence. I have experience as a software engineering intern
                at Mindsprint and as a research assistant at the Sensify Lab at
                UD. I hope to work in software engineering in the future,
                specifically on something that makes a real-world impact because
                I am passionate about social change and human rights. In my free
                time, I like to spend time with friends/family, do photography,
                listen to music, sing, or play the ukulele! I am an avid dog and
                cat lover but do not have any pets of my own (yet)!
                <AboutImage
                    src="https://avatars.githubusercontent.com/u/44524659?v=4"
                    alt="Image"
                />
            </AboutSection>
            {/*------------- Skills Section----------------- */}
            <SkillsSection id="skills" ref={skillsRef} inView={skillsInView}>
                <div className="content">
                    <div className="title"></div>
                    <BoxesContainer>
                        {skills.map((skill, index) => (
                            <Box key={index}>
                                <Icon>
                                    <i className={skill.icon}></i>
                                </Icon>
                                <Topic>{skill.name}</Topic>
                            </Box>
                        ))}
                    </BoxesContainer>
                </div>
            </SkillsSection>

            <section id="Projects" className="App-section">
                <h2>Projects</h2>
                Lorem ipsum
            </section>
            <AboutSection id="contact" ref={contactRef} inView={contactInView}>
                <h2>Contact</h2>
                Hello! I am Malika Iyer, a fourth year BS Computer Science
                student at the University of Delaware. I am interested in the
                fields of Human-Computer Interaction and Artificial
                Intelligence. I have experience as a software engineering intern
                at Mindsprint and as a research assistant at the Sensify Lab at
                UD. I hope to work in software engineering in the future,
                specifically on something that makes a real-world impact because
                I am passionate about social change and human rights. In my free
                time, I like to spend time with friends/family, do photography,
                listen to music, sing, or play the ukulele! I am an avid dog and
                cat lover but do not have any pets of my own (yet)!
            </AboutSection>
        </div>
    );
}

export default App;
