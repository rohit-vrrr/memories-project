import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const signin = (formData, history) => async(dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        const action = {
            type: AUTH,
            data: data
        }

        dispatch(action);

        history.push('/');
    } catch (err) {
        console.log(err);
    }
}

export const signup = (formData, history) => async(dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        const action = {
            type: AUTH,
            data: data
        }

        dispatch(action);

        history.push('/');
    } catch (err) {
        console.log(err);
    }
}
