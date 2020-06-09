import {userServices} from '../../Sevices';
import {createAction} from '.';
export const login = (user) => {
    return dispatch => {
        userServices
            .Login(user)
            .then(res => {
                dispatch(createAction("fetchCredentials", res.data));
                localStorage.setItem('credentials',JSON.stringify(res.data))
            }).catch(err => {
                console.log(err)
            });
    };
};