import React, { useState } from 'react'
import Todo from './todo';
import { Add } from "../redux/actions/action"
import { useDispatch } from 'react-redux';


const Home = () => {

    const [data, setData] = useState("");

    const dispatch = useDispatch();


    const addData = () => {
        dispatch(Add(data))
        setData("")
    }
    return (<>
        <div className="productContainer">
            <input name='task'  value={data} onChange={(e) => setData(e.target.value)} />
            <button variant='contained' disabled={!data}
                onClick={() => {
                     addData()}}
                style={{ background: "green", marginLeft: "20px", padding: "10px" }} >
                Add
            </button>

        </div>
        <div><Todo /></div>
    </>


    );
};

export default Home;
