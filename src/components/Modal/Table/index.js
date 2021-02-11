import React from 'react'

function Table({index, name, type}) {
    return (

  <tbody>
    <tr>
      <th scope="row">{index}</th>
      <td>{type}</td>
      <td>{name}</td>
    </tr>
  </tbody>

    )
}

export default Table
