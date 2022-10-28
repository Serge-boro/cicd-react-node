import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  // const [userName, setUserName] = useState([])
  // const [infoServer, setInfoServer] = useState('')
  const [userName, setUserName] = useState([])

  const getNames = async () => {
    const { data } = await axios.get('/names')
    console.log(data)
  }

  // const sendData = async () => {
  //   const { data } = await axios.post('/api/v1/', {
  //     dataInfo: infoServer,
  //   })
  //   const { dataInfo } = data

  //   setUserName([...userName, dataInfo])
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   sendData()
  //   setInfoServer('')
  // }

  useEffect(() => {
    getNames()
  }, [])

  return (
    <div className='App'>
      {/* <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={infoServer}
          onChange={(e) => setInfoServer(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <lu>
        {userName.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </lu> */}
    </div>
  )
}

export default App
