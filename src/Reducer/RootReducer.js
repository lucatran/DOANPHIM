
import { combineReducers } from 'redux';
import danhSachReducer from './DanhSachReducer';



const RootReducer = combineReducers({
    danhSachPhim : danhSachReducer
    
});

export default RootReducer;