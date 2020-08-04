import React, { useEffect } from "react";
import useForm from '../useForm';
import { connect } from "react-redux";
import * as actions from "../../actions/table";
import ButterToast, { Cinnamon } from "butter-toast";

const initialFieldValues = {
  name: '',
  zone: '', 
  active: ''
}

const TableForm = (props) => {
  useEffect(() => {
    if (props.currentId !== 0){
        setValues({
            ...props.tableList.find(x => x._id === props.currentId)
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
    return Object.values(temp).every(x => x === "")
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
      if(props.currentId === 0)
        props.createTable(values, onSuccess)
      else
        props.updateTable(props.currentId, values, onSuccess)
    }
  }

  return (
    <div className="fields">
      <h2>Add Table</h2>
      <form className="ui form" autoComplete="off" noValidate  onSubmit={handleSubmit}>
        <div className="seven wide field">
          <label>
            Name:
          </label> 
          <input 
            type="text" 
            name="name" 
            placeholder="Table Name"
            values={values.name} 
            onChange={handleInputChange}
          />
        </div>
        <div className="seven wide field">
          <label>
            Zone:
          </label> 
          <input 
            type="text" 
            name="zone" 
            placeholder="Zone Name"
            values={values.zone} 
            onChange={handleInputChange}
          />
        </div>
        <div className="three wide field">
          <label>
            Is Active:
          </label> 
          <select>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>
        <input className="ui button" type="submit" value="Submit"/>
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