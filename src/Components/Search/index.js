/*
 * @Author: Litao 
 * @Date: 2020-05-11 17:23:19 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-08-12 16:36:26
 * @descript   search为props传入
 */

import React from 'react'

import './index.css'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            value: ''
        }
        
    }

    deletee() {
        const { deleteTxt } = this.props
        deleteTxt()
        this.setState({
            value: ''
        })  
    }

    change = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    keyDown = (e) => {
        const { search } = this.props
        const { value } = this.state
        if(e.keyCode === 13) search(value)
    }
    
    render() {
        const { search, placeholder } = this.props
        const { value } = this.state
        return (
            <div className="search">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    className="blog-input"
                    // onFocus={ focus && focus()}
                    onChange={this.change}
                    onKeyDown={this.keyDown}
                />
                <i className="shanchu iconfont icon-shanchu1" onClick={() => { this.deletee() }}></i>
                <i className="sousuo iconfont icon-icon-" onClick={() => { search(value) }}></i>
            </div>
        )
    }
}

export default Search