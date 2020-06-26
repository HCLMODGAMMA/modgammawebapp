import React, { Component } from 'react'
import Header from '../Header/Header';
import {viewCase} from '../../services/Api';


export class ViewCase extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allCases: "",
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
            siteNo: "1",
            siteName:"",
            siteDescription: "",
            location: "",
            contactsubmittedBy: "",
            contactemailAddress: "",
            contactsubmittedDate: "",
            contactagencyCompany:""
            // contactDetails : {
            //     submittedBy:"",
            //     emailAddress: "",
            //     submittedDate: "",
            //     agencyCompany: ""
            // }
        }
        this.state.sites = [{
            siteNo: "1",
            siteName : "",
            siteDescription: "",
            location: ""
        }];
        
    }

    changeEventReact = (e)=> {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state);
    }
    componentDidMount(){
        this.getParameter()
    }
    getParameter(){
        let getParms = window.location.search;
        let splitValues = getParms.split("=");
        console.log(splitValues);
        let csmNo = splitValues[1];
        viewCase(csmNo)
        .then((response)=>{
            console.log(response)
            if(response.data.status == "Success"){
                this.setState({
                    caseType :response.data.result.caseType,
                    caseSubType :response.data.result.caseSubType,
                    subject :response.data.result.subject,
                    proposalDescription :response.data.result.proposalDescription,
                    siteName : "Jurong East",
                    siteDescription : "Site 2 added",
                    location :"Singapore",
                    contactagencyCompany: "URA",
                    contactsubmittedBy: "Admin"                  
                })
            }
        });
    }

    backToListOfCases = (e)=> {
        window.location.href = "/viewAllCases";
    }

    render() {
        const formFields = {...this.state};
        console.log(formFields);
        return (
            <div>
                <Header></Header>
                <h2 class="text-center">View Case Details</h2>
                <form class="form-horizontal">
                <div className="container-fluid">
                    
                    <div className="row">

                <div class="col-sm-6">
                    <div class="row form-group">
                    <label class="control-label col-sm-4">Case Type</label>
                    <div class="col-sm-8">
                        <select class="form-control" id="caseType" name="caseType" value={formFields.caseType} onChange={this.changeEventReact}>
                            <option value="">--Select--</option>
                            <option value="FA">Formal Application</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    </div>


                    <div class="row form-group">
                    <label class="control-label col-sm-4">Case SubType</label>
                    <div class="col-sm-8">
                        <select class="form-control" id="caseSubType" name="caseSubType" value={formFields.caseSubType} onChange={this.changeEventReact}>
                            <option value="">--Select--</option>
                            <option value="FA">FA</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="row form-group">
                    <label class="control-label col-sm-4">Submitted By</label>
                    <div class="col-sm-8">
                        <input type="text" className="form-control" placeholder="Submitted by" name="contactsubmittedBy" value={formFields.contactsubmittedBy} onChange={this.changeEventReact} />
                    </div>
                    </div>

                    <div class="row form-group">
                        <label class="control-label col-sm-4">Agency / Company</label>
                        <div class="col-sm-8">
                            <input type="text" className="form-control" placeholder="Agency / Company" name="contactagencyCompany"  value={formFields.contactagencyCompany} onChange={this.changeEventReact} />
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="row form-group">
                    <label class="control-label col-sm-4">Subject</label>
                    <div class="col-sm-8">
                    <textarea cols="4" rows="4" className="form-control" placeholder="Subject" name="subject" value={formFields.subject} onChange={this.changeEventReact}>
                        </textarea>
                    </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="row form-group">
                    <label class="control-label col-sm-4">Proposal Description</label>
                    <div class="col-sm-8">
                    <textarea cols="4" rows="4" className="form-control" placeholder="Proposal Description" name="proposalDescription" value={formFields.proposalDescription} onChange={this.changeEventReact}>
                        </textarea>
                    </div>
                    </div>
                </div>

                <div className="row col-sm-12">
                    <div className="col-sm-4 col-xs-12">
                        <div className="form-group">
                            <label >Site Name:</label>
                            <input type="text" className="form-control col-sm-10 col-xs-12" placeholder="Site Name" name="siteName" value={formFields.siteName} onChange={this.changeEventReact} />
                        </div>                                       
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <div className="form-group">
                            <label>Site Description:</label>
                            <input type="text" className="form-control col-sm-10 col-xs-12" placeholder="Site Description" name="siteDescription" value={formFields.siteDescription} onChange={this.changeEventReact} />
                        </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <div className="form-group">
                            <label>Location:</label>
                            <input type="text" className="form-control col-sm-10 col-xs-12" placeholder="Location" name="location" value={formFields.location} onChange={this.changeEventReact} />
                        </div>
                    </div> 
                </div>
            </div>
            </div>
                <div class="text-center">
                    <button id="submitCase" type="button" className="btn btn-primary" onClick={() => this.backToListOfCases()}>Back</button>
                </div>
                </form>
            </div>
        )
    }
}

export default ViewCase
