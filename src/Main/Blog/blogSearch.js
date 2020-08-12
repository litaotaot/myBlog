/*
 * @Author: Litao 
 * @Date: 2020-06-30 10:35:00 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-08-12 16:19:35
 */

import React from 'react'

import Search from "../../Components/Search/index"

class BlogSearch extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { search, deleteTxt, placeholder } = this.props
        return (
            <div className="blogSearch">
                <div><Search search={search} deleteTxt={deleteTxt} placeholder={placeholder}/></div>
                <div>
                    <ul>
                        <li>Javacript</li>
                        <li>Html</li>
                        <li>Nodejs</li>
                        <li>Css</li>
                        <li>其他</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default BlogSearch