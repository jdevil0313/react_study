import React from 'react';

const students = [
    {id:1, name: "Inje"},
    {id:2, name: "steve"},
    {id:3, name: "Bill"},
    {id:4, name: "Jeft"},
]

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={`student-id-${student.id}`}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;