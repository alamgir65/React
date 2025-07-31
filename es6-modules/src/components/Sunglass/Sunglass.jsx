
// import add from '../Utils/calculator';
import { add, multiply } from '../Utils/calculator';
import './sunglass.css';

const Sunglass = () => {

    // const sum = add(5, 10);
    const mult = multiply(10,20);


    return (
        <div>
            <h2>This is Sunglass Component.</h2>
            <h3>Sum: {add(100,200)}</h3>
            <h3>Multiply: {mult}</h3>
        </div>
    );
};

export default Sunglass;