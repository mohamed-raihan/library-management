
import { faFacebookF, faGooglePlusG, faPinterestP, faSquareYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {  faArrowRight, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    
    
    <>
     <div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">

        <div className="row mt-5">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              Newsletter
              <hr />
              <div>
              <input type="text" placeholder='Enter your e-mail' className='form-control mt-4' />
              <button className='btn mt-3' style={{color: "#FFFFFF", background:'black'}}><FontAwesomeIcon icon={faArrowRight} style={{color: "#FFFFFF", background:'black'}} /></button>
              </div>
            </div>
            <div className="col-md-6">
              Information
              <hr />
              <ul className='footer_info mt-4'>
                <li>specials</li>
                <li>best seller</li>
                <li>contact us</li>
                <li>terms and conditions of use</li>
                <li>pages configuration</li>
                <li>sitemap</li>
              </ul>
              
              </div>
          </div>
        </div>

        <div className="col-md-6">
        <div className="row">
            <div className="col-md-6">
              My account
              <hr />
              <ul className='footer_info mt-4'>
                <li>my orders</li>
                <li>my merchandise returns</li>
                <li>my credit slips</li>
                <li>my addresses</li>
                <li>my personal info</li>
                </ul>
              
              </div>
            <div className="col-md-6">
              Store information
              <hr />
              <ul  className='footer_info mt-4'>
               <li>MY COMPANY,42 AVENUE DES CHAMPS</li>
               <li>ELYSEES 750000 PARIS FRANCE</li><br />
               <li><h5 style={{color:'rgb(8, 230, 211)'}}>1(234) 567-9842</h5></li>
               <li><img src="https://static3.depositphotos.com/1000363/104/i/950/depositphotos_1045324-stock-photo-mail-envelope-icon-button.jpg" alt="" width={'40px'} /> info@demolink.org</li>
              </ul>
             
              </div>
          </div>
        </div>
      </div>
      <hr className='mt-5'/>
      <div className='d-flex justify-content-center align-items-center mt-5'>
      <FontAwesomeIcon icon={faFacebookF} style={{marginLeft:'15px'}} />
      <FontAwesomeIcon icon={faTwitter} style={{marginLeft:'15px'}}/>
      <FontAwesomeIcon icon={faSquareYoutube} style={{marginLeft:'15px'}}/>
      <FontAwesomeIcon icon={faGooglePlusG} style={{marginLeft:'15px'}}/>
      <FontAwesomeIcon icon={faWifi} style={{marginLeft:'15px'}}/>
      <FontAwesomeIcon icon={faPinterestP} style={{marginLeft:'15px'}}/>
      </div>
      <div className='d-flex justify-content-center align-items-center mt-4'>
      ©️2024 Ecommerce software by PrestaShop
      </div>
    
        </div>
        <div className="col-md-1"></div>
      </div>
     </div>

    </>
  )
}

export default Footer
