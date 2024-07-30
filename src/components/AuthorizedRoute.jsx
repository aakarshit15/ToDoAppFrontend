import React, { useState, useEffect } from 'react'
import { Route, Routes} from 'react-router-dom';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Template from './Template';
import axios from 'axios';

const AuthorizedRoute = (props) => {

  const addZero = (dataItem) => {
    return (`${dataItem}`).length === 1 ? `0${dataItem}` : `${dataItem}`;
  }

  const getFullDate = (dateStr) => {
    const d = new Date(dateStr);
    const dDate = addZero(d.getDate());
    const dMonth = addZero(d.getMonth() + 1);
    const dYear = d.getFullYear();
    return `${dYear}-${dMonth}-${dDate}`
  }

  const getNewDate = () => {
    const todayTimeStamp = new Date();
    return getFullDate(todayTimeStamp);
  }
  
  const getDateDiff = (diff) => {
    const tDate = new Date(currentDate);
    tDate.setDate(tDate.getDate() + parseInt(diff));
    return getFullDate(tDate);
  }

  const [allTasks, setAllTasks] = useState([]);
  const [currentDate, setCurrentDate] = useState(getNewDate());

  const changeCurrentDate = () => {
    setCurrentDate(getNewDate());
  }

  const getAllTasks = async () => {
    const response = await axios.post("/api/getTasks");
    setAllTasks(response.data.taskLists);
  }

  useEffect(() => {
    getAllTasks();
    changeCurrentDate();
  }, []);

  return (
    <>
          <Routes>
              <Route path="/user/" element={<Template changeUserLayout={props.changeUserLayout} user={props.user} mode={props.mode} toggleMode={props.toggleMode} />}>
                <Route exact="true" path="dashboard" element={<Dashboard getDateDiff={getDateDiff} getFullDate={getFullDate} getAllTasks={getAllTasks} allTasks={allTasks} currentDate={currentDate} changeUser={props.changeUser} mode={props.mode} user={props.user} />} />
                {/* <Route exact path="analysis" element={<Analysis mode={props.mode} user={props.user} />} /> */}
                <Route exact="true" path="profile" element={<Profile mode={props.mode} user={props.user} changeUser={props.changeUser} />} />
              </Route>
          </Routes>
    </>
  );
}

export default AuthorizedRoute
