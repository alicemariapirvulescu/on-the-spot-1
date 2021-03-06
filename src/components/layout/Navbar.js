import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import Logo from '../../img/logo.svg'

const Navbar = (props) =>{
    const {auth} = props;
    const links = auth.uid ?  <SignedInLinks/> : <SignedOutLinks />;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' > <img src={Logo} className="navbar-brand" alt="" style={{maxHeight:'50px', width:'auto'}}/> </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse d-flex w-100" id="navbarSupportedContent">            
            {links}
        </div>
        </nav>
    )
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Navbar);