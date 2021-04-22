import React from 'react';
import woman from './../../assets/woman.jpg'
import men from './../../assets/men.jpg'
import './styles.scss'

const Directory = props => {
    return (
        <div className='directory'>
            <div className="wrap">
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${woman})`
                    }}
                >
                    <a>
                       Shop Women
                    </a>
                </div>
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${men})`
                    }}
                >
                    <a>
                        Shop Men
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Directory;
