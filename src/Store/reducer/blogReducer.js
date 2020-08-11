import axios from 'axios'

const initState = {
    blogList: [],
    blogAllInfo: []
}

const blogReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_BLOG_LIST':
            state.blogList = [...state.blogList, ...action.value]
            return state
            break;
        default:
            return state
            break;
    }
}

export default blogReducer