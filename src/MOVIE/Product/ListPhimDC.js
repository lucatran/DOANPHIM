import React, { Component } from 'react'
export default class ListPhimDC extends Component {
    render() {
        const { phim } = this.props;
        return (
            <div className="container">
                < div className="card col-3">
                    <img className="card-img-top" src={phim.hinhAnh} style={{ width: "110%", height: "350px" }} alt={phim.biDanh} />
                    <div className="card-body">
                        <button className="btn-play"><i class="fas fa-arrow-right"></i><p>Play</p></button>
                        <h4 className="card-title">{phim.tenPhim.length > 15 ? phim.moTa.substr(0, 15) + '...' : phim.tenPhim}</h4>
                        <button type="button" className="btn-detail" data-toggle="modal" data-target="#exampleModal">XEM CHI TIẾT</button>
                        <button className="btn-title">MUA VÉ</button>
                    </div>
                </div>
            </div>
        )
    }
}

