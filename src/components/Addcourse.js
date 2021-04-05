import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const Addcourse =()=>{

    const [course, setCourses]= useState({});

    const FormHandler=(e)=>{
        console.log(course);
        DataToServer(course);
        e.preventDefault();
    }

    const DataToServer=(data)=>{
        axios.post('http://localhost:8080/course', data).then(
            (response)=>{
                console.log(response);
                console.log("Success..")
            },
            (error)=>{
                console.log(error);
                console.log("Error Occures");
            }
        )
    }

    return (
        <div>
            <h1>Fill Course Details</h1>
            <Form className="mt-5" onSubmit={FormHandler}>
                <FormGroup>
                <Label for="Course Id">Course ID</Label>
                <Input type="text" name="id" id="courseId" placeholder="CourseID" onChange={(e)=>{
                    setCourses({...course, id: e.target.value});
                }}/>
                </FormGroup>
                <FormGroup>
                <Label for="Course Name">Course Name</Label>
                <Input type="text" name="name" id="name" placeholder="Course Name" onChange={(e)=>{
                    setCourses({...course, name : e.target.value});
                }}/>
                </FormGroup>
                <FormGroup>
                <Label for="exampleDescription">Description</Label>
                <Input type="textarea" name="decription" id="decription" placeholder="Description" onChange={(e)=>{
                   setCourses({...course, decription:e.target.value})
                }} />
                </FormGroup>
                <Container>
                    <Button color="info" onChange={FormHandler}>Add Course</Button>
                </Container>
            </Form>
        </div>
    )
}

export default Addcourse;