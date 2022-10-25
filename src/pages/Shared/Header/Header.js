import React, { useContext } from 'react';
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

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar expand="lg" className='mb-4 navbar'>
            <Container fluid>
                <Navbar.Brand href="#" className='text-start fw-bold brandtext d-flex align-items-start justify-content-center'>
                    <Image src={logo}></Image>
                    <p className='mx-2 my-2'>
                    <div>Feather</div>
                    <div>Online Library</div>
                    </p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-5 me-auto my-2 my-lg-0 fw-semibold"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Link to='/' className='brandtext navlink mx-2 px-2 py-2'>FAQ</Link>
                    <Link to='/' className='brandtext navlink mx-2 px-2 py-2'>Blog</Link>
                    <div className='d-flex'>
                    <button className='mx-2 my-2 bg-dark text-white theme'>Dark</button>
                    <button className='mx-2 my-2 bg-white theme'>Light</button>
                    </div>
                </Nav>
                <Nav>
                <>
                    {
                    user?.uid ?
                    <>
                        <span>{user?.displayName}</span>
                        <Button className='mx-2 my-2 bg-dark-violet'  variant="light" onClick={handleLogOut}>Log out</Button>
                    </>:
                    <>
                    <button className='mx-2 my-2 bg-dark-violet'><Link to='/login'>Login</Link></button>
                    <button className='mx-2 my-2 bg-dark-violet'><Link to='/register'>Register</Link></button>
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