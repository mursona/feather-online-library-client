import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ResearchSummaryCard.css'

const ResearchSummaryCard = ({research}) => {

    const {_id, title, author, citation, details} = research
    return (
        <div>
            <Card className="text-start my-2">
            <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                    <Image
                        roundedCircle
                        className='me-2'
                        src={author?.img}
                        style={{ height: '60px' }}
                    ></Image>
                                    <div className='text-start'>
                        <p className='mb-0 text-dark-violet'>Author Name: {author?.name}</p>
                        <p>{author?.university}</p>
                </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='text-success'>{title}</Card.Title>
                <Card.Text>
                    {
                        details.length > 250 ?
                            <>{details.slice(0, 250) + '...'} <Link to={`/research/${_id}`} className='see-more fw-bold'>Read More</Link> </>
                            :
                            details
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div>
                    <FaBook className='text-dark-violet me-2'></FaBook>
                    <span>Citations: {citation}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                </div>
            </Card.Footer>
            </Card>
        </div>
    );
};

export default ResearchSummaryCard;