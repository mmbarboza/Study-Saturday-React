import React from 'react';
import axios from 'axios';
import StudentList from './StudentList';

export default class Main extends React.Component{
  constructor(){
    super();
    this.state = {
      students: [],
      selectedStudent: {}
    };

  }
  async componentDidMount(){
    const {data} = await axios.get('/student');
    this.setState({
      students: data
    });
  }

  render() {
    //need an if statement or a ternary to check for the inital render
    if (this.state.students.length > 0){
      return (
        <div id="main" className='table'>
        <h1>Students</h1>
          <div className='container'>
          <StudentList students={this.state.students} />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
