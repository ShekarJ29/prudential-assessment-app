import React, { useContext } from 'react';

import DataContext from '../dataContext/dataContext';
import './Start.css';

const Start = () => {
    const { startQuiz, showStart } = useContext(DataContext);
    return (
        <section className='text-white text-center bg-dark' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <div className="container">
                <div>
                    <div className="startDivBtn">
                        <button onClick={startQuiz} className="startQuiz">Start Quiz</button>
                    </div>
                </div>
            </div></section>
    );
};

export default Start;