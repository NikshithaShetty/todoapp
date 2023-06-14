
import "../App.css";
import React, { useContext } from 'react'
import { Context } from '../context/ContextProvider';
import Alert from 'react-bootstrap/Alert';
const Header = () => {

  const { dlttask, setDlettask } = useContext(Context)


  return (
    <div>
      <span className="nav">Todo - Redux </span>
      {dlttask ? <Alert variant="danger" onClose={() => setDlettask(false)} dismissible>
        <p>
          Task deleted
        </p>
      </Alert> : ""}
    </div>
  );
};

export default Header;
