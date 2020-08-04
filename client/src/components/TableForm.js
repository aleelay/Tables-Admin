import React, { useEffect, useState } from "react";
import useForm from './useForm';
import { connect } from "react-redux";
import * as actions from "../actions/table";
import ButterToast, { Cinnamon } from "butter-toast";

const initialFieldValues = {
  name: '',
  zone: '', 
  active: ''
}

const TableForm = (props) => {
  useEffect(() => {
    if (props.currentId != 0){
        setValues({
            ...props.tableList.find(x => x._id == props.currentId)
        })
        setErrors({})
    }
  }, [props.currentId])
  const validate = () => {
    let temp = { ...errors }
    temp.name = values.name ? "" : "This field is required."
    setErrors({
        ...temp
    })
    return Object.values(temp).every(x => x == "")
  }

  var {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFieldValues,props.setCurrentId)

  const handleSubmit = e => {
    e.preventDefault();
    const onSuccess = () => {
            ButterToast.raise({
                content: <Cinnamon.Crisp title="Tables Admin"
                    content="Submitted successfully"
                    scheme={Cinnamon.Crisp.SCHEME_PURPLE}
                />
            })
            resetForm()
        }
    if (validate()) {
      if(props.currentId == 0)
        props.createTable(values, onSuccess)
      else
        props.updateTable(props.currentId, values, onSuccess)
    }
  }

  return (
    <div>
      <h2>Form</h2>
      <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
        <label>
          Name: 
          <input 
            type="text" 
            name="name" 
            values={values.name} 
            onChange={handleInputChange}
          />
        </label>
        <label>
          Zone: 
          <input 
            type="text" 
            name="zone" 
            values={values.zone} 
            onChange={handleInputChange} 
          />
        </label>
        <label>
          active: 
          <input 
            type="text" 
            name="active" 
            values={values.active} 
            onChange={handleInputChange}
          />
        </label>
        <input type="submit" value="Submit"/>
      </form>
      </div>
  );
}
const mapStateToProps = state => ({
  tableList: state.table.list
})

const mapActionToProps = {
  createTable: actions.create, 
  updateTable: actions.update
}
export default connect(mapStateToProps, mapActionToProps)(TableForm);