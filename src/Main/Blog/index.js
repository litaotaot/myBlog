/*
 * @Author: Litao 
 * @Date: 2020-06-29 17:34:12 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-06-30 17:27:52
 */

import React from 'react'

import './index.scss'

import Article from "../../Components/Article/index"
import ArticleTags from "../../Components/ArticleTags/index"
import HotSearch from "../../Components/HotSearch/index"
import BlogSearch from "./blogSearch"

export default class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.blogRef = React.createRef()
    }
    componentDidMount() {
        let blogTop = this.blogRef.current.offsetTop, flag = true
        window.addEventListener('scroll', (e) => {
            let docTop = document.documentElement.scrollTop
            if (docTop >= 970 && flag) {
                flag = false
                let speed = 10, bounce, styTop, fixedTop = 30, fixedOrigin = 300, distance = fixedOrigin + fixedTop
                this.blogRef.current.style.position = "fixed"
                this.blogRef.current.className = "blogFixBox"
                console.log(this.blogRef.current.style.className)
                this.blogRef.current.style.top = `-${300}px`
                bounce = distance/10
                let speedInter = setInterval(() => {
                    styTop = parseFloat(this.blogRef.current.style.top) || 0
                    if(speed > 0) {
                        if (styTop <= (fixedTop + bounce)) {
                            if(speed === 1) {
                                speed += speed/40
                            }
                            this.blogRef.current.style.top = `${styTop + speed}px`
                        } else {
                            speed = -1
                            bounce = bounce-10
                        }
                    } else {
                        if(styTop >= (fixedTop - bounce)) {
                            speed += speed/80
                            this.blogRef.current.style.top = `${styTop + speed}px`
                        } else {
                            speed = 1
                            bounce = bounce-10
                        }
                    }
                    if(bounce<=0) {
                        clearInterval(speedInter)
                    }
                })
            } else if(docTop < 970) {
                flag = true
                this.blogRef.current.style.position = ""
                this.blogRef.current.className = "blogSearchBox"
                console.log(this.blogRef.current.style.position, this.blogRef.current.style.className)
            }
        })
    }
    render() {
        return (
            <div className="blogContainer">
                <div className="blogLeft">
                    <Article/>
                    <Article/>
                    <Article/>
                </div>
                <div className="blogRight">
                    <div ref={this.blogRef} className="blogSearchBox">
                        <BlogSearch />
                    </div>
                    <div className="blogBox">
                        <HotSearch/>
                    </div>
                    <div className="blogBox">
                        <ArticleTags/>
                    </div>
                </div>
            </div>
        )
    }
}