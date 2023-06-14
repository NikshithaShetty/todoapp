import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Context } from '../context/ContextProvider';
import { Remove, Update_data } from "../redux/actions/action"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { InputGroup, FormControl } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Todo = () => {

  const { User_data } = useSelector((state) => state.todoreducers);

  const { setDlettask } = useContext(Context)

  const dispatch = useDispatch()

  // show modal state
  const [showeye, setShoweye] = useState(false);

  // setvalue state
  const [showeyevalue, setShoweyeValue] = useState("");
  const [modelhead, setModelhead] = useState("");

  const [edit, setEdit] = useState(false)
  const [update, setUpdate] = useState("")
  const [ind, setInd] = useState("")
  const handleClose = () => setShoweye(false);


  const handleEdit = (el, k) => {
    setShoweye(true)
    setEdit(true)
    setModelhead("Edit Todo")
    setUpdate(el)
    setInd(k)
  }
  const handleShow = (ele) => {
    console.log(ele, "yyy");
    setShoweye(true)
    setEdit(false)
    setModelhead("Show Todo")
    setShoweyeValue(ele)
  }
  // dlt function
  const remove = (id) => {
    dispatch(Remove(id))
    setDlettask(true)
    setTimeout(() => {
      // After 3 seconds set the show value to false
      setDlettask(false)
    }, 3000)

  }


  // update function
  const usertask_update = () => {
    handleClose()
    if (update !== "") { dispatch(Update_data(update, ind)) }
    else {
      remove(ind)
    }
  }

  const handleClick = () => {
    setUpdate("");
  };
  return (
    <>
      <div>
        {
          User_data.map((ele, k) => {
            return (

              <div style={{margin: "auto" }} key={k} >
                <Row>
                  <Col xs={12} md={6}>
                    <li style={{ background: "#dcdde1", borderRadius: "3px", padding: "10px", margin: "10px", listStyle: "none" }} >{ele}</li>

                  </Col>
                  <Col xs={12} md={6} style={{
                    alignItems: " center",
                    justifyContent: "center",
                    display: " flex"
                  }}>
                    <div >
                      <button variant='contained'
                        onClick={() => {
                          handleEdit(ele, k)
                        }}
                        style={{ background: "green", padding: "10px",color:"#fff"  }} >
                        Edit
                      </button>

                      <button variant='contained'
                        onClick={() => remove(k)}
                        style={{ background: "green", marginLeft: "20px", padding: "10px",color:"#fff"  }} >
                        Delete
                      </button>

                      <button variant='contained'
                        onClick={() => {
                          handleShow(ele)
                        }}
                        style={{ background: "green", marginLeft: "20px", padding: "10px",color:"#fff"  }} >
                        Show
                      </button>

                    </div>
                  </Col>
                </Row>

              </div>

            )
          })
        }
      </div>
      <Modal show={showeye} >
        <Modal.Header >
          <Modal.Title>{modelhead}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center' >{edit ? <InputGroup className="mb-3">
          <FormControl
            name='task' value={update}

            onChange={(e) => setUpdate(e.target.value)} className='form-control col-lg-5'
          />
          <Button onClick={handleClick}>Clear</Button>
        </InputGroup>
          : showeyevalue}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {edit ?
            <Button variant="primary" onClick={() => usertask_update()}>
              Save Changes
            </Button> : ""}
        </Modal.Footer>
      </Modal></>

  );
};

export default Todo;
