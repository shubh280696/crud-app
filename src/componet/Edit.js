// import axios from 'axios'
// import React, { useEffect, useState} from 'react'
// import { Link,useNavigate } from 'react-router-dom'

// function Edit() {
//     const [id, setId] = useState(0)
//     const [name, setName] = useState('')
//     const [age, setAge] = useState('')
//     const [gmail, setGmail] = useState('')

//     const navigate = useNavigate();
//     useEffect(() => {
//         setId(localStorage.getItem('id'))
//         setName(localStorage.getItem('name'))
//         setAge(localStorage.getItem('age'))
//         setGmail(localStorage.getItem('gmail'))
//     }, [])

//     const HandleUpdate = (e) => {
//         e.preventDefault();
//         axios.put(`https://66715560e083e62ee43b1e15.mockapi.io/crud/${id}`,{
//         e_name: name,
//         e_age: age,
//         e_gmail: gmail
//     }).then(()=>{
//         navigate('/'); 
//     })

//     }
//     return (
//         <>
//             <div className='app'>
//                 <div className='row text-center my-md-5 '>
//                     <div className='col-md-4'>
//                         <div className='mb-2 mt-2'>

//                             <Link to='/'>
//                                 <button className='btn btn-primary'>Read-data</button>
//                             </Link>
//                         </div>
//                         <div className=' p-4 bg-info     text-center'>
//                             <h1>update-data</h1>
//                         </div>
//                         <form onSubmit={HandleUpdate}>
//                             <div className='form-group'>
//                                 <label>Enter Name:</label>
//                                 <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='form-control' />
//                             </div>
//                             <div className='from-group'>
//                                 <label>Enter age:</label>
//                                 <input type='number' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' className='form-control' />

//                             </div>
//                             <div className='from-group'>
//                                 <label>Enter Email:</label>
//                                 <input type='text' value={gmail} onChange={(e) => setGmail(e.target.value)} placeholder='Email' className='form-control' />
//                             </div>
//                             <br />
//                             <div className='d-grid'>
//                                 <input type='submit' value='update' className='btn btn-info' />
//                             </div>
//                         </form>

//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Edit

// ===============================fetch use============================

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Edit() {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gmail, setGmail] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setGmail(localStorage.getItem('gmail'));
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();

        fetch(`https://66715560e083e62ee43b1e15.mockapi.io/crud/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                e_name: name,
                e_age: age,
                e_gmail: gmail,
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Update successful:', data);
            navigate('/');
        })
        .catch(error => {
            console.error('Error updating data:', error);
            // Handle error appropriately, e.g., show error message to the user
        });
    };

    return (
        <div className='app'>
            <div className='row text-center my-md-5 '>
                <div className='col-md-4'>
                  
                    <div className='p-4 bg-info-subtle text-center'>
                        <h1>Update Data</h1>
                        <Link to='/'>
                            <button className='btn border-dark'>Read Data</button>
                        </Link>
                    </div>
                    <form onSubmit={handleUpdate}>
                        <div className='form-group'>
                            <label htmlFor='name-enter'>Enter Name:</label>
                            <input
                            id='name-enter'
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Name'
                                className='form-control'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='age-num'>Enter Age:</label>
                            <input
                            id='age-num'
                                type='number'
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                placeholder='Age'
                                className='form-control'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='gmail-enter'>Enter Email:</label>
                            <input
                                type='text'
                                id='gmail-enter'
                                value={gmail}
                                onChange={(e) => setGmail(e.target.value)}
                                placeholder='Email'
                                className='form-control'
                            />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type='submit' value='Update' className='btn bg-info-subtle' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Edit;
