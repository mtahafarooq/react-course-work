import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

class DishDetail extends Component {
	renderComments (comments) {
		return (
		comments.map((comment, i) => {
			return (
				<div key = {comment.id}>
					<p>{comment.comment}</p>
					<p>{`-- ${comment.author} , ${comment.date}`}</p>
				</div>
			)
		})
		)
	}
	render() {
		const dish = this.props.selectedDish
        if (dish !=null || dish !=undefined){
		return (
			<div>
				<div className = 'row'>
					<div className = 'col-12 col-md-5 m-1'>
						<Card>
							<CardImg width="100%" src={dish.image} alt={dish.name}/>
							<CardBody>
								<CardTitle>{dish.name}</CardTitle>
								<CardText>{dish.description}</CardText>
							</CardBody>
						</Card>
					</div>
					<div className = 'col-12 col-md-6 m-1'>
					<h4>Comments</h4>
					{this.renderComments(dish.comments)}			
					</div>
				</div>
			</div>
        )
    }
    else{
        return null
    }
	}
}

export default DishDetail  