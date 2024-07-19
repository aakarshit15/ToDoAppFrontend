import React, { useState, useEffect } from 'react'
import { Route, Routes} from 'react-router-dom';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Template from './Template';
import axios from 'axios';

const AuthorizedRoute = (props) => {

  const getNewDate = () => {
    const todayTimeStamp = new Date();
    const todayDate = todayTimeStamp.getDate();
    const todayMonth = (`${todayTimeStamp.getMonth() + 1}`).length === 1 ? `0${todayTimeStamp.getMonth() + 1}` : (todayTimeStamp.getMonth() + 1);
    const todayYear = todayTimeStamp.getFullYear();
    return `${todayYear}-${todayMonth}-${todayDate}`;
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
                <Route exact="true" path="dashboard" element={<Dashboard getAllTasks={getAllTasks} allTasks={allTasks} currentDate={currentDate} changeUser={props.changeUser} mode={props.mode} user={props.user} />} />
                {/* <Route exact path="analysis" element={<Analysis mode={props.mode} user={props.user} />} /> */}
                <Route exact="true" path="profile" element={<Profile mode={props.mode} user={props.user} changeUser={props.changeUser} />} />
              </Route>
          </Routes>
    </>
  );
}

export default AuthorizedRoute
