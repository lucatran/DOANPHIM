import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
      <div className="carousel-content">
        <div className="menu">
          <nav className="navbar navbar-expand-lg container">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    MUA VÉ<span className="sr-only">(current)</span>
                  </a>
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
        <div className="carousel">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="https://galaxycine.vn/media/2020/3/12/bs-kc-2048x682_1584007167376.jpg"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://galaxycine.vn/media/2020/3/9/n3-kc-2048x682_1583737549979.jpg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://galaxycine.vn/media/2020/3/2/ttpt-kc-2048x682_1583115134144.jpg"
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://galaxycine.vn/media/2020/3/12/2048x682_1584007812219.png"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
