import React, { Component } from 'react'
import Header from '../Header/Header';
import {viewCase} from '../../services/Api';


export class ViewCase extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allCases: "",
            csmNo: "",
            caseSubmissionNo: "",
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
            siteNo: "",
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
            if(response.status == 200){
                this.setState({
                    caseType :response.data.caseType,
                    caseSubType :response.data.caseSubType,
                    subject :response.data.subject,
                    proposalDescription :response.data.proposalDescription,
                    siteName : "Jurong East",
                    siteDescription : "Site 2 added",
                    location :"Singapore",
                    contactagencyCompany: "HCL",
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
                <h2 className="text-center">View Record Details</h2>
                <form className="form-horizontal">
                <div className="container-fluid">
                    
                    <div className="row">

                <div className="col-sm-6">
                    <div className="row form-group">
                    <label className="control-label col-sm-4">Record Type</label>
                    <div className="col-sm-8">
                        <select disabled="true" className="form-control" id="caseType" name="caseType" value={formFields.caseType} onChange={this.changeEventReact}>
                            <option value="">--Select--</option>
                            <option value="BA">BA Application</option>
                            <option value="SA">SA Application</option>
                            <option value="MA">MA Application</option>
                            <option value="DA">DA Application</option>
                            <option value="RA">RA Application</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    </div>


                    <div className="row form-group">
                    <label className="control-label col-sm-4">Record SubType</label>
                    <div className="col-sm-8">
                        <select disabled="true"  className="form-control" id="caseSubType" name="caseSubType" value={formFields.caseSubType} onChange={this.changeEventReact}>
                        <option value="">--Select--</option>
                            <option value="BA-12">BA-12 Application</option>
                            <option value="BA-14">BA-14 Application</option>
                            <option value="SA-23">SA-23 Application</option>
                            <option value="SA-12">SA-12 Application</option>
                            <option value="MA-32">MA-32 Application</option>
                            <option value="MA-12">MA-12 Application</option>
                            <option value="DA-34">DA-34 Application</option>
                            <option value="DA-12">DA-12 Application</option>
                            <option value="RA-32">RA-32 Application</option>
                            <option value="RA-12">RA-12 Application</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="row form-group">
                    <label className="control-label col-sm-4">Submitted By</label>
                    <div className="col-sm-8">
                        <input disabled="true" type="text" className="form-control" placeholder="Submitted by" name="contactsubmittedBy" value={formFields.contactsubmittedBy} onChange={this.changeEventReact} />
                    </div>
                    </div>

                    <div className="row form-group">
                        <label className="control-label col-sm-4">Agency / Company</label>
                        <div className="col-sm-8">
                            <input disabled="true" type="text" className="form-control" placeholder="Agency / Company" name="contactagencyCompany"  value={formFields.contactagencyCompany} onChange={this.changeEventReact} />
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="row form-group">
                    <label className="control-label col-sm-4">Subject</label>
                    <div className="col-sm-8">
                    <textarea cols="4" rows="4" disabled="true" className="form-control" placeholder="Subject" name="subject" value={formFields.subject} onChange={this.changeEventReact}>
                        </textarea>
                    </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="row form-group">
                    <label className="control-label col-sm-4">Proposal Description</label>
                    <div className="col-sm-8">
                    <textarea cols="4" rows="4" disabled="true" className="form-control" placeholder="Proposal Description" name="proposalDescription" value={formFields.proposalDescription} onChange={this.changeEventReact}>
                        </textarea>
                    </div>
                    </div>
                </div>

                <div className="row col-sm-12">
                    <div className="col-sm-4 col-xs-12">
                        <div className="form-group">
                            <label >Record Name:</label>
                            <input type="text" disabled="true"  className="form-control col-sm-10 col-xs-12" placeholder="Record Name" name="siteName" value={formFields.siteName} onChange={this.changeEventReact} />
                        </div>                                       
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <div className="form-group">
                            <label>Record Description:</label>
                            <input type="text" disabled="true" className="form-control col-sm-10 col-xs-12" placeholder="Record Description" name="siteDescription" value={formFields.siteDescription} onChange={this.changeEventReact} />
                        </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <div className="form-group">
                            <label>Record Location:</label>
                            <input type="text" disabled="true" className="form-control col-sm-10 col-xs-12" placeholder="Record Location" name="location" value={formFields.location} onChange={this.changeEventReact} />
                        </div>
                    </div> 
                </div>
            </div>
            </div>
                <div className="text-center">
                    <button id="submitCase"  type="button" className="btn btn-primary" onClick={() => this.backToListOfCases()}>Back</button>
                </div>
                </form>
            </div>
        )
    }
}

export default ViewCase
