import { danhSachPhim } from '../../Sevices';
import { createAction } from '.';

export const fetchDanhSachPhimSC = () => {
    return dispatch => {
        danhSachPhim
            .fetchDanhSachPhimSC()
            .then(res => {
                dispatch(createAction("GET-LISTSC", res.data));
            })
            .catch(err => {
                console.log(err);
            });
    };
};

export const fetchDanhSachPhimDC = () => {
    return dispatch => {
        danhSachPhim
            .fetchDanhSachPhimDC()
            .then(res => {
                dispatch(createAction("GET-LISTDC", res.data));
            })
            .catch(err => {
                console.log(err);
            });
    };
};