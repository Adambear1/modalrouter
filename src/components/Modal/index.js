import React, {useState, useEffect} from "react";
// styles
import "./styles.css";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Components
import Table from "./Table"

function Modal({ open, setOpen }) {
  const [collection, setCollection] = useState(null)
  const dispatch = useDispatch();
  const store = useSelector((data) => data);
  useEffect(()=>{
    try {
      setCollection(store.collection)
    } catch ({message}) {
      console.log(message)
    }
  }, [store])

  return (
    <>
      {open && (
        <div id="myModal" className="modal-collection">
          <div className="modal-content">
            <span className="close" onClick={() => setOpen(false)}>
              &times;
            </span>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Type</th>
                  <th scope="col">Name</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              {collection &&
              collection.map((item,index) => {
               for (var objName in collection[index]){
                  for (var data in collection[index][objName]){
                   return  <Table index={index} type={collection[index][objName]["title"] ? "Book" : "Watch"} name={collection[index][objName][data]} favorite={collection[index][objName]["isFavorite"] ? true : false}/>
                  }
               
               }
              })
               
               }
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
