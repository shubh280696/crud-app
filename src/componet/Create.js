// import React, { useState } from 'react'
// import axios from 'axios'
// import {  useNavigate ,Link } from 'react-router-dom'

// function Create() {
//     const [name, setName] = useState('')
//     const [age, setAge] = useState('')
//     const [gmail, setGmail] = useState('')

//     const navigate = useNavigate();
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('https://66715560e083e62ee43b1e15.mockapi.io/crud', {
//             e_name: name,
//             e_age: age,
//             e_gmail: gmail
//         }).then(() => {
//             navigate('/')
//         })
//     }
//     return (
//         <>
//             <div className='app'>
//                 <div className='row'>
//                     <div className='col-md-4 my-5 m-5'>
//                         <div className='bg-info p-4 text-center my-2'>
//                             <h1> Create-Data</h1>
//                             <Link to='/'>
//                                 <button className='btn border-danger'>Read-data</button>
//                             </Link>
//                         </div>
//                         <form onSubmit={handleSubmit}>
//                             <div className='form-group'>
//                                 <label>Enter Name:</label>
//                                 <input type='text' placeholder='Name' className='form-control' onChange={(e) => setName(e.target.value)} />
//                             </div>
//                             <div className='form-group'>
//                                 <label>Enter Age:</label>
//                                 <input type='number' placeholder='Age' className='form-control' onChange={(e) => setAge(e.target.value)} />
//                             </div>
//                             <div className='form-group'>
//                                 <label>Enter Gmail:</label>
//                                 <input type='text' placeholder='Gmail' className='form-control' onChange={(e) => setGmail(e.target.value)} />
//                             </div>
//                             <div className='d-grid my-2'>
//                                 <input type='submit' value='Submit' className='btn btn-info' />
//                             </div>
//                         </form>
                      
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default Create



import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Create() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gmail, setGmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                e_name: name,
                e_age: age,
                e_gmail: gmail
            })
        };

        fetch('https://66715560e083e62ee43b1e15.mockapi.io/crud', requestOptions)
            .then(response => response.json())
            .then(() => {
                navigate('/');
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <>
            <div className='app'>
                <div className='row'>
                    <div className='col-md-4 my-5 m-5'>
                        <div className='  bg-danger-subtle p-4 text-center my-2'>
                            <h1> Create-Data</h1>
                            <Link to='/'>
                                <button className='btn border-danger'>Read-data</button>
                            </Link>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label>Enter Name:</label>
                                <input type='text' placeholder='Name' className='form-control' onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='form-group'>
                                <label>Enter Age:</label>
                                <input type='number' placeholder='Age' className='form-control' onChange={(e) => setAge(e.target.value)} />
                            </div>
                            <div className='form-group'>
                                <label>Enter Gmail:</label>
                                <input type='text' placeholder='Gmail' className='form-control' onChange={(e) => setGmail(e.target.value)} />
                            </div>
                            <div className='d-grid my-2'>
                                <input type='submit' value='Submit' className='btn btn-danger' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Create;
