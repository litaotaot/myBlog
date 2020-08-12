/*
 * @Author: Litao 
 * @Date: 2020-05-12 14:04:40 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-08-12 17:07:39
 */

import React from 'react'

import './index.css'

import Label from '../Label'
import { getRandom } from '../../exp'

export default class ArticleTags extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: ['rotate', 'hover', 'skew', ],
            tagsArr: [
                // { borderColor: '#FFCC00', txt: 'Python', status: 'rotate' },
                // { borderColor: '#CC0066', txt: 'Javascript', status: 'hover' },
                // { borderColor: '#000033', txt: 'HTML', status: 'skew' },
            ]
        }
    }

    componentDidMount() {
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.originTags === nextProps.originTags ? false : true 
    }

    componentWillReceiveProps(nextProps) {
        nextProps.originTags.length && this.getInitialData(nextProps.originTags)
    }

    getInitialData = (originTags) => {
        const { status } = this.state
        let tempArr = [], tempObj
        originTags.forEach(item => {
            tempObj = {}
            tempObj.borderColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
            tempObj.txt = item
            tempObj.status = status[getRandom(0, 2)]
            tempArr.push(tempObj)
        })
        this.setState({
            tagsArr: tempArr
        })
    }

    getTags = (e) => {
    }

    render() {
        const { tagsArr } = this.state
        const { goToTags } = this.props
        let tags = tagsArr.map(item => {
            return <Label
                borderColor={item.borderColor}
                txt={item.txt}
                status={item.status}
                key={item.txt}
                goToTags={goToTags}
            />
        })
        return (
            <div className="tagsContainer">
                <div className="tagsTop">
                    <p><i className="iconfont icon-biaoqian"></i><span>个性标签分类</span></p>
                </div>
                <p className="line"></p>
                <div className='tagsBottom' onClick={this.getTags}>
                    {tags}
                </div>
            </div>
        )
    }
}
