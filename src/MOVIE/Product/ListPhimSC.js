import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ListPhimSC extends Component {
    render() {
        const { phim } = this.props;
        return (
            <div className="container">
                < div className="card col-3">
                    <img className="card-img-top" src={phim.hinhAnh} style={{ width: "115%", height: "350px" }} alt={phim.biDanh} />
                    <div className="card-body">
                        <button className="btn-play"><i class="fas fa-arrow-right"></i><p>Play</p></button>
                        <h4 className="card-title">{phim.tenPhim.length > 15 ? phim.moTa.substr(0, 15) + '...' : phim.tenPhim}</h4>
                        <Link to={`/detail/${phim.maPhim}`} type="button" className="btn-title">XEM CHI TIẾT</Link>
                    </div>
                </div>
            </div>
        )
    }
}
