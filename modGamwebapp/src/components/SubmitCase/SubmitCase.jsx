import React, { Component } from 'react'
import '../SubmitCase/SubmitCase.css';
import Header from '../Header/Header';
import {submitCase} from '../../services/Api';
import { useFormik } from 'formik';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


export class SubmitCase extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
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
            csmNo: "",
            caseSubmissionNo: "",
            caseType: this.state.caseType,
            caseSubType: this.state.caseSubType,
            submittedDate: new Date(),
            caseStatus: "SUBMITTED",
            subject: this.state.subject,
            proposalDescription: this.state.proposalDescription,
            reason : "",
            // contactDetails : {
            //     submittedBy: this.state.contactsubmittedBy,
            //     emailAddress: this.state.contactemailAddress,
            //     submittedDate: "2020-06-25",
            //     agencyCompany: this.state.contactagencyCompany
            // }
            // ,
            // sites : [
            //     {
            //         siteNo: "1",
            //         siteName : this.state.siteName,
            //         siteDescription: this.state.siteDescription,
            //         location: this.state.location
            //     }
            // ]

        };
        submitCase(submitCaseInput)
        .then((result)=>{
            console.log(result)
            if(result.data.status == "Success"){
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

    handleSubmit = (values, {
        props = this.props,
        setSubmitting
     }) => {
        setSubmitting(false);
        return;
     }
    //  

    render() {
        const formFields = {...this.state};
        console.log(formFields);
        const mystyle = {
            marginLeft: 10
        };
        const initVal = {
            caseType: formFields.caseType,
            caseSubType: formFields.caseSubType,
            contactsubmittedBy: formFields.contactsubmittedBy,
            contactagencyCompany: formFields.contactagencyCompany,
            subject: formFields.subject,
            proposalDescription: formFields.proposalDescription


        };
        const validationSchema = Yup.object({
            // caseType: Yup.string("Enter a Case Type")
            // .required("Case Type is required"),
            // caseSubType: Yup.string("Enter a Subcase Type")
            // .required("Subcase Type is required")
            // caseSubType: Yup.string().required('Subcase Type is required')

         });
        return (
            <Formik
                initialValues={initVal}
                validate={(values) => {
                    let errors = {};  
                    if(!formFields.caseType)
                        errors.caseType = "Case Type is Required";
                    if(!formFields.caseSubType)
                        errors.caseSubType = "Casesub Type is Required";
                    if(!formFields.contactsubmittedBy)
                        errors.contactsubmittedBy = "SubmittedBy is Required";
                    if(!formFields.contactagencyCompany)
                        errors.contactagencyCompany = "Agency / Company is Required";
                    if(!formFields.subject)
                        errors.subject = "Subject is Required";
                    if(!formFields.proposalDescription)
                        errors.proposalDescription = "Proposal Description is Required";
                    return errors;
                    }
                }
                onSubmit={this.submitCase}
                // validationSchema={validationSchema}
                render={formProps => {
                    return(
                        <div>
                            <Header></Header>
                            <h2 className="text-center">Case Submission Form</h2>
                            <Form className="form-horizontal">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="row form-group">
                                            <label className="control-label col-sm-4">Case Type</label>
                                            <div className="col-sm-8">
                                                <Field as="select" className="form-control" id="caseType" name="caseType" value={formFields.caseType} onChange={this.changeEventReact}>
                                                    <option value="">--Select--</option>
                                                    <option value="BA">BA Application</option>
                                                    <option value="SA">SA Application</option>
                                                    <option value="MA">MA Application</option>
                                                    <option value="DA">DA Application</option>
                                                    <option value="RA">RA Application</option>
                                                    <option value="others">Others</option>
                                                </Field>
                                                <ErrorMessage className="errorMsg" name="caseType">
                                                    { msg => <div style={{ color: 'red' }}>{msg}</div> }
                                                </ErrorMessage>
                                            </div>
                                        </div>

                                        <div class="row form-group">
                                            <label class="control-label col-sm-4">Case SubType</label>
                                            <div class="col-sm-8">
                                                <Field as="select" class="form-control" id="caseSubType" name="caseSubType" value={formFields.caseSubType} onChange={this.changeEventReact}>
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
                                                </Field>
                                                <ErrorMessage className="errorMsg" name="caseSubType">
                                                    { msg => <div style={{ color: 'red' }}>{msg}</div> }
                                                </ErrorMessage>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="row form-group">
                                        <label class="control-label col-sm-4">Submitted By</label>
                                        <div class="col-sm-8">
                                            <Field type="text" className="form-control" placeholder="Submitted by" name="contactsubmittedBy" value={formFields.contactsubmittedBy} onChange={this.changeEventReact} />
                                            <ErrorMessage className="errorMsg" name="contactsubmittedBy">
                                                    { msg => <div style={{ color: 'red' }}>{msg}</div> }
                                            </ErrorMessage>
                                        </div>
                                        </div>

                                        <div class="row form-group">
                                            <label class="control-label col-sm-4">Agency / Company</label>
                                            <div class="col-sm-8">
                                                <Field type="text" className="form-control" placeholder="Agency / Company" name="contactagencyCompany"  value={formFields.contactagencyCompany} onChange={this.changeEventReact} />
                                                <ErrorMessage className="errorMsg" name="contactagencyCompany" component="div"/>
                                                    {/* { msg => 
                                                        <div style={{ color: 'red' }}>{msg}</div>
                                                     }
                                                </ErrorMessage> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="row form-group">
                                        <label class="control-label col-sm-4">Subject</label>
                                        <div class="col-sm-8">
                                        <Field as="textarea" cols="4" rows="4" className="form-control" placeholder="Subject" name="subject" value={formFields.subject} onChange={this.changeEventReact}>
                                        </Field>
                                        <ErrorMessage className="errorMsg" name="subject">
                                                { msg => <div style={{ color: 'red' }}>{msg}</div> }
                                        </ErrorMessage>
                                        </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="row form-group">
                                        <label class="control-label col-sm-4">Proposal Description</label>
                                        <div class="col-sm-8">
                                        <Field as="textarea" cols="4" rows="4" className="form-control" placeholder="Proposal Description" name="proposalDescription" value={formFields.proposalDescription} onChange={this.changeEventReact}>
                                        </Field>
                                        <ErrorMessage className="errorMsg" name="proposalDescription">
                                                { msg => <div style={{ color: 'red' }}>{msg}</div> }
                                        </ErrorMessage>
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
                                <button id="submitCase" type="submit" className="btn btn-primary">Submit Case</button>
                                <button style={mystyle} id="clear" type="button" className="btn btn-primary" onClick={this.clearAll}>Reset</button>
                            </div>
                            {/* <button type="submit" disabled={formProps.isSubmitting}>
                                    Submit Form
                                </button> */}
                            </Form>
                        </div>
                       
                    );
                 }}
                 />);
            // <div>
            //     <Header></Header>
            //     <h2 className="text-center">Case Submission Form</h2>
            //     <form className="form-horizontal">
            //     <div className="container-fluid">
                    
            //         <div className="row">

            //     <div className="col-sm-6">
            //         <div className="row form-group">
            //         <label className="control-label col-sm-4">Case Type</label>
            //         <div className="col-sm-8">
            //             <select className="form-control" id="caseType" name="caseType" value={formFields.caseType} onChange={this.changeEventReact}>
            //                 <option value="">--Select--</option>
            //                 <option value="BA">BA Application</option>
            //                 <option value="SA">SA Application</option>
            //                 <option value="MA">MA Application</option>
            //                 <option value="DA">DA Application</option>
            //                 <option value="RA">RA Application</option>
            //                 <option value="others">Others</option>
            //             </select>
            //         </div>
            //         </div>
            //         <div className="row form-group">
            //         <label className="control-label col-sm-4">Case SubType</label>
            //         <div className="col-sm-8">
            //             <select className="form-control" id="caseSubType" name="caseSubType" value={formFields.caseSubType} onChange={this.changeEventReact}>
            //                 <option value="">--Select--</option>
            //                 <option value="BA-12">BA-12 Application</option>
            //                 <option value="BA-14">BA-14 Application</option>
            //                 <option value="SA-23">SA-23 Application</option>
            //                 <option value="SA-12">SA-12 Application</option>
            //                 <option value="MA-32">MA-32 Application</option>
            //                 <option value="MA-12">MA-12 Application</option>
            //                 <option value="DA-34">DA-34 Application</option>
            //                 <option value="DA-12">DA-12 Application</option>
            //                 <option value="RA-32">RA-32 Application</option>
            //                 <option value="RA-12">RA-12 Application</option>
            //                 <option value="others">Others</option>
                            
            //             </select>
            //         </div>
            //         </div>
            //     </div>

            //     <div className="col-sm-6">
            //         <div className="row form-group">
            //         <label className="control-label col-sm-4">Submitted By</label>
            //         <div className="col-sm-8">
            //             <input type="text" className="form-control" placeholder="Submitted by" name="contactsubmittedBy" value={formFields.contactsubmittedBy} onChange={this.changeEventReact} />
            //         </div>
            //         </div>

            //         <div className="row form-group">
            //             <label className="control-label col-sm-4">Agency / Company</label>
            //             <div className="col-sm-8">
            //                 <input type="text" className="form-control" placeholder="Agency / Company" name="contactagencyCompany"  value={formFields.contactagencyCompany} onChange={this.changeEventReact} />
            //             </div>
            //         </div>
            //     </div>

            //     <div className="col-sm-6">
            //         <div className="row form-group">
            //         <label className="control-label col-sm-4">Subject</label>
            //         <div className="col-sm-8">
            //         <textarea cols="4" rows="4" className="form-control" placeholder="Subject" name="subject" value={formFields.subject} onChange={this.changeEventReact}>
            //             </textarea>
            //         </div>
            //         </div>
            //     </div>

            //     <div className="col-sm-6">
            //         <div className="row form-group">
            //         <label className="control-label col-sm-4">Proposal Description</label>
            //         <div className="col-sm-8">
            //         <textarea cols="4" rows="4" className="form-control" placeholder="Proposal Description" name="proposalDescription" value={formFields.proposalDescription} onChange={this.changeEventReact}>
            //             </textarea>
            //         </div>
            //         </div>
            //     </div>

            //     <div className="row col-sm-12">
            //         <div className="col-sm-4 col-xs-12">
            //             <div className="form-group">
            //                 <label >Site Name:</label>
            //                 <input type="text" className="form-control col-sm-10 col-xs-12" placeholder="Site Name" name="siteName" value={formFields.siteName} onChange={this.changeEventReact} />
            //             </div>                                       
            //         </div>
            //         <div className="col-sm-4 col-xs-12">
            //             <div className="form-group">
            //                 <label>Site Description:</label>
            //                 <input type="text" className="form-control col-sm-10 col-xs-12" placeholder="Site Description" name="siteDescription" value={formFields.siteDescription} onChange={this.changeEventReact} />
            //             </div>
            //         </div>
            //         <div className="col-sm-4 col-xs-12">
            //             <div className="form-group">
            //                 <label>Location:</label>
            //                 <input type="text" className="form-control col-sm-10 col-xs-12" placeholder="Location" name="location" value={formFields.location} onChange={this.changeEventReact} />
            //             </div>
            //         </div> 
            //     </div>
            // </div>
            // </div>
            //     <div class="text-center">
            //         <button id="submitCase" type="button" className="btn btn-primary" onClick={this.submitCase}>Submit Case</button>
            //         <button style={mystyle} id="clear" type="button" className="btn btn-primary" onClick={this.clearAll}>Reset</button>
            //     </div>
            //     </form>
            // </div>
        // )
    }
}

export default SubmitCase
