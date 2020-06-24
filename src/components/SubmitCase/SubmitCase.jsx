import React, { Component } from 'react'
import Header from '../Header/Header';
import {submitCase} from '../../services/Api';


export class SubmitCase extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            csmNo: "1234",
            caseSubmissionNo: "1234",
            caseType: "",
            caseSubType: "",
            submittedDate: "",
            caseStatus: "",
            subject: "",
            proposalDescription: "",
            reason : "",
            sites: [],
            contactDetails : {
                submittedBy:"",
                emailAddress: "",
                submittedDate: "",
                agencyCompany: ""
            }
        }
        this.state.sites = [{
            siteNo: "1",
            siteName : "",
            siteDescription: "",
            location: ""
        }];

        this.submitCase = this.submitCase.bind(this);

        
    }

    submitCase = event =>{ 
        console.log(this.state);
        submitCase(this.state)
        .then((result)=>{
            console.log(result)
            if(result.status == 200){
                alert("Case submitted successfully");
            }
        });
        
    }
    
    render() {
       
        return (
            <div>
                <Header></Header>
                <form autoComplete="off">
                    <div className="container-fluid">
                    
                    <div className="row">
                        <div className="col-sm-12">
                            <b>Submit Case</b>
                        </div>

                        
                            <div className="row col-sm-12">
                                
                                <div className="col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <label >Case Type:</label>
                                        <select class="form-control col-sm-6 col-xs-12" id="sel1" name="sellist1">
                                            <option value="">--Select--</option>
                                            <option value="FA">Formal Application</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label >Case SubType:</label>
                                        <select class="form-control col-sm-6 col-xs-12" id="sel1" name="caseSubType">
                                            <option value="">--Select--</option>
                                            <option value="FA">FA</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label >Subject:</label>
                                        <input type="text" className="form-control col-sm-6 col-xs-12" name="subject"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Proposal Description:</label>
                                        <input type="text" className="form-control col-sm-6 col-xs-12" name="proposalDescription"/>
                                    </div>

                                </div>

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label >Submitted By:</label>
                                        <input type="text" className="form-control col-sm-6 col-xs-12" placeholder="Submitted by"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address:</label>
                                        <input type="text" className="form-control col-sm-6 col-xs-12" placeholder="name@email.com"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Agency / Company:</label>
                                        <input type="text" className="form-control col-sm-6 col-xs-12" placeholder="Agency / Company"/>
                                    </div>
                                </div>

                                <div className="row col-sm-12">
                                    <div className="col-sm-4 col-xs-12">
                                        <div className="form-group">
                                            <label >Site Name:</label>
                                            <input type="text" className="form-control col-sm-10 col-xs-12" placeholder="Site Name"/>
                                        </div>                                       
                                    </div>
                                    <div className="col-sm-4 col-xs-12">
                                        <div className="form-group">
                                            <label>Site Description:</label>
                                            <input type="text" className="form-control col-sm-10 col-xs-12" placeholder="Site Description"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-xs-12">
                                        <div className="form-group">
                                            <label>Location:</label>
                                            <input type="text" className="form-control col-sm-10 col-xs-12" placeholder="Location"/>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-sm-12 padTop10">
                                <button id="signin" type="button" className="btn btn-primary" onClick={this.submitCase}>Submit</button>
                                {/* <Button className="marleft10" variant="contained" color="primary" onClick={this.clearAll}>
                                    Clear
                                </Button> */}
                            </div>
                            

                    </div>
                </div>

                </form>
            </div>
        )
    }
}

export default SubmitCase
