import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../app/features/counter/counterSlice';
import{changeCreator} from '../app/features/creator/creatorSlice'
export default function ComThree() {
    const dispatch = useDispatch()
    return (
        <div>
            <h2 className='text-center'>This is Component 3</h2>
            <button className='btn btn-outline-success' onClick={() => dispatch(increment())}>
            Update Store Value(+)
            </button>

<button className='btn btn-danger' onClick={()=>{
dispatch(changeCreator("New Creator"));
}}> Change Owner</button>

            
        </div>
    )
}
