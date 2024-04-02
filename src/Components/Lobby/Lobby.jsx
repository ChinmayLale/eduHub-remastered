import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './lobby.css';
import {useSocket} from '../Context/SocketProvider';





function Lobby() {

    const [email , setEmail] = useState('');
    const [room , setRoom]  = useState('');

    const socket = useSocket();
    // console.log(socket);
    const navigate = useNavigate();


    const handleSubmit = () => {
        console.log(`Email : ${email}`);
        console.log(`Room : ${room}`);
        socket.emit('room:join',{email , room});
    }


    const handleJoinRoom = useCallback((data)=>{
        const {email , room} = data;
        console.log(email , room);
        navigate(`/room/${room}`);

    },[navigate])

    useEffect(()=>{
        socket.on('room:join' , handleJoinRoom);
        return () =>{
            socket.off("room:join")
        }
    },[socket , handleJoinRoom])


    return (
        <div>
            <h1> Lobby </h1>
            <div>
                <h3>Email</h3>
                <input type="text" id='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <h3>Room Number</h3>
                <input type="text" id='room' value={room} onChange={(e)=>{setRoom(e.target.value)}}/> <br />
                <button onClick={()=>{handleSubmit()}}>Join</button>
            </div>
        </div>
    )
}

export default Lobby