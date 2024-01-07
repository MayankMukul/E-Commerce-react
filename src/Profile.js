import React from 'react'

export default function Profile() {

    const handleClick=(e)=>{
        e.preventDefault();
        console.log("clicked");
    }
  return (
    <div className="container m-auto bg-stone-100 p-4">
      <div>
        <h2 class="text-3xl font-bold text-center">Profile Section</h2>
      </div>
      <div className='text-center '>

        <form className="flex-row text-center bg-slate-100 w-1/3 mx-auto my-2  border-4 rounded-lg">
            <h1 className='w-full bg-black text-white rounded p-2'>Profile</h1>
          <div className='m-2'>
            <label htmlFor='name' >Name </label>
            <input id='name' className="m-1 p-1 rounded " />
          </div>
          <div className='m-2'>
            <label htmlFor='email'>Email Id </label>
            <input id='email' className="m-1 p-1 rounded " />
          </div>
          <button className="bg-black hover:bg-gray-600 text-white p-1 rounded" onClick={(event)=>handleClick(event)}>SignUp</button>
        </form>
      </div>
      
    </div>
  );
}
