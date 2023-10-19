import React, { Component } from 'react';
import { connect } from "react-redux";
import './DetailSpecialty.scss'
import { FormattedMessage } from 'react-intl';
import HomeHeader from '../../HomePage/HomeHeader';
import DoctorSchedule from '../Doctor/DoctorSchedule';
import DoctorExtraInfor from '../Doctor/DoctorExtraInfor';
import ProfileDoctor from '../Doctor/ProfileDoctor';


class DetailSpecialty extends Component {
  constructor(props){
    super(props);
    this.state={
        arrDoctorId:[7,8,9]
    }
  }
  async componentDidMount(){
   
    
}


 async componentDidUpdate(prevProps, prevState, snapshot){
    if(this.props.language !== prevProps.language){
    
    }
     

}

    
    render() {
        let {arrDoctorId}=this.state
       return(
        <div>
            <>
            <div className='detail-specialty-container'>
            <HomeHeader/>
                <div className='detail-specialty-body'>

            <div className='description-spcialty'>

            </div>
            
            {arrDoctorId && arrDoctorId.length >0 && 
            arrDoctorId.map((item,index)=>{
                return(

            <div className='each-doctor'  key={index}>
                <div className='dt-content-left'>
                    <div className='profile-doctor'>
                       
                        <ProfileDoctor
                        doctorId={item}
                        isShowDescriptionDoctor={true}
                        //dataTime={dataTime}
                        />
                    </div>
                </div>
                <div className='dt-content-right'>
                    <div className='doctor-schdule'>
                <DoctorSchedule
                        doctorIdFromParent={item}
                       
                    />
                    </div>
                    <div className='doctor-extra-infor'>

                    <DoctorExtraInfor
                        doctorIdFromParent={item}
                    />
                    </div>
                </div>

            </div>

                   
                )
            })
            }
            </div>

            </div>
            </>
        </div>
       )
       
    }
}

const mapStateToProps = state => {
    return {
        language:state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);
