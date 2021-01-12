import React, { useEffect } from 'react'
import axios from 'axios';

function LoginPage() {
    useEffect(() => {    
        axios.get('http://localhost:5000/api/hello').then(response => console.log(response.data));
    }, [])
    return (
        <div>
            LoginPage
        </div>
    )
}

export default LoginPage
