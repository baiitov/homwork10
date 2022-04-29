import React, { useState } from 'react';

const ExpenseObj = () => {
    const [state, setState] = useState({})
    const titleHandler=(e)=>{
        setState({
            title: e.target.value
        })
    }
    const inputHandler=(e)=>{
        setState({
            input: e.target.value
        })
    }
    const valueHandler=(e)=>{
        setState({
            value: e.target.value
        })
    }

    console.log(state);
    return (
        <div>
            <input onChange={titleHandler} type="text" />
            <input onChange={inputHandler} type="text" name="" id="" />
            <input onChange={valueHandler} type="text" name="" id="" />
        </div>
    );
};

export default ExpenseObj;