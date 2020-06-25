import React, { Component } from 'react'
import Header from '../Header/Header';
import {submitCase} from '../../services/Api';
import { useFormik } from 'formik';


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

        this.submitCase = this.submitCase.bind(this);
        
        
    }

    changeEventReact = (e)=> {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state);
    }

    submitCase = event =>{ 
        console.log(this.state);
        const submitCaseInput = {
            csmNo: "1234",
            caseSubmissionNo: "1234",
            caseType: this.state.caseType,
            caseSubType: this.state.caseSubType,
            submittedDate: "2020-06-25",
            caseStatus: this.state.caseStatus,
            subject: this.state.subject,
            proposalDescription: this.state.proposalDescription,
            reason : "",
            contactDetails : {
                submittedBy: this.state.contactsubmittedBy,
                emailAddress: this.state.contactemailAddress,
                submittedDate: "2020-06-25",
                agencyCompany: this.state.contactagencyCompany
            },
            sites : [
                {
                    siteNo: "1",
                    siteName : this.state.siteName,
                    siteDescription: this.state.siteDescription,
                    location: this.state.location
                }
            ]

        };
        submitCase(submitCaseInput)
        .then((result)=>{
            console.log(result)
            if(result.status == 200){
                this.clearAll();
                alert("Case submitted successfully");
            }
        });
        
    }

    clearAll = event =>{ 
        this.setState({
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
        })
    }

    /*handleChange(i, event) {
        let values = [...this.state.sites];
        values[i] = event.target.value;
        this.setState({ values });
    }

     addClick(){
        this.setState(prevState => ({ values: [...prevState.values, '']}))
      }

     removeClick(i){
        let values = [...this.state.sites];
        values.splice(i,1);
        this.setState({ values });
     }
     

    generateSites = event =>{
        return this.state.sites.map((el, i) => 
            <div key={i}>
                <div className="row col-sm-12">
                    <div className="col-sm-4 col-xs-12">
                        <div className="form-group">
                            <label >Site Name:</label>
                            <input type="text" className="form-control col-sm-10 col-xs-12"  value={el||''} onChange={this.handleChange.bind(this, i)}  placeholder="Site Name"/>
                        </div>                                       
                    </div>
                </div>
                <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/>
            </div>          
        )
    }*/
    
    render() {
        const formFields = {...this.state};
        console.log(formFields);
        const mystyle = {
            marginLeft: 10
          };
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
                                        <select class="form-control col-sm-6 col-xs-12" id="caseType" name="caseType" value={formFields.caseType} onChange={this.changeEventReact}>
                                            <option value="">--Select--</option>
                                            <option value="FA">Formal Application</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label >Case SubType:</label>
                                        <select class="form-control col-sm-6 col-xs-12" id="caseSubType" name="caseSubType" value={formFields.caseSubType} onChange={this.changeEventReact}>
                                            <option value="">--Select--</option>
                                            <option value="FA">FA</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label >Subject:</label>
                                        <input type="text" className="form-control col-sm-6 col-xs-12" name="subject" value={formFields.subject} onChange={this.changeEventReact}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Proposal Description:</label>
                                        <input type="text" className="form-control col-sm-6 col-xs-12" name="proposalDescription" value={formFields.proposalDescription} onChange={this.changeEventReact} />
                                    </div>

                                </div>

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label >Submitted By:</label>
                                        <input type="text" className="form-control col-sm-6 col-xs-12" placeholder="Submitted by" name="contactsubmittedBy" value={formFields.contactsubmittedBy} onChange={this.changeEventReact} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address:</label>
                                        <input type="text" className="form-control col-sm-6 col-xs-12" placeholder="name@email.com" name="contactemailAddress" value={formFields.contactemailAddress} onChange={this.changeEventReact} />
                                    </div>
                                    <div className="form-group">
                                        <label>Agency / Company:</label>
                                        <input type="text" className="form-control col-sm-6 col-xs-12" placeholder="Agency / Company" name="contactagencyCompany"  value={formFields.contactagencyCompany} onChange={this.changeEventReact} />
                                    </div>
                                </div>
                                {/* {this.generateSites()} */}
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

                            <div className="col-sm-12 padTop10">
                                <button id="submitCase" type="button" className="btn btn-primary" onClick={this.submitCase}>Submit Case</button>

                                <button style={mystyle} id="clear" type="button" className="btn btn-primary" onClick={this.clearAll}>Reset</button>

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
