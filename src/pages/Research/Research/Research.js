import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import Pdf from 'react-to-pdf';
import {FaFileDownload} from 'react-icons/fa';

const Research = () => {

    const ref = React.createRef();

    const research = useLoaderData();
    const { _id, title, details, image_url } = research;

    return (
        <div className="card mb-3 w-100 text-start">
          <div className="row g-0">
            <div className='text-center my-4'>                    
              <Pdf targetRef={ref} filename="research-paper.pdf">
                        {({ toPdf }) => 
                        <Button onClick={toPdf}
                        className='bg-dark-violet'>
                          <FaFileDownload className='mx-2'></FaFileDownload>
                          Download This Research
                        </Button>}
              </Pdf>
            </div>
            <hr />
            <div ref={ref}>
            <div className="col-md-4 mx-auto">
                <Image src={image_url} className="w-100"></Image>
            </div>
            <div className="col-md-8 text-center mx-auto">
              <div className="card-body">
                <div>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{details}</p>
                <Link to={`/checkout/${_id}`} className='my-4 mx-5 btn btn-success'>Get Premium Access</Link>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div> 
    );
};

export default Research;