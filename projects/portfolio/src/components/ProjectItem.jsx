import React from 'react';
import { Badge, Card, Stack } from 'react-bootstrap';

const ProjectItem = ({project}) => {
    const {title, description, techs} = project;

    return (
        <Card className="projects__item">
            <Card.Header>
                <Stack direction="horizontal" gap={2}>
                    {techs.map((tech, index) => (<Badge key={index} pill bg="primary">{tech}</Badge>))}
                </Stack>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    )
};

export default ProjectItem;