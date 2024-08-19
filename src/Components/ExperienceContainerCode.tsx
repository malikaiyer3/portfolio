/* eslint-disable no-extra-parens */
/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";

const ExperienceContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    /*background-color: #f8f9fa;*/
`;

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 20px;
    border-radius: 10px;
    background-color: #333;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.19);
`;

const ProjectTitle = styled.h3`
    font-size: 1.8rem;
    color: #fff;
    margin-bottom: 10px;
`;

const ProjectDescription = styled.div`
    color: #ddd;
    font-size: 1rem;
    line-height: 1.6;
`;

const ExperienceList = styled.ul`
    list-style-type: disc;
    padding-left: 20px;
`;

const ExperienceItem = styled.li`
    margin-bottom: 10px;
    font-size: 1rem;
`;

function ExperienceContainer() {
    return (
        <ExperienceContainerWrapper>
            <ProjectContainer>
                <ProjectTitle>
                    Software Engineering Intern at Mindsprint
                </ProjectTitle>
                <ProjectDescription>
                    <ExperienceList>
                        <ExperienceItem>
                            Engineered an advanced Python solution leveraging
                            LangChain and GPT-4 LLM to efficiently translate
                            Excel documents into multiple languages, ensuring
                            the retention of original formatting and complex
                            formulae integrity.
                        </ExperienceItem>
                        <ExperienceItem>
                            Conducted an in-depth analysis of company attrition
                            and learning rates using Python Pandas, resulting in
                            actionable insights that drove strategic policy
                            reforms, enhancing the company&apos;s learning and
                            development initiatives.
                        </ExperienceItem>
                        <ExperienceItem>
                            Researched and developed an image inpainting
                            solution utilizing stable diffusion algorithms to
                            accurately reconstruct blurred or masked regions in
                            images, significantly improving the identification
                            of crop diseases from visual data.
                        </ExperienceItem>
                    </ExperienceList>
                </ProjectDescription>
            </ProjectContainer>
        </ExperienceContainerWrapper>
    );
}

export default ExperienceContainer;
