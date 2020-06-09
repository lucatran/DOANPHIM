import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {
  render() {
    return (
      <div className="header">
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
            <div className="Member">
              {
                this.props.credentials ?
                  <div className="hello">
                    <p>Hi, {this.props.credentials.hoTen}</p>
                  </div>
                  :
                  <div className="row">
                    <NavLink to="/dangnhap" activeStyle={{ color: "#f26b38" }} className="login"> Đăng Nhập</NavLink>
                    <p>|</p>
                    <NavLink to="/dangky" activeStyle={{ color: "#f26b38" }} className="register">Đăng Ký</NavLink>
                  </div>
              }
            </div>
          </div>
        </div>
        <div className="menu">
          <nav className="navbar navbar-expand-lg container">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <NavLink to="/" className="nav-link">TRANG CHỦ</NavLink>
                </li>
                <li className="nav-item  dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span>|</span> PHIM
                    </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item" href="#">
                      PHIM ĐANG CHIẾU
                      </a>
                    <a className="dropdown-item" href="#">
                      PHIM SẮP CHIẾU
                      </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span>|</span> GÓC ĐIỆN ẢNH
                    </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item" href="#">
                      THỂ LOẠI PHIM
                      </a>
                    <a className="dropdown-item" href="#">
                      DIỄN VIÊN
                      </a>
                    <a className="dropdown-item" href="#">
                      ĐẠO DIỄN
                      </a>
                    <a className="dropdown-item" href="#">
                      BÌNH LUẬN PHIM
                      </a>
                    <a className="dropdown-item" href="#">
                      GÓC ĐIỆN ẢNH
                      </a>
                  </div>
                </li>
                <li className="nav-item  dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span>|</span> SỰ KIỆN
                    </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item" href="#">
                      ƯU ĐÃI
                      </a>
                    <a className="dropdown-item" href="#">
                      PHIM HAY THÁNG
                      </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    <span>|</span>RẠP/GIÁ VÉ
                    </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    <span>|</span>HỖ TRỢ
                    </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    <span>|</span>THÀNH VIÊN
                    </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )

  }
}
const mapStateToProps = (state) => {
  return {
    credentials: state.user.credentials
  };
};
export default connect(mapStateToProps)(Header);