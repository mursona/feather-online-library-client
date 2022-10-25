import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {FaEye} from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import './FieldSummaryCard.css'

const FieldSummaryCard = () => {

    const [fields, setFields] = useState([]);

    useEffect(() => {
        fetch(`https://learning-platform-server-side.vercel.app/research-field`)
        .then (res => res.json())
        .then (data => setFields(data))
    }, [])

    return (
       <div className="mb-3 w-100 text-start">
                <div className='row g-0'>
                {
                    fields.map(field =>
                    <div className='card col-md-5 mx-2 my-2'>
                    <div className="card-body text-center bg-card">
                    <div key={field.id}>
                        <Link to={`/field/${field.id}`}>
                            <Image src={field.image} className="w-100 border rounded-2"></Image>
                            <p className='my-2 fw-bold'>{field.name}</p>
                            <p><FaEye></FaEye>{field.reads}</p>
                        </Link>
                        <Button className='read-now'><Link to={`/field/${field.id}`}>Read Now</Link></Button>
                    </div>
                    </div>
                    </div>
                    )
                }
                </div>
        </div>
    );
};

export default FieldSummaryCard;