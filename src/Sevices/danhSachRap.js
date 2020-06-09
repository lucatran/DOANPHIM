import Axios from 'axios';
import { Config } from '../common/Config';

class DanhSachRap {
    fetchThongTinHeThongRap() {
        return Axios({
            method: "GET",
            url: `${Config.domain}/api/QuanLyRap/LayThongTinHeThongRap`
        })
    }
}
export default DanhSachRap;