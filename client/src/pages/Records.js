import React from 'react';
import Axios from 'axios'
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation';



const Records = () => {

    //______________________________Variables__________________________________
    
    let history = useHistory();
    const [usersList, setUsersList] = useState([]);
    let sortDirection = false;

    //______________________________Functions__________________________________
    
    const goHome = () => {
        history.push('/Home')
    }

    // Fill the table dynamically with getRecords
    function loadTableData(tableData) {
        const tableBody = document.getElementById('tableBody');
        let dataHtml = "";
        for (let row of tableData) {
            const cleanDate = new Date(row.createdAt)
            dataHtml += `<tr><td>${row.game_name}</td><td>${row.record}</td><td>${row.user_name}</td><td>${cleanDate.toDateString()}</td></tr>`
        }
        tableBody.innerHTML = dataHtml;
    }
    
    const getRecords = async () => {
        const response = await Axios.get('http://localhost:3001/apiroutes/records')
            setUsersList(response.data);
            loadTableData(response.data);
    }

    //_______________________________Return___________________________________

    return (
        <div className="records">
            <Navigation />
            <h1>Records</h1>
            <button onClick={getRecords}>Load Records</button>
            <button onClick={goHome}>Back to Home</button>
            <table>
                <thead>
                    <tr>
                        <th>Game</th>
                        <th>Record</th>
                        <th>User</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody id="tableBody">
                </tbody>
            </table>
            
        </div>
    )
}

export default Records;

//{usersList.map((value) => {
//    console.log(usersList);
//    return <div className="record">
//        <h2>id:</h2>
//        <p>{value.id}</p>
//        <h2>Name:</h2>
//        <p>{value.name}</p>
//        <h2>Password:</h2>
//        <p>{value.password}</p>
//    </div>
//})}