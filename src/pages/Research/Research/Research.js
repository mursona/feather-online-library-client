import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import Pdf from "react-to-pdf";

const Research = () => {

    const ref = React.createRef();

    const research = useLoaderData();
    const { title, details, image_url, category_id } = research;
    return (
        <div className="card mb-3 w-100 text-start">
          <div className="row g-0">
            <div className="col-md-4">
                <Image src={image_url} className="w-100"></Image>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div ref={ref}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{details}</p>
                </div>
                    <Pdf targetRef={ref} filename="research-paper.pdf">
                        {({ toPdf }) => 
                        <Button onClick={toPdf}className='bg-dark-violet'>Download This Research
                        </Button>}
                    </Pdf>
              </div>
            </div>
          </div>
        </div> 
    );
};

export default Research;