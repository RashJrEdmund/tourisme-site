/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './navbar.css';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

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
};

const removeSideMenu = () => {
  document.getElementById('varying-ul').classList.remove('open');
};

/* cosnt [decorate, setDecorate] = useState([
  { stl: 'border-bottom: 1px solid #304f47;' },
  { stl: 'border-bottom: unset;' },
  { stl: 'border-bottom: unset;' },
  { stl: 'border-bottom: unset;' },
  { stl: 'border-bottom: unset;' },
]);

function underline(i) {
  setDecorate(() => {
    decorate.map((element, index) => {
      return (
        {index === i ? { stl: 'border-bottom: 1px solid #304f47;' } : { stl: 'border-bottom: unset;' }}
      )
    });
  });
} */

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

          {/* THIS IS WHERE THE ROUTE LINKS ARE MADE */}

          <ul className="varying-ul" id="varying-ul">
            {/* This is the top of the Mobile sideNav */}

            <div className="varying-ul--top">
              <span className="navbar__bottomNav--button1">
                <Button text="Sign In" color="#c7923e" />
              </span>

              <button // this is the close menu icon
                className="close-menu-icon"
                alt="close_menu"
                type="button"
                onClick={() => {
                  removeSideMenu();
                }}
              />
            </div>

            <Link
              to="/"
              className="varying-ul--aTag"
              onClick={() => {
                removeSideMenu();
                // underline(0);
              }}
            >
              <li>Home</li>
            </Link>

            <Link
              to="/about"
              className="varying-ul--aTag"
              onClick={() => {
                removeSideMenu();
                // underline(1);
              }}
            >
              <li>About</li>
            </Link>

            <Link
              to="/tour"
              className="varying-ul--aTag"
              onClick={() => {
                removeSideMenu();
                // underline(2);
              }}
            >
              <li>Tour Package</li>
            </Link>

            <Link
              to="/gallery"
              className="varying-ul--aTag"
              onClick={() => {
                removeSideMenu();
                // underline(3);
              }}
            >
              <li>Gallery</li>
            </Link>

            <li>Blog</li>

            <Link
              to="/contact"
              className="varying-ul--aTag"
              onClick={() => {
                removeSideMenu();
                // underline(4);
              }}
            >
              <li>Contact Us</li>
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
        <span className="navbar__bottomNav--button2">
          <Button text="Sign In" color="#c7923e" />
        </span>
      </div>
    </div>
  );
}

// add the event listener on line 49;

export default NavBar;
