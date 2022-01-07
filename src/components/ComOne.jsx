import React,{useState}from 'react'

export default function ComOne(props) {
    const [data,setData]=useState(0);
    return (
        <div>
            <h2 className='text-center'>This is Component 1</h2>
            <p>This is Props Value <strong>{props.name}</strong></p>
            <p className='mt-4'>
                My Own State Value {data}
            </p>
            <button className='btn btn-outline-primary' onClick={()=>{
                setData(data+1)
            }}> increement My State Value</button>
        </div>
    )
}
