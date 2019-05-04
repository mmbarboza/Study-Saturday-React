import React from 'react';

// export default class StudentList extends React.Component{
//   constructor(){
//     super()

//   }
// }

const StudentList = (props) => {
  const students = props.students;


  return (

    <tbody>
      <td>
        <th>Name</th>
      {
        students.map(student => (
          <tr key={student.id} >{student.firstName} {student.lastName}</tr>
        ))
      }
      </td>
    </tbody>
  );
};


export default StudentList;
