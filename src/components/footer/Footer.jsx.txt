import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { MdEmail , MdLocationPin} from "react-icons/md";
import './footer.css'
import LogoFooter from '../../assests/images/CS_white.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer container'>
      <div className=' custom__container footer__mainsection'>
        <div className='footer__container-01'>
          <div className='footer__container-01__logo'>
              <img className='footerlogo'  src={LogoFooter}/>
          </div>
          <div className='footer__container-01__SocialIcons'>
              <SocialIcon  style={{ height:'40px' , width:'40px '}} url="https://facebook.com" />
              <SocialIcon  style={{ height:'40px' , width:'40px' }} url="https://linkdin.com" />
              <SocialIcon  style={{ height:'40px' , width:'40px' }} url="https://twiter.com" />
          </div>
        </div>

        <div className='footer__container-02'>
          <div className='footer__container-02__email'>
            <MdEmail size={30} color='#fbbf24'/> <Link className='lato-regular_footer'>ieecs@univ.jfn.ac.lk</Link>
          </div>
          <div className='footer__container-02__address'>
            <MdLocationPin size={30} color='#fbbf24'/>
            <p className='lato-regular_footer  address-text'>
                  Department of Computer Science,<br/>
                  Faculty of Science, <br/>
                  University of Jaffna, <br/>
                  Jaffna, <br/>
                  Sri Lanka
            </p>
          </div>
        </div>

        <div className='footer__container-03'>
          <iframe title="csDepartmentLocation" className="mapcontainer" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1966.4735136830504!2d80.01930569839477!3d9.685562500000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe54125cafe551%3A0x61d1a49bcd146dfe!2zRGVwYXJ0bWVudCBvZiBDb21wdXRlciBTY2llbmNlLCBVbml2ZXJzaXR5IG9mIEphZmZuYS4g4K6V4K6j4K6_4K6p4K6_IOCuheCuseCuv-CuteCuv-Cur-CusuCvjSDgrqTgr4HgrrHgr4gsIOCur-CuvuCutOCvjeCuquCvjeCuquCuvuCuo-CuruCvjSDgrqrgrrLgr43grpXgrrLgr4jgrpXgr43grpXgrrTgrpXgrq7gr40!5e0!3m2!1sen!2sus!4v1684678012881!5m2!1sen!2sus" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>


      </div>


      <div className='footer__botomSection'>
        <p className='lato-regular_footer'>&copy; CS IEEE SB CHAPTER OF UOJ 2024 - ALL RIGHTS RESERVED</p>
      </div>

      
    </div>

  )
}

export default Footer
