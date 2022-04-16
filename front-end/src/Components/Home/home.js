import React from 'react';
import './home.css';
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className='main-container'>
            <div>
                <img src='https://images.unsplash.com/photo-1645786708004-fbbd4b0a71e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='profile'></img>
            </div>
            <div>
                <p className='para'>Hello</p>
                <Link to='/posts'><button className='home-button'>Enter</button></Link>
            </div>
        </div>
        
    );
}