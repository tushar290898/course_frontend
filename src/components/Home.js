import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

const Home =()=>{
    return (
        <div>
           <Jumbotron>
               <h1 className="display-3">Hello Students!</h1>
               <p className="lead">This is java and react fullstack application for store and maintain your courses</p>
               <hr className="my-2"/>
               <Container>
               <Button color="info" className="mt-2">Let's Start</Button>
                </Container>
           </Jumbotron>
        </div>
    )
}

export default Home;