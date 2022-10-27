import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ResearchSummaryCard.css'

const ResearchSummaryCard = ({research}) => {

    const {_id, title, citation, details} = research
    return (
        <div>
            <Card className="text-start my-4 col-10">
            <Card.Header className='d-flex justify-content-between align-items-center'>
            <Card.Title className='text-success'>{title}</Card.Title>
                <div>
                    <FaBook className='text-dark-violet me-2'></FaBook>
                    <span>Citations: {citation}</span>
                </div>
            </Card.Header>
            <Card.Body className='faq'>
                <Card.Text>
                    {
                        details.length > 250 ?
                            <>
                            {details.slice(0, 150) + '...'} <Link to={`/research/${_id}`} className='see-more fw-bold'>Read More</Link> 
                            </>
                            :
                            details
                    }
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
};

export default ResearchSummaryCard;