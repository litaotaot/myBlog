/*
 * @Author: Litao 
 * @Date: 2020-08-10 10:01:43 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-08-10 15:20:31
 */

 import React from 'react'

 import TimeRecord from '../../Components/TimeRecord'
 
 class Timeline extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{width: '75%', margin: '0 auto'}}>
                <TimeRecord />
            </div>
        )
    }
 }

 export default Timeline