import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const PrivateRoute = (props) => {

    const [content,setContent] = useState("soop")

    const sessionToken = window.localStorage.getItem("sessionToken");
    const userId = window.localStorage.getItem("userId")

    let navigate = useNavigate()

    useEffect(()=> {
        // Short circuit
        window.localStorage.setItem("valid", true)
        setContent(window.localStorage.getItem("valid") == 'true' ? props.element : navigate('/'))
    }, [])
    

    return (
        <div>
            {content}
        </div>
    );
}

export default PrivateRoute;
