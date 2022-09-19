import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Authorize = ({children}) => {
  
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))
    

    if(currentUser === null){
        Swal.fire({
            icon : 'error',
            title : 'Error',
            text : 'You need to login'
        })
        return <Navigate to='/main/login' />
    }

    return children
}

export default Authorize