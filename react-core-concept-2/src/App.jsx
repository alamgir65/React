import './App.css'
import Counter from './Counter';
import Users from './Users';

function App() {
  function handleClick1(){
    alert('Button - 1 clicked.');
  }
  const handleClick3 = () => {
    alert('Button 3 clicked');
  }
  function handleAddFive(num){
    alert(num+5);
  }

  return (
    <>
      <h2>React core concept explore</h2>
      <Users></Users>
      <div className='container'>
          <h3 style={{margin: '10px', color: 'salmon'}}>Explore event handler</h3>
          <button onClick={handleClick1}>Button - 1</button>
          <button onClick={() => alert('Button -2 clicked!')}>Button 2</button>
          <button onClick={handleClick3}>Button - 3</button>
          <button onClick={()=>handleAddFive(111)}>Button - 4</button>
      </div>
      <div>
        <Counter></Counter>
      </div>
    </>
  )
}

export default App
