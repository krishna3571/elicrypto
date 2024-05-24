import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function Game() {

    const location = useLocation();
    const data = location.state;

    useEffect(() => {
        console.log(data)
    }, [])


    return (

        <>
            <iframe seamless="seamless" allowtransparency="true" allowfullscreen="true" frameborder="0" style={{ width: '100%', height: '100vh', border: '0px' }} src={data.gUrl}> </iframe>
        </>


    )
}
