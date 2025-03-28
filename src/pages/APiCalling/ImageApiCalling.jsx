import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ImageApiCalling = () => {
    let [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            const resp = await axios.get('https://fakestoreapi.com/products')
            const data = resp.data
            setList(data);
            setLoading(false);
            // console.log(data)
        } catch (error) {

        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div>
                {loading && <div className='d-flex justify-content-center mt-4'>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>
                                    <a href={item.image} target="_blank" rel="noopener noreferrer">
                                        <img src={item.image} alt="Image" width="50" />
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ImageApiCalling
