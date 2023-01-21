import './navbar.css';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import phone from '../../images/phone.png';
import mail from '../../images/mail.png';
import Fb from '../../images/FB.png';
import Tw from '../../images/tweetter.png';
import In from '../../images/linkedin.png';
import Ig from '../../images/instagram.png';
import closeMenu from '../../images/closeMenu.png';
import menuIcon from '../../images/menu-icon.svg';

/* const toggleIcon = (e) => {
  // e.target.classList.toggle('not-active');
  console.log('click');
}; */

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__topNav">
        <div className="navbar__topNav--col1">
          <p>
            <img src={phone} alt="phone_image" />
            +250 784 688 641
          </p>
          <p>
            <img src={mail} alt="mail_image" /> bbonteemma@gmail.com
          </p>
        </div>
        <div className="navbar__topNav--col2">
          <img src={Fb} alt="Facebook" />
          <img src={Tw} alt="tweetter" />
          <img src={In} alt="linkedIn" />
          <img src={Ig} alt="ig" />
        </div>
      </div>
      <div className="navbar__bottomNav">
        <div className="bottomNav__sub1">
          <div className="logo" />
          <ul>
            <img className="close-menu-icon" src={closeMenu} alt="close_menu" />
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/tour">
              <li>Tour Package</li>
            </Link>
            <Link to="/gallery">
              <li>Gallery</li>
            </Link>
            <li>Blog</li>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
          <img className="menu-icon" src={menuIcon} alt="hamburger menu" />
        </div>
        <Button text="Submit" color="#c7923e" />
      </div>
    </div>
  );
}

// add the event listener on line 49;

export default NavBar;
