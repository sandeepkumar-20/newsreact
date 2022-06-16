import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        
            <nav>
                <ul>
                    <li>
                        <p>Be UpToDate</p>
                    </li>
                    <li>
                        <Link to="/"><a>Home </a></Link>
                    </li>
                    <li>
                        <Link to="/covid"><a>Covid 19</a></Link>
                    </li>
                    <li>
                        <Link to="/business"><a>Business</a></Link>
                    </li>
                    <li>
                        <Link to="/entertainment"><a>Entertainment</a></Link>
                    </li>
                    <li>
                        <Link to="/health"><a>Health</a></Link>
                    </li>
                    <li>
                        <Link to="/science"><a>Science</a></Link>
                    </li>
                    <li>
                        <Link to="/sports"><a>Sports</a></Link>
                    </li>
                    <li>
                        <Link to="/technology"><a>Technology</a></Link>
                    </li>

                </ul>
            </nav>
        
    )
}
