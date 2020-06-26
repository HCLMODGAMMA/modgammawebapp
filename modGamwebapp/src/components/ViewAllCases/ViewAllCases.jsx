import React, { Component } from 'react'
import Header from '../Header/Header';
import {submitCase} from '../../services/Api';
import Button from '@material-ui/core/Button';


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {listAllCases} from '../../services/Api';

export class ViewAllCases extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             allCases : []
        }
    }

    componentDidMount(){
        this.getAllCases()
        // this.setState({
        //     allCases :[{"csmNo": "harish", "caseSubmissionNo":"28", "caseType":"ss", "caseSubType":"fd", "submittedDate":"ddg", "caseStatus":"sdfsd", "proposalDescription":"dsfdsf"}]
        // })
    }

    getAllCases(){
        listAllCases()
        .then((response)=>{
            console.log(response)
            if(response.data.status == 200){
                this.setState({
                    allCases :response.data.result
                })
            }
        });
    }
    
    viewCase = (e)=> {
        console.log(e);
        window.location.href = "/ViewCase?csmNo=" + e;
    }
    render() {

        const mystyle = {
            marginTop: 10
          };

        return (
            <div>
                <Header></Header>

                <div className="container-fluid" style={mystyle}>
                    <div className="row">
                        <div className="col-sm-12">
                            <TableContainer component={Paper}>  
                                <Table stickyHeader  aria-label="sticky table">  
                                    <TableHead>  
                                        <TableRow>  
                                        <TableCell>CSM No</TableCell>  
                                        <TableCell>Case Submission No</TableCell>
                                        <TableCell>Case Type</TableCell>  
                                        <TableCell>Case Subtype</TableCell>  
                                        <TableCell>Submitted Date</TableCell>
                                        <TableCell>Case Status</TableCell>  
                                        <TableCell>Proposal Description</TableCell>  
                                        </TableRow>  
                                    </TableHead>  
                                    <TableBody>  
                                        {this.state.allCases.map((p, index) => {  
                                            return <TableRow key={index}>  
                                            <TableCell> <a href="#" onClick={() => this.viewCase(p.csmNo)}>{p.csmNo}</a></TableCell>
                                            <TableCell>{p.caseSubmissionNo}</TableCell>  
                                            <TableCell>{p.caseType}</TableCell>  
                                            <TableCell>{p.caseSubType}</TableCell>  
                                            <TableCell>{p.submittedDate}</TableCell>  
                                            <TableCell>{p.caseStatus}</TableCell>  
                                            <TableCell>{p.proposalDescription}</TableCell>  
                                            </TableRow>  
                                    })}  
                                    </TableBody>  
                                </Table>  
                            </TableContainer>
                        </div>
                    </div>
                </div>

                
                
                
      {/* <Button variant="contained" color="primary">
        Primary
      </Button> */}
      
                
            </div>
        )
    }
}

export default ViewAllCases
