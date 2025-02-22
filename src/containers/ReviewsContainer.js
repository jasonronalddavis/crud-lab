import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'
 
class ReviewsContainer extends Component {

  render() {
   
    return (
      <div> 
        <ReviewInput 
          addReview={this.props.addReview}
          restaurantId={this.props.restaurantId}
        />
        <Reviews 
      reviews={this.props.reviews}
          restaurantId={this.props.restaurantId}
          deleteReview={this.props.deleteReview}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return{
    reviews: [...state.reviews]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: ( review ) => dispatch({type: 'ADD_REVIEW', review: review }),
    deleteReview: (id) => dispatch({type: 'DELETE_REVIEW', id})
   // addReview: ({text, restaurantId, id }) => dispatch({type: 'ADD_REVIEW', review:{text: text, restaurantId: restaurantId, id: id}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)