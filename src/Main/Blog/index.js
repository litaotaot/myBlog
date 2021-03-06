/*
 * @Author: Litao 
 * @Date: 2020-06-29 17:34:12 
 * @Last Modified by: Litao
 * @Last Modified time: 2020-08-17 17:51:56
 */

import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import './index.scss'

import Article from "../../Components/Article/index"
import ArticleTags from "../../Components/ArticleTags/index"
import HotSearch from "../../Components/HotSearch/index"
import BlogSearch from "./blogSearch"
import { dispatch } from 'rxjs/internal/observable/pairs'

// const mapStateToProps = state => ();
// const mapDispatchToProps  = dispatch => ({
//   onRedux: value => {
//     dispatch({type: 'CHANGE_RECORD_MODAL', value})
//   }
// })
const mapStateToProps = state => ({
    blogList: state
});
const mapDispatchToProps = dispatch => ({
    getBlogList: value => {
        dispatch({ type: 'GET_BLOG_LIST', value })
    }
})
class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.blogRef = React.createRef()
        this.state = {
            originData: [],
            originTags: [],
            originHotSearch: []
        }
    }
    componentDidMount() {
        this.getData()
        this.getTags()
        this.getHotSearch()
        this.listenerSearch()
    }

    listenerSearch = () => {
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
                bounce = distance / 10
                let speedInter = setInterval(() => {
                    styTop = parseFloat(this.blogRef.current.style.top) || 0
                    if (speed > 0) {
                        if (styTop <= (fixedTop + bounce)) {
                            if (speed === 1) {
                                speed += speed / 40
                            }
                            this.blogRef.current.style.top = `${styTop + speed}px`
                        } else {
                            speed = -1
                            bounce = bounce - 10
                        }
                    } else {
                        if (styTop >= (fixedTop - bounce)) {
                            speed += speed / 80
                            this.blogRef.current.style.top = `${styTop + speed}px`
                        } else {
                            speed = 1
                            bounce = bounce - 10
                        }
                    }
                    if (bounce <= 0) {
                        clearInterval(speedInter)
                    }
                })
            } else if (docTop < 970) {
                flag = true
                if (this.blogRef.current) {
                    this.blogRef.current.style.position = ""
                    this.blogRef.current.className = "blogSearchBox"
                }
            }
        })
    }

    getData = () => {
        axios.get('http://172.16.163.65:5000/blog').then(res => {
            if (res.status == 200) {
                // this.props.getBlogList(res.data)
                this.setState({
                    originData: res.data ? res.data : []
                })
            }
        })
    }

    getTags = () => {
        axios.get('http://172.16.163.65:5000/blog/tags').then(res => {
            if (res.status == 200) {
                this.setState({
                    originTags: res.data ? res.data : []
                })
            }
        })
    }

    getHotSearch = () => {
        axios.get('http://172.16.163.65:5000/blog/hotSearch').then(res => {
            if(res.status == 200) {
                this.setState({
                    originHotSearch: res.data ? res.data : []
                })
            }
        })
    }

    goArticle = (id) => {
        window.location.href = `#/blog/detail?article=${id}`
    }

    search = (v) => {
        axios.post('http://172.16.163.65:5000/blog/search',{
            searchTxt: v
        }).then(res => {
            if(res.status === 200) {
                this.setState({
                    originData: res.data ? res.data : []
                })
            }
        })
    }

    goToTags = (v) => {
        axios.post('http://172.16.163.65:5000/blog/getTags',{
            searchTags: v
        }).then(res => {
            if(res.status === 200) {
                this.setState({
                    originData: res.data ? res.data : []
                })
            }
        })
    }

    deleteTxt = () => {
        this.getData()
    }

    render() {
        const { originData, originTags, originHotSearch } = this.state
        // const { blogList } = this.props
        const ArticleList = originData.length && originData.map((item, index) => {
            return <Article goArticle={() => {this.goArticle(item.id)}} articleInfo={item} key={index} />
        })
        return (
            <div className="blogContainer">
                <div className="blogLeft">
                    {
                        ArticleList ? ArticleList : ''
                    }
                </div>
                <div className="blogRight">
                    <div ref={this.blogRef} className="blogSearchBox">
                        <BlogSearch search={this.search} deleteTxt={this.deleteTxt} placeholder={'请输入内容'}/>
                    </div>
                    <div className="blogBox">
                        <HotSearch originHotSearch={originHotSearch} goArticle={this.goArticle} />
                    </div>
                    <div className="blogBox">
                        <ArticleTags originTags={originTags} goToTags={this.goToTags} />
                    </div>
                </div>
            </div>
        )
    }
}

// export default Blog
export default connect(mapStateToProps, mapDispatchToProps)(Blog)