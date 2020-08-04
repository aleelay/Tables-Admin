import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/table";
import TableForm from './TableForm';
import ButterToast, { Cinnamon } from "butter-toast";

const Tables = (props) => {
  const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        props.fetchAllTables()
    }, [])//DidMount
  
    const onDelete = id => {
      const onSuccess = () => {
          ButterToast.raise({
              content: <Cinnamon.Crisp title="Tables Admin"
                  content="Deleted successfully"
                  scheme={Cinnamon.Crisp.SCHEME_PURPLE}
              />
          })
      }
      if (window.confirm('Are you sure to delete this record?'))
          props.deleteTable(id,onSuccess)
  }

  return (
    <div className="table_container">
      {// <TableForm {...{currentId, setCurrentId}} />
      }
      <h2>Tables</h2>
      <div className="ui secondary menu">
        <div className="item">
          <div className="ui header">All Tables</div>
        </div>
        <div className="item">
          <button className="ui right labeled icon button">
            <a href="/tables/add">
              Add Table
              <i className="plus icon"></i>
            </a>
          </button>
        </div>
      </div>
      <div className="ui three doubling cards">
        {props.tableList.map((record, index) =>{
          return(
            <div key={index} className="blue card">
              <div className="content">
                <div className="header">
                  {record.name}
                </div>
                <div className="meta">
                  {record.active ? "Active" : "Inactive"}
                </div>
                <div className="description">
                  Zone: {record.zone}
                </div>
              </div>
              <div className="extra content">
              <div className="ui two buttons">
                <div onClick={()=>setCurrentId(record._id)} className="ui basic blue button">Edit</div>
                <div onClick={()=>onDelete(record._id)}className="ui basic red button">Delete</div>
              </div>
              </div>
            </div>
          )
        })
        }
      </div>
      
    </div>
  );
}
const mapStateToProps = state => ({
  tableList: state.table.list
})

const mapActionToProps = {
  fetchAllTables: actions.fetchAll,
  deleteTable: actions.Delete
}
export default connect(mapStateToProps, mapActionToProps)(Tables);
