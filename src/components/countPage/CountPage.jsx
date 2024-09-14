import { useDispatch, useSelector } from "react-redux"



const CountPage = () => {

    const count = useSelector(state => state.count)
    const dispatch = useDispatch()


    const add = () => {
        dispatch({
            type: 'ADD',
            payload: 1
        })
    }

    const subtract = () => {
        dispatch({
            type: 'SUBTRACT',
            payload: 1
        })
    }

    const add10 = () => {
        dispatch({
            type: 'ADD10',
            payload: 10
        })
    }

    const subtract10 = () => {
        dispatch({
            type: 'SUBTRACT10',
            payload: 10
        })
    }

    const reset = () => {
        dispatch({
            type: 'RESET',
            payload: 10
        })
    }


    return(
        <div>
            <h1>{count}</h1>
            <button onClick={add}>add</button><br /><br />
            <button onClick={subtract}>subtract</button><br /><br />
            <button onClick={add10}>add 10</button><br /><br />
            <button onClick={subtract10}>subtract 10</button><br /><br />
            <button onClick={reset}>reset</button><br /><br />

        </div>
    )
}

export default CountPage;