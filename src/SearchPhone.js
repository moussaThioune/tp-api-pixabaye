
import React, {useState, useEffect} from 'react';
import { Modal, Button, Alert} from 'react-bootstrap';
import AddContact from  './AddContact'

function SearchPhone() {
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

   const [arrData, setArrData] = useState([
 
    {
      "id":1,
      "name":"Pamodou",
      "email":"Pamodou@gmail.com",
      "phoneNo":"776543432"
    },
    {
    "id":2,
    "name":"Ousmane",
    "email":"Ousmane@gmail.com",
    "phoneNo":"756544554"
    },
    {
      "id":3,
      "name":"Ramatoulaye",
      "email":"Ramatoulaye@gmail.com",
      "phoneNo":"765656565"
    },
    {
    "id":4,
    "name":"Nabou",
    "email":"Nabou@gmail.com",
    "phoneNo":"7856544545"
    },
    {
      "id":5,
      "name":"Rama",
      "email":"Rama@gmail.com",
      "phoneNo":"755656565"
    },
    {
      "id":6,
      "name":"Marame",
      "email":"Marame@gmail.com",
      "phoneNo":"786767676",

    },
    {
      "id":7,
      "name":"Cheikh",
      "email":"Cheikh@gmail.com",
      "phoneNo":"778790986"
    },
    {
    "id":8,
    "name":"Oumy",
    "email":"Oumy@gmail.com",
    "phoneNo":"767869089"
    }
   ])

  function onChangeHandle(e){ 
    console.log("e.target.value", e.target.value);
    if(e.target.value == '') {
      window.location.reload(true)
      const tempArr = arrData;
      setArrData(tempArr)
      return
    }
    const searchResult =  arrData.filter(item => 
      item.name.toLowerCase().startsWith(e.target.value.toLowerCase()) || 
      item.phoneNo.toLowerCase().startsWith(e.target.value.toLowerCase()))
    setArrData(searchResult);
  }

  return (
    <div className="App mt-2">
    <button type="button" onClick={handleShow} className="btn btn-success mt-4" >AJouter un Contac</button>
    <h1 className="text-center">List des contacts</h1>

      {
        console.log("arrData", arrData)
      }
 <input type="text" placeholder="taper un nom ou un numéro" className="form-control"  onChange={onChangeHandle} />
 <div>
   <table className=" table table-hover mt-2">
  <thead className="table-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Numero de telephone</th>
      <th scope="col">email du contact</th>
    </tr>
  </thead>
  <tbody>
  {
     arrData.map(item => {
        return(
          <tr>
             <td style={{border:"1px solid #000"}}>{item.name}</td>
             <td style={{border:"1px solid #000"}}>{item.phoneNo}</td>
              <td style={{border:"1px solid #000"}}>{item.email}</td>
        </tr>
        )
                })
              }
    </tbody>

   </table>
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Contact
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddContact />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>

    </div>
    </div>
  );
}

export default SearchPhone;
