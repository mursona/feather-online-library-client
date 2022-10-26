import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Faq.css'

const Faq = () => {
    return (
        <Accordion className='my-4'>
        <h3 className='faq-h3'>Frequently Asked Questions</h3>
        <Accordion.Item className='my-4' eventKey="0">
          <Accordion.Header>Why can't I get full text access to a journal?</Accordion.Header>
          <Accordion.Body className='faq'>
          If you cannot find the full text of an article it may be because we do not subscribe to that particular journal. Most databases will allow you to view abstracts, but you will only be able to view the full text of journals we have subscribed to and paid for. The database description for each database gives information about the full text coverage of each database.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className='my-4' eventKey="1">
          <Accordion.Header>I would like to suggest a journal</Accordion.Header>
          <Accordion.Body className='faq'>
          Please submit your suggestion using the suggest a resource form
        Please note that while we do aim to provide all essential course materials we may not be able to provide suggested further reading.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className='my-4' eventKey="2">
          <Accordion.Header>How do I find out if the Online Library has a journal?</Accordion.Header>
          <Accordion.Body className='faq'>
          You can search the A - Z Journals List by typing the title of the journal and pressing ‘search’. The search results will tell you which database the journal is in and which years are available. To go directly to the journal select the title and log into that database when prompted.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className='my-4' eventKey="3">
          <Accordion.Header>I have a download how do I get to the full text journal article?</Accordion.Header>
          <Accordion.Body className='faq'>We recommend that you click download research article button top header.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
};

export default Faq;