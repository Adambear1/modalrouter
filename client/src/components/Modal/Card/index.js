import React from "react";

function Card({ open, setOpen, name, type, index }) {
  return (
    <>
      {open && (
        <tbody onClick={() => setOpen(false)} style={{ cursor: "pointer" }}>
          <tr>
            <th scope="row">{index}</th>
            <td>{(name, type)}</td>
          </tr>
        </tbody>
      )}
    </>
  );
}

export default Card;
