import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './BookingModal.scss'
import {  Modal } from 'reactstrap';

import { classNames } from 'react-select/dist/index-ea9e225d.cjs.prod';


class BookingModal extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  async componentDidMount(){
   
    
}


 async componentDidUpdate(prevProps, prevState, snapshot){
    if(this.props.language !== prevProps.language){
    }
}

    
    render() {
        // toggle={ } 
        let {isOpenModal,closeBookingClose,dataTime}=this.props
       return(
        <Modal isOpen={isOpenModal} className={'booking-modal-container'}
        size="lg"
        centered
        // backdrop={true}
        >
            <div className='booking-modal-content'>
                <div className='booking-modal-header'>
                    <span className='left'>Thông tin đặt lịch khám bệnh</span>
                    <span className='right'
                    onClick={closeBookingClose}
                    ><i className='fas fa-times'></i></span>
                </div>
                <div className='booking-modal-body'>
                    {/* {JSON.stringify(dataTime)} */}
                    <div className='doctor-ìnor'>

                    </div>
                    <div className='price'>
                        gia kham
                    </div>
                    <div className='row'>
                        <div className='col-6 from-group'>
                            <label>Ho ten</label>
                            <input className='form-control'></input>
                        </div>
                        <div className='col-6 from-group'>
                            <label>Số điện thoại</label>
                            <input className='form-control'></input>
                        </div>
                        <div className='col-6 from-group'>
                            <label>Dia chi Email</label>
                            <input className='form-control'></input>
                        </div>
                        <div className='col-6 from-group'>
                            <label>Địa chỉ liên hệ</label>
                            <input className='form-control'></input>
                        </div>
                        <div className='col-12 from-group'>
                            <label>Lý do khám</label>
                            <input className='form-control'></input>
                        </div>
                        <div className='col-6 from-group'>
                            <label>Đặt cho ai</label>
                            <input className='form-control'></input>
                        </div>
                        <div className='col-6 from-group'>
                            <label>Giới tính</label>
                            <input className='form-control'></input>
                        </div>
                    </div>
                </div>
                <div className='booking-modal-footer'>
                    <button className='btn-booking-confirm'
                    onClick={closeBookingClose}
                    >Xác nhận</button>
                    <button className='btn-booking-cancel'
                    onClick={closeBookingClose}
                    >Hủy</button>
                </div>
            </div>
        </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
