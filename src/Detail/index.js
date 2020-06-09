import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchThongTinPhim } from '../Reducer/Actions/danhSachPhim';
import Headers from '../MOVIE/Header';
import DanhSachRap from '../DanhSachRap';

class DetailPhim extends Component {
    render() {
        const { thongTinPhim } = this.props;
        return (
            <div>
                <Headers />
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img src={thongTinPhim.hinhAnh} style={{ width: "200px", height: "300px" }} alt="" />
                        </div>
                        <div className="col-8">
                            <h3>{thongTinPhim.tenPhim}</h3>
                            <p>Nội Dung: <span> {thongTinPhim.moTa}</span></p>
                            <p>Ngày Chiếu: <span>{thongTinPhim.ngayKhoiChieu}</span></p>
                            <p>Đánh Giá: <span>{thongTinPhim.danhGia}</span></p>
                        </div>
                    </div>
                </div>
                <DanhSachRap />
            </div>
        )
    }

    componentDidMount() {
        this.props.dispatch(fetchThongTinPhim(this.props.match.params.courseId));

    }
}

const mapStateToProps = state => ({
    thongTinPhim: state.danhSachPhim.DetailPhim || {
        hinhAnh: '',
        tenPhim: '',
        moTa: '',
        ngayKhoiChieu: '',
        danhGia: ''
    },

})
export default connect(mapStateToProps)(DetailPhim);