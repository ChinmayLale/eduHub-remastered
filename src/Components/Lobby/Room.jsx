import React, { useCallback, useEffect } from 'react'
import { useSocket } from '../Context/SocketProvider'

function Room() {

    const socket = useSocket();

    const handleUserJoined = useCallback(({email , id})=>{
        console.log(`The Person Joined The room = ${email} with Id = ${id}`);
    },[])


    useEffect(()=>{
        socket.on("user:joined" , handleUserJoined);

        return ()=>{
            socket.off("user:joined" , handleUserJoined);
        }
    },[socket , handleUserJoined])


    return (
        <div>room</div>
    )
}

export default Room