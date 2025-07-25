import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo.jsx'
import Actor from './Actor.jsx'

function App() {
  const actors = ['Sakib Khan','Manna the Hero','Bapparaj'];
  return (
    <>
      <Actor name="Salman Shah"></Actor>



      <div className='student'>
        <h1>Actor list : </h1>
        {
          actors.map(actor => <Actor name={actor}></Actor>)
        }
      </div>


      
      <h1>Vite + React</h1>
      <Todo task="Javascript" isDone={true} ></Todo>
      <Todo task="React" isDone={false} ></Todo>
      {/* <Student></Student>
      <Alamgir></Alamgir> */}
      <WithVariable name="Ayat Rohman" relation="In a Relationship"></WithVariable>
      <WithVariable name="Drubo" relation="Single" salary="70000"></WithVariable>

      <Just name="Macbook" price="147000" ></Just>
      <Just name="i phone 16 pro max" price="247000" ></Just>
    </>
  )
}

function WithVariable(props){
  return (
    <>
        <div>
            <h1>My name is : {props.name}.</h1>
            <h3>Relationship Status : {props.relation}</h3>
            <p>Salary : {props.salary}</p>
        </div>
    </>
  )
}

function Student(){
    const student = {name : 'Alamgir Hossain', class : 'BSc', dept : "Computer Science and Engineering"};
  return (
    <div className='student'>
      <h1>My name is {student.name}</h1>
      <h3>Currently pursuing a {student.class} degree in {student.dept} </h3>
    </div>
  )
}


function Just({name,price}){
  return (
    <>
        <div className='student'>
            <h1>Product Name : {name} </h1>
            <p>Product Price : {price} </p>
        </div>
    </>
  )
}

function Alamgir(){
  const styleDeyarChesta = {
    padding : '20px',
    borderRadius : '20px',
    backgroundColor : 'purple',
    color : 'white',
    marginTop : '20px'
  };
  return (
    <>
        <div style={styleDeyarChesta}>
            <h1>One side name : Fayeza Akter.</h1>
            <h4>Baler pora lekha kori kono seriousness nai.</h4>
        </div>
    </>
  )
}



export default App
