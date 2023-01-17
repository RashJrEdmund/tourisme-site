import './footer.css';
import Fb from '../../images/FB.png';
import Tw from '../../images/tweetter.png';
import In from '../../images/linkedin.png';
import Ig from '../../images/instagram.png';
import Paperplane from '../../images/paperplane.png';

function Footer() {
  return (
    <div className="footerDiv">
      <div className="footerDiv__child">
        <div className="footerDiv__child--col1">
          <h1>If you have any question, Let us help you!</h1>
          <p>
            if you have any questions or would like to book a tour with us,
            don&apos;t hesitate to contact us
          </p>
          <p>Phone: +250 788 123 456</p>
          <p>Email: info@rwandatourism.com</p>
          <p>Address: Kigali, Rwanda</p>
          <form className="footDiv__form">
            <input type="email" placeholder="input yout email here" />
            <button type="submit" className="footDiv__form--btn">
              <img src={Paperplane} alt="paper_plane_icon" />
            </button>
          </form>
        </div>

        <div className="footerDiv__child--col2">
          <div className="col2__top">
            <div className="col2__top--logo" />
            <div className="col2__top--media">
              <img src={Fb} alt="facebook_icon" />
              <img src={Tw} alt="tweetter_icon" />
              <img src={In} alt="linkedIn_icon" />
              <img src={Ig} alt="instagram_icon" />
            </div>
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>

          <div className="col2__footer">
            <div className="col2__footer--col">
              <p>Home</p>
              <p>Testimonials</p>
              <p>Destinations</p>
              <p>signing</p>
            </div>
            <div className="col2__footer--col">
              <p>About Us</p>
              <p>Packages</p>
              <p>Events</p>
              <p>Gallery</p>
            </div>
            <div className="col2__footer--col">
              <p>Our Team</p>
              <p>Blog</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </div>

      <p>Copyright Africa Wizzy Safari 2022</p>
    </div>
  );
}

export default Footer;
