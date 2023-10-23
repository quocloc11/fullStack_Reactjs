import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FormattedMessage} from 'react-intl';
import Slider from "react-slick"


class HandBook extends Component {

    render() {
        
        return (
            <div className=' section-share section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm nang</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                    <Slider {...this.props.settings}>
                <div className='section-customize'>
                    <div className='bg-image section-handbook1'/>
                    <div>BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam kết nối người dùng với trên 200 bệnh viện - phòng khám uy tín, hơn 1,500 bác sĩ chuyên khoa giỏi và hàng nghìn dịch </div>
                </div>
                <div className='section-customize'>
                <div className='bg-image section-handbook2'/>
                    <div>Chấn thương thể thao là các loại tổn thương, chấn thương xảy ra trong quá trình thi đấu thể thao hoặc luyện tập. Trong quá trình hoạt động thể thao, bất cứ bộ phận nào của cơ thể cũng có thể bị tổn thương.</div>
                </div>
                <div className='section-customize'>
                <div className='bg-image section-handbook3'/>
                    <div>Nếu bạn đang cần một chăm sóc viên chuyên nghiệp, đáng tin cậy, thay bạn kề cạnh chăm sóc, hỗ trợ người thân yêu của mình để yên tâm công tác,... thì WeCare247 là lựa chọn hàng đầu dành cho bạn.</div>
                </div>
                <div className='section-customize'>
                <div className='bg-image section-handbook4'/>
                    <div>Khám sức khỏe lái xe là dịch vụ mà hạng bằng lái nào cũng yêu cầu, từ hạng A1 cơ bản đến hạng FB2 dành cho các tài xế lái xe trọng tải lớn, có rơ-mooc. Danh mục khám sức khỏe lái xe thông thường sẽ bao gồm:</div>
                </div>
                <div className='section-customize'>
                <div className='bg-image section-handbook5'/>
                    <div>Khám chuyên khoa lâm sàng: kiểm tra huyết áp, chiều cao, cân nặng, thị lực, răng - hàm - mặt, cơ quan vận động, hô hấp...Khám phụ khoa đối với nữ.</div>
                </div>
                <div className='section-customize'>
                <div className='bg-image section-handbook6'/>
                    <div>Chấn thương trong thể thao là tình trạng tổn thương ở một hoặc nhiều bộ phận cơ thể thường liên quan đến các hệ thống cơ, xương, khớp, mô sụn, dây chằng.</div>
                </div>
               </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);

