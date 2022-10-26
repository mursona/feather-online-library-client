import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h3>Here is our Terms and conditions</h3>
            <p>Back to signUp: <Link to='/register'>Sign Up</Link></p>
        </div>
    );
};

export default TermsAndCondition;