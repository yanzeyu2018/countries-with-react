import React, { Component } from 'react';

class Footer extends Component {    

    render(){
        return(
            <div>
                <h6>Powered by MMSugarMUM</h6>
                <h6>Copyright 2018 - {new Date().getFullYear()}</h6>
                <h6>All rights researved</h6>
                
            </div>
        )
    }
}


export default Footer;