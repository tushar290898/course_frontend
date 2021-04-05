import React, {useState, useEffect} from 'react';
import Course from './Course'
import axios from 'axios'



const Allcourses = ()=>{

    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/courses').then(
            (response)=>{
            console.log(response.data);
            setCourses(response.data);
        },
        (error)=>{
            console.log(error);
        }
        );
     
    }, []);

     

     const UpdateDelete=(id)=>{
        setCourses(courses.filter((c)=>c.id != id));
     };

   

    return(
        <div>
                <h1>All Course</h1>
                {
                    courses.length>0?courses.map((item)=><Course key={item.id} course={item} update={UpdateDelete}/>)
                    :"No Courses Available"
                }
        </div>
    )
}

export default Allcourses;