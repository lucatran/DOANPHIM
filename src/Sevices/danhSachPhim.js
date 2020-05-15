import Axios from 'axios';


class DanhSachPhim {
    fetchDanhSachPhimSC(){
        return Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10"
        })
    }
    fetchDanhSachPhimDC(){
        return Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP10&soTrang=1&soPhanTuTrenTrang=12&tuNgay=01%2F01%2F2020&denNgay=04%2F05%2F2020"
        })
    }
}
export default DanhSachPhim;