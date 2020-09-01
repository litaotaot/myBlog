/*
 * @Author: Litao 
 * @Date: 2020-07-01 15:42:54 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-08-18 10:53:00
 */

import React from 'react'
import axios from 'axios'

import TimeRecord from '../../Components/TimeRecord'
import RecordPhoto from './recordPhoto'

import './index.scss'


export default class Record extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recordBoxStatus: true,
            photoList: []
        }
    }

    componentDidMount() {
        axios.get('http://172.16.163.65:5000/record').then(res => {
            if(res.status == 200) {
                this.setState({
                    photoList: res.data
                })
            }
        })
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

    changeBlock = (e) => {
        const { recordBoxStatus } = this.state
        this.setState({
            recordBoxStatus: !recordBoxStatus
        })
    }

    render() {
        const { recordBoxStatus, photoList } = this.state
        return (
            <div className="recordContainer">
                <div className="recordBox" onClick={(e) => {this.changeBlock(e)}}>
                    <div className="recordBlock" style={{ display: !recordBoxStatus ? 'none' : 'block' }}>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="recordList" style={{ display: recordBoxStatus ? 'none' : 'block' }}>
                        <ul>
                            <li><span></span></li>
                            <li><span></span></li>
                            <li><span></span></li>
                        </ul>
                    </div>
                </div>
                <div style={{ display: !recordBoxStatus ? 'none' : 'block' }}>
                    <RecordPhoto photoInfo={photoList}/>
                </div>
                <div style={{ display: recordBoxStatus ? 'none' : 'block', width: '80%', margin: '0 auto', backgroundColor: '#ffffff'}}>   
                    <TimeRecord/>
                </div>
            </div>
        )
    }
}