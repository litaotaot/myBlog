/*
 * @Author: Litao 
 * @Date: 2020-06-30 10:35:00 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-06-30 11:40:10
 */

import React from 'react'

import Search from "../../Components/Search/index"

class BlogSearch extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="blogSearch">
                <div><Search/></div>
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