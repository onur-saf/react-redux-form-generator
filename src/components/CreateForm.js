import React from 'react'
import  {connect} from 'react-redux'
import {Field,reduxForm} from 'redux-form'
class CreateForm extends React.Component{
    onSubmit(values){
        console.log(values)
    }
    render() {
        return (
            <div>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    {this.props.fields.map(f=>{
                      return  <Field name={f.name} component={f.render}  label={f.label} type={f.type} />
                    })
                    }
                    <button className="ui button primary"> Submit </button>
                </form>
            </div>
        )
    }
}
const validate = (formValues,{fields})=>{
    const errors = {}
    fields.map(f=> {
        if(!formValues[f.name]){
            errors[f.name]="required"
        }
    })
    return errors
}
const mapStateToProps = (state)=>{
    return {fields:state.fields}
}
const formWrapped= reduxForm({
    form:'CreateForm',
    validate,
}) (CreateForm)
export default connect(mapStateToProps)(formWrapped)