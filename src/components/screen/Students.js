import React from 'react';
import { Link } from 'react-router-dom';



function Students() {

    const students = [
        {
            id:1,
            name:"Nadil"
        },
        {
            id:2,
            name:"Scott"
        },
        {
            id:3,
            name:"Styles"
        },
        {
            id:4,
            name:"Liam"
        },
    ];

    return (
        <div>
            {students.map((student) => (
                <>
                    <h3 key={student.id}>{student.name}</h3>
                    <Link to={`${student.name}`}>View</Link>      /**button click cheythal id select cheyth view aakum */
                </>
            ))}
        </div>
     );
}

export default Students;