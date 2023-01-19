import Button from '../../components/button/Button';

export default function HomeBodyTranslated() {
  return (
    <div>
      <div className="body__translated">
        <input type="text" placeholder="Search activities or Destinations" />
        <div className="body__ul-div">
          <ul>
            <li>Guests</li>
            <li>2 Adult</li>
          </ul>
          <ul>
            <li>Date</li>
            <li>12-13 April 2021</li>
          </ul>
          <ul>
            <li>Package</li>
            <li>All</li>
          </ul>
        </div>
        <Button text="Book Now" color="#c7923e" />
      </div>
    </div>
  );
}
