import { useState } from 'react'
import './App.css'
export default function Counter(){
    const [set,reSet] = useState(0);
    const handleAdd = ()=>{
        const newValue = set+1;
        reSet(newValue);
    }

    return (
        <>
            <div className='container'>
                <h1 className='title'>Explore State</h1>
                <h3>Counter : {set}</h3>
                <br />
                <button onClick={handleAdd}>Increase</button>
                <button onClick={()=>{reSet(set-1)}}>Decrease</button>
            </div>
        </>
    )
};;