import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

export default function ComTwo() {
    const count = useSelector((state) => state.counter.value)
    const owner = useSelector((state) => state.creator.creator)
return (
        <div>
            <h2 className='text-center'>This is Component 2</h2>
            <p>The State Vaalue Is : {count}</p>
            <p>Owner Is :{owner}</p>
     
        </div>
    )
}
