import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss';
import * as actions from "../../../store/actions"
import './ManageDoctor.scss'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import {CRUD_ACTIONS, LANGUAGES} from '../../../utils'
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';
import {getDetailInforDoctor} from "../../../services/userServive"
const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
    constructor (props){
        super(props)
        this.state={
          contentMarkdown:'',
          contentHTML:'',
          selectedOption:'',
          description:'',
          listDoctors:[],
          hasOlData:false,


          listPrice:[],
          listPayment:[],
          listProvince:[],
          selectedPrice:'',
          selectedPayment:'',
          selectProvince:'',
          nameClinic:'',
          addressClinic:'',
          note:''
        }
    }
    componentDidMount(){
        this.props.fetchAllDoctors()
        this.props.getAllRequiredDoctorInfor()
    }
    buidDataInputSelect=(inputData,type)=>{
        let result = []
        let {language}=this.props;
        if(inputData && inputData.length >0){
            inputData.map((item,index)=>{
                let object ={}
                let labelVi = type==='USERS'?`${item.lastName} ${item.firstName}` : item.valueVi
                let labelEn = type==='USERS'?`${item.firstName} ${item.lastName}`: item.valueEn
                object.label =language===LANGUAGES.VI ? labelVi : labelEn
                object.value =item.id;
                result.push(object)
            })
           
        }
        return result;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
       if(prevProps.allDoctors !== this.props.allDoctors){
       let dataSelect =this.buidDataInputSelect(this.props.allDoctors,'USERS')
        this.setState({
            listDoctors:dataSelect
        })
       }
       if(prevProps.language !== this.props.language){
        let dataSelect =this.buidDataInputSelect(this.props.allDoctors)
        this.setState({
            listDoctors:dataSelect
        })
       }
       if(prevProps.allRequiredDoctorInfor !== this.props.allRequiredDoctorInfor){
            let {resPayment,resPrice,resProvince}=this.props.allRequiredDoctorInfor
            let dataSelectPrice =this.buidDataInputSelect(resPrice)
            let dataSelectPayment =this.buidDataInputSelect(resPayment)
            let dataSelectPriceProvince =this.buidDataInputSelect(resProvince)

                console.log('data new',dataSelectPrice,dataSelectPayment,dataSelectPriceProvince)
            this.setState({
                listPrice:dataSelectPrice,
                listPayment:dataSelectPayment,
                listProvince:dataSelectPriceProvince,
            })
       }
    }
  
     handleEditorChange=({ html, text })=> {
        this.setState({
            contentMarkdown:text,
            contentHTML:html,
        })
  }
  handleSaveContentMardown=()=>{
    let {hasOlData}=this.state;
    this.props.saveDetailDoctor({
        contentHTML:this.state.contentHTML,
        contentMarkdown:this.state.contentMarkdown,
        description:this.state.description,
        doctorId:this.state.selectedOption.value,
        action:hasOlData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE
    })
  }
  handleChangeSelect =async (selectedOption) => {
   this.setState({ selectedOption })
   let res= await getDetailInforDoctor(selectedOption.value)
   if(res && res.errCode ===0 && res.data && res.data.Markdown){
        let markdown=res.data.Markdown;
        this.setState({
        contentHTML:markdown.contentHTML,
        contentMarkdown:markdown.contentMarkdown,
        description:markdown.description,
        hasOlData:true
        })
   }else{
    this.setState({
        contentHTML:'',
        contentMarkdown:'',
        description:'',
        hasOlData:false
        })
   }
   console.log('quocloc',res)

     // console.log(`Option selected:`, this.state.selectedOption)
    
  };
  handleOnChangeDesc=(event)=>{
    this.setState({
        description:event.target.value
    })
  }
    render() {
        let{hasOlData}=this.state;

        return (
            <div className='manage-doctor-container'>
             <div className='manage-doctor-title'>
                <FormattedMessage id="admin.manage-doctor.title"/>
                </div>
                <div className='more-infor'>
                <div className='content-left form-group'>
                    <label><FormattedMessage id="admin.manage-doctor.select-doctor"/></label>
                        <Select
                            value={this.state.selectedOption}
                             onChange={this.handleChangeSelect}
                            options={this.state.listDoctors}
                            placeholder={'Chọn bác sĩ'}
                             />
                            </div>
                    <div className='content-right'>
                    <label><FormattedMessage id="admin.manage-doctor.intro"/></label>
                    <textarea className='form-control'
                        onChange={(event)=>this.handleOnChangeDesc(event)}
                        value={this.state.description}
                    >
                        
                    </textarea>
                    </div>
                </div>
                <div className='more-infor-extra row'>
                    <div className='col-4 form-group'>
                        <label>Chọn giá</label>
                        <Select
                            // value={this.state.selectedOption}
                             onChange={this.handleChangeSelect}
                            options={this.state.listPrice}
                            placeholder={'Chọn giá'}
                             />
                    </div>
                    <div className='col-4 form-group'>
                        <label>Chọn phương thức thanh toán</label>
                        <Select
                            // value={this.state.selectedOption}
                            //  onChange={this.handleChangeSelect}
                            options={this.state.listPayment}
                            placeholder={'Chọn phương thức thanh toán'}
                             />
                    </div>
                    <div className='col-4 form-group'>
                        <label>Chọn Tỉnh thành</label>
                        <Select
                            // value={this.state.selectedOption}
                            //  onChange={this.handleChangeSelect}
                            options={this.state.listProvince}
                            placeholder={'Chọn Tỉnh thành'}
                             />
                    </div>
                    <div className='col-4 form-group'>
                        <label>Tên phong khám</label>
                        <input className='form-control'/>
                    </div>
                    <div className='col-4 form-group'>
                        <label>Địa chỉ phong khám</label>
                        <input className='form-control'/>
                    </div>
                    <div className='col-4 form-group'>
                        <label>Note</label>
                        <input className='form-control'/>
                    </div>
                </div>
                <div className='manage-doctor-editor'>
                <MdEditor 
                style={{ height: '500px' }} 
                renderHTML={text => mdParser.render(text)} 
                onChange={this.handleEditorChange} 
                value={this.state.contentMarkdown}
                />
                </div>
                <button onClick={()=>this.handleSaveContentMardown()}
                 className={hasOlData ===true ? 'save-content-doctor' : 'create-content-doctor'}>
                    {hasOlData ===true ? 
                    <sapn><FormattedMessage id="admin.manage-doctor.save"/></sapn> 
                    : <span><FormattedMessage id="admin.manage-doctor.add"/></span>
                      }
                </button>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
       allDoctors:state.admin.allDoctors,
       allRequiredDoctorInfor:state.admin.allRequiredDoctorInfor
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDoctors:()=>dispatch(actions.fetchAllDoctors()),
        getAllRequiredDoctorInfor:()=>dispatch(actions.getRequireDoctorInfor()),

        saveDetailDoctor:(data)=>dispatch(actions.saveDetailDoctor(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
