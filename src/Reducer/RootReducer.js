
import { combineReducers } from 'redux';
import danhSachReducer from './DanhSachReducer';
import userReducer from './user';
import danhSachRapReducer from './danhSachRap';

const RootReducer = combineReducers({
    danhSachPhim: danhSachReducer,
    user: userReducer,
    danhSachRap: danhSachRapReducer,

});

export default RootReducer;