import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../styles/index.css'
import PropTypes from 'prop-types';
function SimpleCounter(props) {
  return (
    <div className='bigCounter'>
      <div className="calendar">
        <i className="far fa-clock"></i>
      </div>
      <div className="four">{props.digitFour}</div>
      <div className="three">{props.digitThree}</div>
      <div className="two">{props.digitTwo}</div>
      <div className="one">{props.digitOne}</div>
    </div>
  )
}
SimpleCounter.propTypes = {
  digitOne: PropTypes.number,
  digitTwo: PropTypes.number,
  digitThree: PropTypes.number,
  digitFour: PropTypes.number
}
let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('app'));
setInterval(function () {
  const four = Math.floor(counter / 1000) % 10;
  const three = Math.floor(counter / 100) % 10;
  const two = Math.floor(counter / 10) % 10;
  const one = Math.floor(counter / 1) % 10;
  counter++;
  root.render(
    <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />
  );
}, 1000);