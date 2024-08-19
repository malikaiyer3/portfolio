/* eslint-disable no-extra-parens */
/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";
import projNearbyeats from "../images/proj-and101-app.png";
import projSudoku from "../images/proj-sudoku.png";
import projaccessitech from "../images/proj-accessitech.png";

const ProjectContainer = styled.div`
    display: flex;
    align-items: left;
    text-align: left;
    margin-bottom: 20px;
    height: auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #333; /* Make sure project containers have a background to display the shadow */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.19); /* Adjust shadow for better visibility */
`;

const ProjectDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1; /* Take up remaining space */
    margin-right: 20px; /* Add margin to separate the image and text */
`;

const ProjectImage = styled.img`
    width: auto;
    max-height: 180px;
    border-radius: 10px;
    margin-left: auto; /* Move the image to the right */
    margin-bottom: 5px;
`;

const ProjectTitle = styled.h3`
    flex: 1;
    text-align: left;
    font-size: 1.5rem;
    margin-bottom: 5px;
`;

const ProjectDescription = styled.p`
    flex: 1;
    text-align: top;
    margin-left: 200 px;
    text-align: left;
    font-size: 1rem;
    margin-bottom: 5px;
`;

const ProjectLinks = styled.div`
    display: flex;
    gap: 10px;
`;

const ProjectLink = styled.a`
    text-decoration: none;
    color: #333;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: #e0e0e0;
    transition: background-color 0.3s;

    &:hover {
        background-color: #b36a5e;
        color: white;
    }
`;

function ProjectContainerCode() {
    return (
        <div>
            <ProjectContainer>
                <ProjectDetails>
                    <ProjectTitle>NearbyEats</ProjectTitle>
                    <ProjectDescription>
                        An App created using the Yelp API, Android Studio and
                        Kotlin. This app requests a user for their location and
                        displays any restaurant near them. Users can see the
                        restaurant&apos;s name, rating, price range, phone
                        number and address. Created for Codepath&apos;s Android
                        Development Course
                    </ProjectDescription>
                    <ProjectLinks>
                        <ProjectLink
                            href="https://github.com/and101-final-proj-group18/and101-final-project.git"
                            target="_blank"
                        >
                            GitHub
                        </ProjectLink>
                        <ProjectLink
                            href="https://www.youtube.com/watch?v=zc6o96Qe0UU"
                            target="_blank"
                        >
                            Video Demo
                        </ProjectLink>
                    </ProjectLinks>
                </ProjectDetails>
                <ProjectImage src={projNearbyeats} alt="NearbyEats App Image" />
            </ProjectContainer>

            <ProjectContainer>
                <ProjectDetails>
                    <ProjectTitle>Sudoku Solver</ProjectTitle>
                    <ProjectDescription>
                        A Sudoku Solver created using Python. This program
                        solves any given Sudoku puzzle using a backtracking
                        algorithm. The program takes input from a local web page
                        and outputs the different steps taken to solve the
                        puzzle and the final puzzle.
                    </ProjectDescription>
                    <ProjectLinks>
                        <ProjectLink
                            href="https://github.com/malikaiyer/sudoku-solver"
                            target="_blank"
                        >
                            GitHub
                        </ProjectLink>
                    </ProjectLinks>
                </ProjectDetails>
                <ProjectImage src={projSudoku} alt="Sudoku Image" />
            </ProjectContainer>

            <ProjectContainer>
                <ProjectDetails>
                    <ProjectTitle>8-puzzle solver</ProjectTitle>
                    <ProjectDescription>
                        An 8-puzzle solver created using Lisp. This program
                        solves any given 8-puzzle using a heuristic search
                        algorithm. The program takes the initial input and a
                        goal output and outputs the step-by-step solution used
                        to solve the puzzle. The different algorithms
                        implemented are Depth Iterative Search, Breadth First
                        Search, and A*, and the heuristics implemented are
                        manhattan distance and misplaced tiles.
                    </ProjectDescription>
                    <ProjectLinks>
                        <ProjectLink
                            href="https://github.com/malikaiyer/8-puzzle-solver.git"
                            target="_blank"
                        >
                            GitHub
                        </ProjectLink>
                    </ProjectLinks>
                </ProjectDetails>
                {/* <ProjectImage src={projNearbyeats} alt="Project Image" /> */}
            </ProjectContainer>

            <ProjectContainer>
                <ProjectDetails>
                    <ProjectTitle>AccessiTech</ProjectTitle>
                    <ProjectDescription>
                        My team&apos;s submission to the HenHacks 2024
                        Hackathon. AccessiTech is a web application coded using
                        TypeScript, Styled Components, React and Bootstrap. It
                        uses a map API to display accessible locations in the
                        user&apos;s area and also features a chat feature to
                        connect users with disabilities to others who can help
                        or provide support in their area. We won the category of
                        best use of Smalltalk.
                    </ProjectDescription>
                    <ProjectLinks>
                        <ProjectLink
                            href="https://github.com/smoshy314/henhacks2024"
                            target="_blank"
                        >
                            GitHub
                        </ProjectLink>
                        <ProjectLink
                            href="https://smoshy314.github.io/henhacks2024/"
                            target="_blank"
                        >
                            Live Project
                        </ProjectLink>
                    </ProjectLinks>
                </ProjectDetails>
                <ProjectImage src={projaccessitech} alt="Project Image" />
            </ProjectContainer>
        </div>
    );
}

export default ProjectContainerCode;
