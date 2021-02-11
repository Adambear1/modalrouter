import React, {useState, useEffect} from "react";
// styles
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";

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
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Name</th>
                </tr>
              </thead>
              {collection &&
              collection.map((item,index) => {
               return(
                 <p>{JSON.stringify(collection[index])}</p>
               )
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
