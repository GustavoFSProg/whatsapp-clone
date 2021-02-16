import React from 'react'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import Login from './components/login'
import useLocalStorage from './hooks/useLocalStorage'
import Dashboard from './components/Dashboard'

function App() {
  const [id, setId] = useLocalStorage('id')

  return id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />
}
export default App
