import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FormattedMessage} from 'react-intl';


class HomeFooter extends Component {

    render() {
        
        return (
            <div className='home-footer'>
               <p>&copy; 2023 Tran Quoc Loc More information, please visit my youtube .
                <a target="_blank" href="https://www.youtube.com/watch?v=6oEm9ahwHRY&t=299s"> 
                &#8594; Click here &#8592;</a></p>
                </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
       
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);

