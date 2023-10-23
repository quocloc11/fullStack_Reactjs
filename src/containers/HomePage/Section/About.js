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
               <iframe width="100%" height="400px" src="https://www.youtube.com/embed/tpPmn2ZuOV8" title="Highlights | ARGENTINA vs PHÁP | Phi thường Mbappe, mãn nhãn Messi, CK tuyệt đỉnh | World Cup 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              
                </div>
                <div className='content-right'>
                    <p>
                    Đặt lịch khám bệnh: Tiết kiệm, thông minh và hiệu quả
                    SKĐS - Thay vì đi khám theo cách truyền thống, mất thời gian để xếp hàng lấy số, làm thủ tục và chờ đến lượt, thì hiện nay người bệnh đã đặt lịch khám chỉ cần đến cơ sở y tế trước 15 – 30 phút. Đặt lịch cũng giúp việc đi khám có kế hoạch hơn, giảm thiểu thời gian chờ đợi, người bệnh có sự chuẩn bị đầy đủ, kỹ lưỡng trước khi đi khám.
                    Giải pháp tiết kiệm, thông minh và hiệu quả

Giải pháp của BookingCare là xây dựng nền tảng công nghệ kết nối mạng lưới bác sĩ giỏi và các cơ sở y tế uy tín với thông tin được xác thực rõ ràng, cập nhật. Ứng dụng công nghệ giúp người bệnh dễ dàng lựa chọn đúng bác sĩ chuyên khoa phù hợp với vấn đề của mình và Đặt lịch khám.

Tiết kiệm, thông minh và hiệu quả 
                    </p>
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

