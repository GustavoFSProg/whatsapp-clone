import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import React, { useState } from 'react'
import Login from '../components/login'

function App() {
  const [id, setId] = useState()

  return (
    <>
      {id}
      <Login onIdSubmit={setId} />
    </>
  )
}
export default App
