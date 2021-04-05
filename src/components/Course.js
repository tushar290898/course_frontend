import axios from 'axios';
import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Button, Container
  } from 'reactstrap';

const Course=({course, update})=>{    
    
    const deleteCourse=(id)=>{
        axios.delete(`http://localhost:8080/course/${id}`).then(
            (response)=>{
                console.log(response);
                console.log("Deleted");
                update(id);
            },
            (error)=>{
                console.log(error);
                console.log("Something went wrong!");
            }

        )
    }
    
    return(
        <div className="mt-5">
            <Card>
                <CardBody>
                <CardTitle tag="h5">{course.name}</CardTitle>
                <CardText>{course.decription}</CardText>
                <Container>
                <Button color="info" className="mr-2">Update Course</Button>
                <Button color="danger" onClick={()=>{
                    deleteCourse(course.id);
                }}>Delete</Button>
                </Container>
                
               
    
                </CardBody>
            </Card>
        </div>
    )
}

export default Course;