import React, { Component } from 'react';
import Restaurant from '../restaurants/Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => {
          return <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />
        })}
      </ul>
    );
  }
};

export default Restaurants;