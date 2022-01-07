import React from 'react'
import ComOne from './components/ComOne';
import ComTwo from './components/ComTwo';
import ComThree from './components/ComThree';
export default function App() {
  return (
    <div className='container'>
      <h1 className='text-center pt-5'>This is Redux Example Using Redux Toolkit</h1>
      <div className='row mb-5'>
        <div className='col-md-4'>
        <ComOne name="propsdata"/>
        </div>
        <div className='col-md-4'>
        <ComTwo />
        </div>
        <div className='col-md-4'>
        <ComThree />
        </div>
      </div>
    </div>
  )
}
