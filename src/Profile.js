import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProfileEmail, setProfileUsername } from './profileSlice';

export default function Profile() {
    const [profileName, setprofileName]=useState('');
    const [profileEmail, setprofileEmail]= useState('');
    const profile = useSelector(store => store.profile.items);
    const dispatch = useDispatch();

    const [showModal, setModal] = useState(false);

    const handleModal = ()=>{
      setModal(!showModal)
    }

    const handleClick=(e)=>{
      e.preventDefault();
        dispatch(setProfileUsername(profileName));
        dispatch(setProfileEmail(profileEmail));
        handleModal();
      }


  return (
    <div className="container m-auto bg-stone-100 p-4">
      <div>
        <h2 className="text-3xl font-bold text-center">Profile Section</h2>
      </div>
      <div className="text-center flex max-md:flex-col max-md: justify-center ">
        <div className="m-2 bg-stone-300 w-1/3 max-md:w-11/12 border-4 rounded max-md:self-center">
          <h1 className="w-full bg-black text-white rounded p-2 ">User Info</h1>
          <h1>Name : {profile.username} </h1>
          <h1>Email : {profile.email}</h1>
        </div>

        <form
          className=" text-center bg-slate-100 w-1/3 max-md:w-11/12 my-2 max-md:self-center  border-4 rounded-lg"
          onSubmit={(event) => {
            handleClick(event);
            return false;
          }}
        >
          <h1 className="w-full bg-black text-white rounded p-2">Profile</h1>
          <div className="m-2">
            <label htmlFor="name">Name </label>
            <input
              id="name"
              className="m-1 p-1 rounded w-2/3 max-sm:w-3/5"
              value={profileName}
              placeholder="Enter Name here..."
              required
              onChange={(e) => {
                setprofileName(e.target.value);
              }}
            />
          </div>
          <div className="m-2">
            <label htmlFor="email">Email Id </label>
            <input
              id="email"
              className="m-1 p-1 rounded w-2/3 max-sm:w-3/5"
              value={profileEmail}
              placeholder="Enter Email here..."
              required
              onChange={(e) => {
                setprofileEmail(e.target.value);
              }}
            />
          </div>
          <input
            type="submit"
            value="SignUp"
            className="bg-black hover:bg-gray-600 text-white p-1 m-2 rounded"
          />
        </form>
      </div>

      {showModal ? (
        <div className="fixed top-0 left-0 w-full h-full  bg-black bg-opacity-70 p-5  ">
          <div className=" m-auto  bg-white w-1/3 max-sm:w-5/6  rounded shadow-lg text-center">
            <h1 className="bg-black text-white p-2 rounded">
              Signed Up Successfully!
            </h1>
            <div className="m-2 ">
              <h1>Name : {profile.username} </h1>
              <h1>Email : {profile.email}</h1>
            </div>
            <button
              className="bg-black text-white rounded p-1 m-2 "
              onClick={() => handleModal()}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
