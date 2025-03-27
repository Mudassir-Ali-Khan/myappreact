import React, { useEffect, useState } from 'react'
import axios from 'axios';

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const ApiCalling = () => {
  let [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    // try, catch
  // then, catch,
  // Callback
  try {
    setLoading(true);
    const resp = await axios.get('https://jsonplaceholder.typicode.com/todos')
    const data = resp.data
    console.log(data);
  //   todos = data;
    // await sleep(5000);
    setTodos(data);
    setLoading(false);
  } catch (error) {
      console.log(error);
  }
}

  useEffect(() => {
    getData();
  }, []);

  // todos.length == 0 show the loader (Not recommended, error)
  // state variable loading = false, true, false
 
  return (
    <div>
      {loading && <div className='d-flex justify-content-center mt-4'>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div> }
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed Status</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((item, index) => (
                    <tr key={index}>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.completed === true ? 'Completed' : 'Not Completed'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ApiCalling