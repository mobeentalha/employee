import React, {Component} from 'react';
import { Grid, Container,Segment, Image } from 'semantic-ui-react'
import * as Actions from '../../store/actions'
import {connect} from 'react-redux';
import './style.css'
class Profile extends Component {
    constructor(props){
        super()
        
    }
    componentDidMount(){
        this.props.getEmpId(this.props.location.id)
    }
    render(){
        console.log('reducer profile', this.props.empReducer.data);
        return(
            <>
            <h1 className="text-center"> Profile Page</h1> 
            <Container>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment>
                                <Image className="profileImg" src={this.props.location.imgsrc} />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>
                                <p> Name </p>
                                <p> Date of Birth </p>
                                <p> Email </p>
                                <p> Registration Date </p>
                                <p> Phone </p>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
            </>
        )
    }
}
const mapState = (props) =>{
    return props
}
const mapDispatch = (dispatch) =>{
    return {
        getEmpId:(id)=>dispatch(Actions.getEmpDataId(id))
    }
}
export default connect(mapState,mapDispatch)(Profile)