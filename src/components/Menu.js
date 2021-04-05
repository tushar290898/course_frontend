import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Menu = ()=>{
    return(
        <div>
            <ListGroup>
                <ListGroupItem tag="a" href="/" action>Home</ListGroupItem>
                <ListGroupItem tag="a" href="/Addcourse" action>Add Course</ListGroupItem>
                <ListGroupItem tag="a" href="/Allcourse" action>View Courses</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>About</ListGroupItem>
                <ListGroupItem tag="a" href="#" action>Contanct Us</ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default Menu;