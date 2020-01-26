import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderComments ({comments}) {
	return (
		comments.map((comment, i) => {
			return (
				<div key = {comment.id}>
					<p>{comment.comment}</p>
					<p>{`-- ${comment.author} , ${new Intl.DateTimeFormat('en-us', {year: 'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}`}</p>
				</div>
			)
		})
	)
}
function RenderDish ({dish}) {
	return (
		<Card>
			<CardImg width="100%" src={dish.image} alt={dish.name}/>
			<CardBody>
				<CardTitle>{dish.name}</CardTitle>
				<CardText>{dish.description}</CardText>
			</CardBody>
		</Card>
	)
}
const DishDetail =(props) => {
		const dish = props.dish
        if (dish !=null || dish !=undefined){
		return (
			<div className="container">
				<div className = 'row'>
					<div className = 'col-12 col-md-5 m-1'>
						<RenderDish dish={dish} />
					</div>
					<div className = 'col-12 col-md-6 m-1'>
					<h4>Comments</h4>
					<RenderComments comments={dish.comments} />
					</div>
				</div>
			</div>
        )
    }
    else{return null}
}

export default DishDetail  