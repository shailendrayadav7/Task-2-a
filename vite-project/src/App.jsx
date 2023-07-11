import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const students = [
    { name: "Samantha", age: 38, grades: [80,85,90] },
    { name: "Riley", age: 24, grades: [75, 85, 95] },
    {name: "Dall-E", age: 22, grades: [91, 92, 93] }
  ];

  function calculateAverageGrade(student){
    let sum = 0;
    const grades = student.grades;

    for (let i = 0; i < grades.length; i++){
      sum += grades[i];
    }
    return sum / grades.length;
  }

  function printStudentInfo(student){
    console.log('Student Name: ', student.name);
    console.log('Student Age: ', student.age);
    console.log('Average Grade: ', calculateAverageGrade(student));
  }

  printStudentInfo(students[1])

  return (
    <>
      <div>
       <h1>Student Information</h1>
       {students.map((student, index) => (
        <div key={index}>
          <h2>{student.name}</h2>
          <p>Age: {student.age}</p>
          <p>Average Grade: {calculateAverageGrade(student)}</p>
          </div>
       ))}
      </div>
      
    </>
  )
}

export default App
