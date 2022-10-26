import React, { useContext, useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import logo from '../../../assets/Logo/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import RightSideNav from '../RightSideNav/RightSideNav';
import './Header.css';

const Header = () => {

    const [theme, setTheme] = useState('light');
    const { user, logOut } = useContext(AuthContext);

    const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };
      useEffect(() => {
        document.body.className = theme;
      }, [theme]);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar expand="lg" className='mb-4 navbar'>
            <Container fluid>
                <Navbar.Brand className='text-start fw-bold brandtext d-flex align-items-start justify-content-center'>
                    <Image src={logo}></Image>
                    <Link to='./' className='mx-2 my-2'>
                    <div>Feather</div>
                    <div>Online Library</div>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-5 me-auto my-2 my-lg-0 fw-semibold"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Link to='/faq' className='brandtext navlink mx-2 px-2 py-2'>FAQ</Link>
                    <Link to='/blog' className='brandtext navlink mx-2 px-2 py-2'>Blog</Link>
                    <div className={`Header ${theme} bg-light border rounded-2`}>
                      <Button onClick={toggleTheme} className='btn btn-light border border-2'>Theme</Button>
                    </div>
                </Nav>
                <Nav>
                <>
                    {
                    user?.uid ?
                    <>  
                        <Link to='/profile' className='mx-4 fw-semibold'>
                            {user?.displayName}
                            <Image className='mx-2 rounded-circle profile-img' src={user?.photoURL}></Image>
                        </Link>
                        <Button className='mx-2 py-0 my-0 bg-dark-violet'  variant="light" onClick={handleLogOut}>Log out</Button>
                    </>:
                    <>
                    <button className='mx-2 my-2 bg-dark-violet'><Link to='/login'>Login</Link></button>
                    <button className='mx-2 my-2 bg-dark-violet'><Link to='/register'>Sign Up</Link></button>
                    </>
                    }

                </>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <div className='d-lg-none'>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default Header;