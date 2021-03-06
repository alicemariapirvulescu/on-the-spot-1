import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import DecideDashboard from './components/dashboard/DecideDashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import FacialRecognition from './components/facialrecognition/FacialRecognition';
import addResume from './components/dashboard/addResume';
import SelectDisability from './components/auth/SelectDisability'
import JobDetails from './components/job/JobDetails';
import addJob from './components/job/addJob'
import JobSummary from './components/job/JobSummary';
import JobList from './components/job/JobList'
import FacialRecognitionRegister from './components/facialrecognition/FacialRecognitionRegister'
import listResume from './components/dashboard/listResume'
import jobWithApplicants from './components/job/jobWithApplicants'
import recruiterProfile from './components/recruiter/recruiterProfile'
import RecruiterDashboard from './components/recruiter/RecruiterDashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={DecideDashboard} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup/:id' component={SignUp} />
            <Route path='/facial' component={FacialRecognition} />
            <Route path='/onboarding' component={SelectDisability} />
            <Route path='/job/:id' component={JobDetails} />
            <Route path='/addJob' component={addJob} />
            <Route path='/onboarding' component={SelectDisability} />
            <Route path='/resume' component={addResume} />
            <Route path="/regface" component={FacialRecognitionRegister} />
            <Route path='/listResume' component={listResume} />
            <Route path='/jobWithApplicants' component={jobWithApplicants} />
            <Route path='/recruiterProfile' component={recruiterProfile} />
            <Route path='/job-rec' component={RecruiterDashboard} />
            <Route path='/add-job' component={addJob} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;