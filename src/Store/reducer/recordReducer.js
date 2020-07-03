


const initState = {
    modal1Visible: false
}

const recordReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_RECORD_MODAL:
            console.log('1111111111111111111111111')
            return {
                ...state,
                modal1Visible: action.value
            }
            break;
        default:
            return state
            break;
    }
}

export default recordReducer