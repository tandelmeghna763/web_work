import React from 'react'
import { Link } from "react-router-dom";
import es from '../assets/Es.png'
import htmlcss from '../assets/htmlcss.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import mongo from '../assets/mongodb.png'
import node from '../assets/node.png'
import './Home.css'
import { Children } from 'react';
import Htmlcss from "../Components/Htmlcss";

const Home = () => {

    return (
        <div className='home'>
            <h1 style={{ marginLeft: "40px" }}>WebWork</h1>
            <div className='img'>
                <Link to='/htmlcss'>                <img src={htmlcss} height={300} width={400}></img>

                </Link>
                <Link to='/jstopic'>                <img src={js} height={300} width={400}></img>

                </Link>
                <Link to='/es6'>
                    <img src={es} height={300} width={400}></img>

                </Link>
                <Link to='/react'>                <img src={react} height={300} width={400} style={{ marginTop: "20px" }}></img>

                </Link>
                <Link to='/nodejs'>   <img src={node} height={300} width={400} style={{ marginTop: "20px" }}></img></Link>
                <Link to='/mongodb'>                <img src={mongo} height={300} width={400} style={{ marginTop: "20px" }}></img>
                </Link>

            </div>
        </div>
    )
}

export default Home;
