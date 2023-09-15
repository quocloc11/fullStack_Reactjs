import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FormattedMessage} from 'react-intl';


class About extends Component {

    render() {
        
        return (
            <div className=' section-share section-about'>
               <div className='section-about-header'>
                Truyền Thông nói gì về Trần Quốc Lôc
               </div>
               <div className='section-about-content'>
               <div className='content-left'>
               <iframe width="100%" height="400px" src="https://www.youtube.com/embed/6oEm9ahwHRY" title="NHỮNG BÀI HÁT TIẾNG ANH BẤT HỦ HAY NHẤT MỌI THỜI ĐẠI - NHẠC ÂU MỸ - NHẠC US-UK HAY NHẤT 2022" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className='content-right'>
                    <p>wrting</p>
                </div>
                
               </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);

