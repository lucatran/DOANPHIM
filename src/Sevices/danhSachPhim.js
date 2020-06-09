import Axios from 'axios';
import { Config } from '../common/Config';

class DanhSachPhim {
    fetchDanhSachPhimSC() {
        return Axios({
            method: 'GET',
            url: `${Config.domain}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10`
        })
    }
    fetchDanhSachPhimDC() {
        return Axios({
            method: 'GET',
            url: `${Config.domain}/api/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP10&soTrang=1&soPhanTuTrenTrang=12&tuNgay=01%2F01%2F2020&denNgay=04%2F05%2F2020`
        })
    }
    fetchThongTinPhim(id) {
        return Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
        })
    }
}
export default DanhSachPhim;