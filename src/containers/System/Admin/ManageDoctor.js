import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss';
import * as actions from "../../../store/actions"
import './ManageDoctor.scss'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import {LANGUAGES} from '../../../utils'
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
    constructor (props){
        super(props)
        this.state={
          contenMarkdown:'',
          contentHTML:'',
          selectedOption:'',
          description:'',
          listDoctors:[]

        }
    }
    componentDidMount(){
        this.props.fetchAllDoctors()
    }
    buidDataInputSelect=(inputData)=>{
        let result = []
        let {language}=this.props;
        if(inputData && inputData.length >0){
            inputData.map((item,index)=>{
                let object ={}
                let labelVi = `${item.lastName} ${item.firstName}`
                let labelEn = `${item.firstName} ${item.lastName}`
                object.label =language===LANGUAGES.VI ? labelVi : labelEn
                object.value =item.id;
                result.push(object)
            })
           
        }
        return result;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
       if(prevProps.allDoctors !== this.props.allDoctors){
       let dataSelect =this.buidDataInputSelect(this.props.allDoctors)
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
    }
  
     handleEditorChange=({ html, text })=> {
        this.setState({
            contenMarkdown:text,
            contentHTML:html,
        })
  }
  handleSaveContentMardown=()=>{
    console.log('state',this.state)
    this.props.saveDetailDoctor({
        contentHTML:this.state.contentHTML,
        contentMarkdown:this.state.contenMarkdown,
        description:this.state.description,
        doctorId:this.state.selectedOption.value
    })
    console.log('loc',this.state)
  }
  handleChange = selectedOption => {
    //console.log('quocloc',selectedOption)
   this.setState({ selectedOption })
     // console.log(`Option selected:`, this.state.selectedOption)
    
  };
  handleOnChangeDesc=(event)=>{
    this.setState({
        description:event.target.value
    })
  }
    render() {
        console.log('lll',this.state)
        return (
            <div className='manage-doctor-container'>
             <div className='manage-doctor-title'>
                Tạo Thêm Thông Tin Doctor
                </div>
                <div className='more-infor'>
                <div className='content-left form-group'>
                    <label>Chọn bác sĩ</label>
                        <Select
                            value={this.state.selectedOption}
                             onChange={this.handleChange}
                            options={this.state.listDoctors}
                             />
                            </div>
                    <div className='content-right'>
                    <label>Thông tin giới thiệu</label>
                    <textarea className='form-control' rows='4'
                        onChange={(event)=>this.handleOnChangeDesc(event)}
                        value={this.state.description}
                    >
                        aaaa
                    </textarea>
                    </div>
                </div>
                <div className='manage-doctor-editor'>
                <MdEditor 
                style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} 
                onChange={this.handleEditorChange} />
                </div>
                <button onClick={()=>this.handleSaveContentMardown()} className='save-content-doctor'>
                    Lưu Thông Tin</button>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,

       allDoctors:state.admin.allDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDoctors:(id)=>dispatch(actions.fetchAllDoctors()),
        saveDetailDoctor:(data)=>dispatch(actions.saveDetailDoctor(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
