import React from 'react';
import ProjectItem from '../components/ProjectItem';
import Category from '../data/category';
import companies from '../data/companies';
import projectData from '../data/projectData';

// Post-presentation additions: Added in order to easily group projects.
const projectsInEmployment = projectData
    .filter(({category}) => category === Category.EMPLOYMENT)
    .reduce((projects, project) => {
        if (!projects.has(project.company)) {
            projects.set(project.company, [project]);
        } else {
            let projectsPerCompany = projects.get(project.company);
            projectsPerCompany.push(project);
            projects.set(project.company, projectsPerCompany);
        }
        return projects;
    }, new Map());

const projectsInTraining = projectData
    .filter(({category}) => category === Category.TRAINING);

const Projects = () => {
    return (
        <>
            <h1>Projects</h1>
            <h2>On-the-job</h2>
            <p>Projects worked on during employment</p>
            {
                companies.sort((a, b) => a.dateStarted - b.dateStarted).map(company => (
                    <div className="company-container" key={company.id}>
                        <h3>{company.name}</h3>
                        <h4>{`${company.dateStarted.getMonth() + 1}/${company.dateStarted.getFullYear()} - ${ company.dateEnded ? `${company.dateEnded.getMonth() + 1}/${company.dateEnded.getFullYear()}` : 'Present' }`}</h4>
                        <div className="projects-in-company">
                        {
                        projectsInEmployment.get(company.id).map((projectItem, index) => (
                            <ProjectItem key={index} project={projectItem}/>
                        ))
                        }
                        </div>
                    </div>
                ))
            }

            <h2>Training-related</h2>
            <p>These are projects related to training programs, such as bootcamps or workshops, that were accomplished, or are in progress.</p>
            <div className="training-container">
                {
                    projectsInTraining.length === 0 ? <p>Coming soon!</p> : projectsInTraining.map((projectItem, index) => (
                        <ProjectItem key={index} project={projectItem}/>
                    ))
                }
            </div>
        </>
    )
};

export default Projects;