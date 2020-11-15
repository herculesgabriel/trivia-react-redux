import { SET_USER_DATA } from '../actions/user'

const initialState = {
    token: '',
    avatarUrl: '',
    userName: '',
    email: '',
}

export const user = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return ({
                ...state,
                token: action.data.token,
                userName: action.data.name,
                email: action.data.email,
                avatarUrl: action.data.imgUrl,
            })
        default: return state
    }
}

