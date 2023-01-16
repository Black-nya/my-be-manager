import { useAppSelector, useAppDispatch } from "@/hooks"
import { decrement, increment,incrementByAmount } from '@/features/counter'
const View = () => {
    const dispatch = useAppDispatch()
    const count = useAppSelector((state) => state.counter.value)
    // decrement is a function of action generator
    // decrement() is an object: {type:, payload:}
    // dispatch({type:, payload})=> increment(state, {type:, payload})

    return (
        <div className="home">
            <p>This is Page1.</p>
            <p>{count}</p>
            <button onClick={()=>dispatch(increment())}>Add1</button>
            <button onClick={()=>dispatch(decrement())}>Dec1</button>
            <button onClick={()=>setTimeout(()=>{dispatch(incrementByAmount(51))},1000)}>Addby</button>
        </div>
    )
}
export default View