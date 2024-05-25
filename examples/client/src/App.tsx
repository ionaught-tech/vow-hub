import { useEffect, useState } from 'react'
import './App.css'
import { UsersResponse } from "../../server/src/Types/api-contract"

function App() {
  const [count, setCount] = useState(0);

  const getUser = async () => {
    const res: UsersResponse = await fetch("http://localhost:5000/api/v1").then(res => res.json());

    console.log(res.data);

  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
