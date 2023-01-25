/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './navbar.css';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import phone from '../../images/phone.png';
import mail from '../../images/mail.png';
import Fb from '../../images/FB.png';
import Tw from '../../images/tweetter.png';
import In from '../../images/linkedin.png';
import Ig from '../../images/instagram.png';

const toggleIcon = () => {
  const varyingUl = document.getElementById('varying-ul');
  varyingUl.classList.toggle('open');
  console.log('click works');
  // console.log('this ', document.getElementById('varying-ul'));
  const varyingUlAtags = document.querySelectorAll(
    '.className="varying-ul--aTag"'
  );

  varyingUlAtags.forEach((aTag) => {
    aTag.addEventListener('click', () => {
      console.log('code works');
      varyingUl.classList.remove('open');
    });
  });
};

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
          <ul className="varying-ul" id="varying-ul">
            <button
              className="close-menu-icon"
              alt="close_menu"
              type="button"
              onClick={() => {
                toggleIcon();
              }}
            />
            <Link to="/">
              <li className="varying-ul--aTag">Home</li>
            </Link>
            <Link to="/about">
              <li className="varying-ul--aTag">About</li>
            </Link>
            <Link to="/tour">
              <li className="varying-ul--aTag">Tour Package</li>
            </Link>
            <Link to="/gallery">
              <li className="varying-ul--aTag">Gallery</li>
            </Link>
            <li className="varying-ul--aTag">Blog</li>
            <Link to="/contact">
              <li className="varying-ul--aTag">Contact Us</li>
            </Link>
          </ul>
          <button
            type="button"
            className="menu-icon"
            alt="hamburger menu"
            onClick={() => {
              toggleIcon();
            }}
          />
        </div>
        <Button text="Sign In" color="#c7923e" />
      </div>
    </div>
  );
}

// add the event listener on line 49;

export default NavBar;
