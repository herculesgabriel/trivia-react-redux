import { tokenGetter } from '../../Services/API/API-Trivia'
import { gravatarImgUrlGetter } from '../../Services/API/API-gravatar'

export const SET_USER_DATA = 'SET_USER_DATA'

export const clickJogar = (name, email) => {
    return async (dispatch) => {
        const token = await tokenGetter()
        localStorage.setItem('token', token);
        const imgUrl = await gravatarImgUrlGetter(email)
        dispatch(UserDataSetter({ token, name, email, imgUrl }))
    }
}

const UserDataSetter = (data) => {
    return {
        type: SET_USER_DATA,
        data,
    }
}