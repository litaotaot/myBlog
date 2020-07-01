/*
 * @Author: Litao 
 * @Date: 2020-07-01 15:42:54 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-07-01 16:13:16
 */

 import React from 'react'
import { red } from 'color-name'


 export default class Record extends React.Component {
     constructor(props) {
         super(props)
     }
     render() {
         return (
             <div style={{backgroundColor: 'red',width: '200px', height: '200px', margin: '150px auto'}}>
                 <div style={{backgroundColor: 'green',width: '200px', height: '200px', transform: 'skew(50deg,0)'}}></div>
             </div>
         )
     }
 }