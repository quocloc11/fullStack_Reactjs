import React, { Component } from 'react';
import { connect } from "react-redux";
import './DetailSpecialty.scss'
import { FormattedMessage } from 'react-intl';
import HomeHeader from '../../HomePage/HomeHeader';


class DetailSpecialty extends Component {
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
       return(
        <div>
            <>
            <HomeHeader/>
            <div>hello world</div>
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