import React from 'react'
import { useNavigate } from 'react-router-dom';

const Professor = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/professor/success');
  };

  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Create Class</h1>
      <form className='flex flex-col items-center'>
        <input
          type='text'
          placeholder='Class Name'
          className='w-64 p-2 my-4'
          style={{
            backgroundColor: "#FFFFFF",
            border: "none",
            color: "#000000",
            fontSize: "16px",
            padding: "12px 24px",
            margin: "5px",
            borderRadius: "14px",
            borderStyle: "solid",
          }}
        />
        <br />
        <input
          type='number'
          placeholder='Max Group Size'
          className='w-64 p-2 my-4'
          style={{
            backgroundColor: "#FFFFFF",
            border: "none",
            color: "#000000",
            fontSize: "16px",
            padding: "12px 24px",
            margin: "5px",
            borderRadius: "14px",
            borderStyle: "solid",
          }}
        />
        <br />
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded'
          style={{
            backgroundColor: "#000000",
            border: "none",
            color: "#FFFFFF",
            fontSize: "16px",
            padding: "8px 24px",
            margin: "5px",
            borderRadius: "14px",
            borderStyle: "solid",
            width:"135px"
          }}
          onClick={handleNextClick}
        >
          NEXT
        </button>
      </form>
    </div>
  )
}

export default Professor
