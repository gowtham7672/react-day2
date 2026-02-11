import {useState} from "react";

function App(){
  const [count,setCount] = useState(0);

  function increase(){
    setCount(count+1);
  }

  function decrease(){
    if(count<=0){
      setCount(count-1);
    }
    setCount(count-1);
  }

  function reset(){
    setCount(0);
  }
  return (
    <div className="container">
      <h1 className={count>10?"high":"normal"}>{count}</h1>
      <div className="buttons">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
      {count===0 && <p>Start counting</p>}
      {count>0 && count<=10 && <p>Keep going</p>}
      {count<0 && <p>Try to improve your score</p>}
      {count>10 && <p>High score</p>}
    </div>
  );
}

export default App;