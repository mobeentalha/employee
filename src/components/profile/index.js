import React, {Component} from 'react';
import {Grid, Container, Segment, Image, Button} from 'semantic-ui-react'
import * as Actions from '../../store/actions'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './style.css'

class Profile extends Component {
		componentDidMount() {
				let id = this.props.match?.params?.id
				this.props.getEmpId(id)
		}

		render() {
				let {empReducer} = this.props;
				const empData = empReducer.empData
				return (
						<>
						<Button>
							<Link to="/"> Back </Link>
						</Button>
								<h1 className="text-center"> Profile Page</h1>

								{!empReducer.loading ? <Container>
										<Grid columns={2}>
												<Grid.Row>
														<Grid.Column>
																<Segment>
																		<Image className="profileImg" src={empData?.picture}/>
																</Segment>
														</Grid.Column>
														<Grid.Column>
																<Segment>
																		<h2> Name: {empData?.firstName} {empData?.lastName} </h2>
																		<h2> Date of Birth: {empData?.dateOfBirth}</h2>
																		<h2> Email: {empData?.email}</h2>
																		<h2> Registration Date: {empData?.registerDate} </h2>
																		<h2> Phone: {empData?.phone}</h2>
																</Segment>
														</Grid.Column>
												</Grid.Row>
										</Grid>
								</Container> : <h2>loading</h2>}
						</>
				)
		}
}

const mapStateToProps = ({empReducer}) => {
		return {empReducer}
}
const mapDispatchToProps = (dispatch) => {
		return {
				getEmpId: (id) => dispatch(Actions.getEmpDataId(id))
		}
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)