import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/table";
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
      <TableForm {...{currentId, setCurrentId}} />
      From Tables
      {props.tableList.map((record, index) =>{
        return(
          <div key={index}>
            {record.name}
            {record.zone}
            <button onClick={()=>setCurrentId(record._id)}>Edit</button>
            <button onClick={()=>onDelete(record._id)}>Delete</button>
          </div>
        )
      })
      }
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
