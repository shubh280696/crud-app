import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Read() {
    const [apidata, setApidata] = useState([])
    function getData() {
        axios.get('https://66715560e083e62ee43b1e15.mockapi.io/crud')
            .then((response) => {
                setApidata(response.data)
            })
    }
    function HandleDelete(id) {
        axios.delete(`https://66715560e083e62ee43b1e15.mockapi.io/crud/${id}`)
            .then(() => {
                getData();
            })
    }
    function setDataToStorage(id, name, age, gmail) {

        localStorage.setItem('id', id)
        localStorage.setItem('name', name)
        localStorage.setItem('age', age)
        localStorage.setItem('gmail', gmail)
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='mb-2 mt-2 '>

                        <Link to='./create'>
                            <button className='btn btn-primary'>Create-new-data</button>
                        </Link>
                    </div>
                    <table className='table table-striped  table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>GMAIL</th>
                                <th>EDIT</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                apidata.map((item) => {

                                    return (
                                        <>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.e_name}</td>
                                                <td>{item.e_age}</td>
                                                <td>{item.e_gmail}</td>
                                                <td>
                                                    <Link to='/edit'>
                                                        <button className='btn btn-primary'
                                                            onClick={() => setDataToStorage(item.id, item.e_name, item.e_age, item.e_gmail)}
                                                        >EDIT</button>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={() => HandleDelete(item.id)}>DELETE</button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Read