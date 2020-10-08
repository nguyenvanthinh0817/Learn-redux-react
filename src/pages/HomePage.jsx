/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import { addNewHobby, setActiveHobby } from '../actions/hobby';

function HomePage(props) {
    const hobbyList = useSelector((state) => state.hobby.list);
    const activeId = useSelector((state) => state.hobby.activeId);
    const dispatch = useDispatch();
    console.log('hobby list', hobbyList);

    const handleAddHobby = () => {
        const id = Date.now().toString();
        const newHobby = {
            id,
            title: `My hobby - ${id}`,
        };

        const action = addNewHobby(newHobby);
        dispatch(action);
    };

    const handleSetActive = (hobby) => {
        const action = setActiveHobby(hobby.id);
        dispatch(action);
    };
    return (
        <div className="home-page">
            <h1>Redux</h1>
            <button onClick={handleAddHobby}>Random hobby</button>
            <HobbyList
                hobbyList={hobbyList}
                activeId={activeId}
                setActiveId={handleSetActive}
            />
        </div>
    );
}

export default HomePage;
