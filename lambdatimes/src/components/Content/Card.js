import React from 'react';
import propTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt = 'Author Pic' />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  headline : propTypes.string.isRequired,
  tab : propTypes.string.isRequired,
  author : propTypes.string.isRequired,
}
export default Card;
