import React from 'react';
import { CDBBox, CDBFooter, CDBFooterLink} from 'cdbreact';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import  logo  from '../../../assets/Logo/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <CDBFooter className="shadow text-color text-success mt-4 footer-bg">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <span to="/" className="p-0 text-dark">
              <img alt="logo" src={logo} width="60px" />
            </span>
            <p className="my-2" style={{ width: '350px' }}>
              We are creating High Quality Resources and tools to Aid developers during the developement of their projects
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              FOLibrary
            </p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink to="/">Resources</CDBFooterLink>
              <CDBFooterLink to="/">About Us</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
            <CDBFooterLink to="/">Contact</CDBFooterLink>
              <CDBFooterLink to="/">Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Products
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink to="/">Careers</CDBFooterLink>
              <CDBFooterLink to="/">News</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <div style={{ width: '100%' }} className="flex mx-auto mt-2 text-center justify-content-center">
            <FaFacebook className='mx-2'></FaFacebook>
            <FaTwitter></FaTwitter>
            <FaInstagram className='mx-2'></FaInstagram>
        </div>
        <small className="text-center mt-5">&copy; Feather Online Library, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;