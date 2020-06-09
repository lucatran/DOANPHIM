import { createAction } from '.';
import { danhSachRap } from '../../Sevices';

export const fetchThongTinHeThongRap = () => {
    return dispatch => {
        danhSachRap
            .fetchThongTinHeThongRap()
            .then(res => {
                dispatch(createAction("GET-HETHONG", res.data));
            })
            .catch(err => {
                console.log(err);
            });
    };
};

