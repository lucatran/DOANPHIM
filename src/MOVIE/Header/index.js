import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <div className="headerContent row">
                <div className="col-4 ">
                    <div className="Logo-item ">
                        <img src="./img/logo.png" alt=""></img>
                    </div>
                </div>
                <div className="FormContent col-4">
                    <form className="searchForm">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Tìm tên phim, diễn viên..." />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2"><i className="fa fa-search" /></span>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-4">
                    <div className="Member row">                       
                            <Link to="/dangnhap"className="login"> Đăng Nhập</Link>                       
                        <p>|</p>                      
                            <Link to="/dangky" className="register">Đăng Ký</Link>
                       
                    </div>
                </div>

            </div>

        )

    }
}
