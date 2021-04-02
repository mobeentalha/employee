import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../store/actions'
import { Grid,Button, Container, Table, Pagination } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import './style.css'
class List extends Component {
    constructor(props){
        super(props)
        this.state ={
            men: true,
            menData: [],
            womenData: [],
            totalData: this.props.empReducer.data.total / 10,
            activePage: 1
        }
    }
    componentDidMount(){
        this.props.getEmp(1,10,10)
    }
    render(){
        let menData = []
        let womenData = []
        let apiRes = this.props.empReducer.data.data
        let length = apiRes&& apiRes.length
        for(let i = 0; i< length; i++){
            if(apiRes[i].title==='mr'){
                menData.push(apiRes[i])
            }
            else{
                womenData.push(apiRes[i])
            }
        }
        console.log({menData, womenData})
        const {men} = this.state
        
        return(
            <>
            <h1 className="text-center"> Employee Listing </h1>
            <Container>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <Button 
                                onClick={()=> this.setState({men: true})} 
                                primary={men}
                            >
                                Male
                            </Button>
                            <Button 
                                onClick={()=> this.setState({men: false})} 
                                primary={!men}
                            >
                                Women
                            </Button>
                            <Table basic='very' celled collapsing>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.HeaderCell>Email</Table.HeaderCell>
                                        {/* <Table.HeaderCell>DOB</Table.HeaderCell>
                                        <Table.HeaderCell>Phone</Table.HeaderCell> */}
                                        <Table.HeaderCell>Full Profile</Table.HeaderCell>
                                        <Table.HeaderCell>User Post</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {men ? 
                                        menData&& menData.map((value,index) => {
                                            return (
                                                <Table.Row key={'m'+index}>
                                                    <Table.Cell>
                                                        {value.firstName +' '+ value.lastName}
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        {value.email}
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        <Link to={{ 
                                                            pathname: '/profile',
                                                            id: value.id,
                                                            imgsrc: value.picture
                                                        }}>Profile Link</Link>
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        <Link to="/blog">Blog Link</Link>
                                                    </Table.Cell>
                                                </Table.Row>
                                            )
                                        })
                                    : 
                                        womenData && womenData.map((value, index) => {
                                            return(
                                                <Table.Row key={'w'+index}>
                                                    <Table.Cell>
                                                        {value.firstName + value.lastName}
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        {value.email}
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        <Link to="/profile">Profile Link</Link>
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        <Link to="/blog">Blog Link</Link>
                                                    </Table.Cell>
                                                </Table.Row>
                                            )
                                        })
                                    }
                                </Table.Body>
                            </Table>
                            <Pagination
                                activePage={this.state.activePage}
                                pointing
                                onPageChange={(e, { activePage }) =>
                                this.setState({ activePage }, () => {
                                  this.listAction();
                                })
                              }
                                totalPages={this.state.totalData}
                            />
                        </Grid.Column>
                        <Grid.Column>

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
        getEmp:(filter, offset, limit)=>dispatch(Actions.getEmpData(filter, offset, limit))
    }
}
export default connect(mapState,mapDispatch)(List)