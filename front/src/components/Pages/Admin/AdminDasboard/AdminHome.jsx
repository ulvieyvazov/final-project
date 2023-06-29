import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Admin from '.'

const AdminHome = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        const res = await axios.get("http://localhost:5050/products")
        setData(res.data)
    }
    const [dataor, setDataor] = useState([])

    const getDataor = async () => {
        const res = await axios.get("http://localhost:9090/billing")
        setDataor(res.data)
    }

    const [datac, setDatac] = useState([])
    const getDatac = async () => {
        const res = await axios.get("http://localhost:1000/comment")
        setDatac(res.data)
    }

    useEffect(() => {
        getDatac()
    }, [])



    const [datam, setDatam] = useState([])
    const getDatam = async () => {
        const res = await axios.get("http://localhost:1000/comment")
        setDatam(res.data)
    }

    useEffect(() => {
        getDatam()
    }, [])
    


    const [datau, setDatau] = useState([])
    const getDatau = async () => {
        const res = await axios.get("http://localhost:8000/api/users/login")
        setDatau(res.data)
        console.log(res.data);
    }


    useEffect(() => {
        getDatau()
    }, [])

    const deleteData = async (id) => {
        await axios.delete(`http://localhost:9090/billing/${id}`);
        await getDataor();
    };

    useEffect(() => {
        getData()
    }, [])
    useEffect(() => {
        getDataor()
    }, [])

    return (
        <>
        <Admin/>
            <div style={{ width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
                <div className='admin-hom'>
                    <p>Total Products</p>
                    <h3>
                        {
                            data.length
                        }
                    </h3>
                </div>
                <div className='admin-hom'>
                    <p>Total order</p>
                    <h3>
                        {
                            dataor.length
                        }
                    </h3>
                </div>
                <div className='admin-hom'>
                    <p>Total comment</p>
                    <h3>
                        {
                            datac.length
                        }
                    </h3>
                </div>
                <div className='admin-hom'>
                    <p>Total users</p>
                    <h3>
                        {
                            datau.length
                        }
                    </h3>
                </div>
                <div className='admin-hom'>
                    <p>Total message</p>
                    <h3>
                        {
                            datam.length
                        }
                    </h3>
                </div>

                <div>
                    {
                        dataor.map((d) => (
                            <div>
                                <p>{d.lname}</p>
                                <button onClick={() => deleteData(d._id)}>delete</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AdminHome
