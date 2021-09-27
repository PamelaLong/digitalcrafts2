import React, { useState } from "react";

export default function FunctioinalComponent () {
    const [counter,setCounter] = useState(0);
    const [studentName, setStudentName] = useState ("Pamela");

        return (
            <div>
                <p>Functional Counter</p>
                <p>Counter is : {couter}</p>
                <p>Student name : {studentName}</p>
                <button onClick={() => setCounter(counter + 1)}>Increase</button>
                <button onClick={() => setCounter(counter - 1)}>Decrease</button>
                <button onClick={() => setStudentName("Bernie")}>Change the Student{""}</button>
            </div>
        );
    };