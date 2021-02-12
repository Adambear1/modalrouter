import React from 'react'
import { Trash } from 'react-bootstrap-icons'
import { useDispatch, useSelector} from "react-redux"

function Table({index, name, type, extra_1, extra_2}) {
  const store = useSelector((data) => data);
  const dispatch = useDispatch();
  const removeItem = (payload) => {
    return dispatch({ type: "REMOVE_ITEM", payload });
  }
    return (
  <tbody>
    <tr onClick={()=>console.log(extra_1, extra_2)} style={{"cursor": "pointer"}}>
      <th scope="row">{index}</th>
      <td>{type}</td>
      <td>{name}</td>
      <td onClick={()=> removeItem(name)}><Trash color="red"/></td>
    </tr>
  </tbody>

    )
}

export default Table
