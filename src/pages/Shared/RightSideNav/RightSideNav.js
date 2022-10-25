import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {FaSearchengin} from 'react-icons/fa';
import './RightSideNav.css';

const RightSideNav = () => {

    const [fields, setFields] = useState([]);

    useEffect(() => {
        fetch(`https://learning-platform-server-side.vercel.app/research-field`)
        .then (res => res.json())
        .then (data => setFields(data))
    }, [])

    return (
<div className="wrapper">
        <nav id="sidebar">
            <div className="sidebar-header text-center d-flex">
                <h5><FaSearchengin className='mx-2'></FaSearchengin>
                Research Area</h5>
            </div>
            <ul className="list-unstyled components">
                <li>
                {
                    fields.map(field => <p key={field.id}>
                        <Link to={`/field/${field.id}`}>{field.name}</Link>
                    </p>
                    )
                }
                </li>
            </ul>

            <ul className="list-unstyled CTAs">
                <li>
                    <a href="/" className="bg-violet text-center">Download source</a>
                </li>
            </ul>
        </nav>
    </div>
    );
};

export default RightSideNav;