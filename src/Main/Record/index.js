/*
 * @Author: Litao 
 * @Date: 2020-07-01 15:42:54 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-07-02 15:23:12
 */

import React from 'react'

import RecordPhoto from './recordPhoto'

import './index.scss'


export default class Record extends React.Component {
    constructor(props) {
        super(props)
    }

    photoInfo() {
        return [
            { photoTxt: '龙城飞将', photoImg: 'general.jpeg', rotate: '9deg' },
            { photoTxt: '横刀立马', photoImg: 'general1.jpeg', rotate: '-15deg' },
            { photoTxt: '干戈征战 ', photoImg: 'general2.jpg', rotate: '5deg' },
            { photoTxt: '断发请战', photoImg: 'general3.jpg', rotate: '-10deg' },
            { photoTxt: '鞠旅陈师', photoImg: 'general4.jpg', rotate: '-12deg' },
            { photoTxt: '鞠旅陈师', photoImg: 'general4.jpg', rotate: '-12deg' },
        ]
    }
    render() {
        return (
            <div className="recordContainer">
                <RecordPhoto
                    photoInfo={this.photoInfo()}
                />
            </div>
        )
    }
}