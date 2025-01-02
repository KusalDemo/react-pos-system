import './App.css'
import {useDispatch, useSelector} from "react-redux";


function App() {

    let count = useSelector(state => state.count);
    let visibility = useSelector(state => state.visibility);

    const dispatch = useDispatch();

    return (
        <>
            {
                visibility ? <h1>{count}</h1> : <h1>.</h1>
            }
            <button onClick={()=> dispatch({type: 'INCREMENT'})}>Increment</button>
            <button onClick={()=> dispatch({type: 'DECREMENT'})}>Decrement</button>
            <button onClick={()=> dispatch({type: 'TOGGLE'})}>Toggle</button>
        </>
    )
}

export default App
