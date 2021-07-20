import React, { useEffect, useState } from 'react'
import Footer from './components/Footer'
import List from './components/List'
import Header from './components/Header'
import axios from 'axios'

const BASE_URL = "https://dummyapi.io/data/api"
const APP_ID = "60dee46c62f98882f0f78caf    "
function App() {
    const [contacts, setContacts] = useState({ data: [] })
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get(`${BASE_URL}/user?limit=5`, { headers: { "app-id": APP_ID } }).then(({ data }) => setContacts(data)).catch(console.error).finally(() => setLoading(false));
    }, []);
    return (
        <div>
            <Header />
            <List loading={loading} contacts={contacts} />
            <Footer />
        </div>
    )
}

export default App;