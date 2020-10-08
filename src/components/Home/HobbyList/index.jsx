/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    activeId: PropTypes.string,
    setActiveId: PropTypes.func,
};
HobbyList.defaultProps = {
    hobbyList: [],
    activeId: '',
    setActiveId: null,
};
function HobbyList(props) {
    const { hobbyList, setActiveId, activeId } = props;
    const handleClickHobby = (hobby) => {
        console.log('hobby', hobby);
        if (setActiveId) {
            setActiveId(hobby);
        }
    };
    return (
        <ul className="ul-list-hobby">
            {hobbyList.map((item) => {
                return (
                    <li
                        className={activeId === item.id ? 'active' : ''}
                        onClick={() => handleClickHobby(item)}
                    >{`${item.title} - ${item.id}`}</li>
                );
            })}
        </ul>
    );
}

export default HobbyList;
