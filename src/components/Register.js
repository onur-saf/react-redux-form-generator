import React from 'react'
import {connect} from 'react-redux'
import  {setFields} from '../actions'
import CreateForm from './CreateForm'
const renderInput=({input,label,type,meta })=>{
    return (
        
      <div className={meta.touched && meta.error ?  "field error" :"field"}>
        <label>{label}</label>
        <input type={type} autoComplete="off" {...input} />
        {meta.touched && meta.error ? (
          <div className="ui error message ">
            <div className="header">{meta.error}</div>{" "}
          </div>
        ) : undefined}
      </div>
    )
}

const fields = [
    {
        name:"name",
        label:"Name : ",
        render:renderInput
    },
    {
        name:"lastname",
        label:"Lastname : ",
        render:renderInput
    },
    {
        name:"username",
        label:"Username : ",
        render:renderInput
    },
    {
        name:"password",
        label:"Password : ",
        type:"password",
        render:renderInput
    }
]

class Register extends React.Component{
    render(){
        return (
            <div>
                <CreateForm />
            </div>
        )
    }
}

export default connect(null,setFields(fields)) (Register)