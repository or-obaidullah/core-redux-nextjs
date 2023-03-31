import { decrementCounterAction, incrementCounterAction, resetCounterAction } from "@/services/actions/counterActions";
import { useSelector,useDispatch } from "react-redux";

const Index = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch();

    const handleIncrement = () =>{
        dispatch(incrementCounterAction())
    }

    const handleDecrement = () => {
        dispatch(decrementCounterAction())
    }
    const handleReset = () => {
dispatch(resetCounterAction())
    }



    return (
        <div>
            <h1>Welcome to Redux</h1>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>RESET</button>

        </div>
    );
};

export default Index;