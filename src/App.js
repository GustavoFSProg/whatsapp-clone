import React from 'react'
// import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import Login from './components/login'
import useLocalStorage from './hooks/useLocalStorage'
import Dashboard from './components/Dashboard'
import { ContactsProvider } from './contexts/ContactsProvider'

function App() {
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  )

  return id ? dashboard : <Login onIdSubmit={setId} />
}
export default App
