import React, { Component } from 'react';
import ListPhimSC from './ListPhimSC';
import ListPhimDC from './ListPhimDC';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { fetchDanhSachPhimSC } from '../../Reducer/Actions/danhSachPhim';
import { fetchDanhSachPhimDC } from '../../Reducer/Actions/danhSachPhim';
class Product extends Component {
    render() {
        const { listDanhSachPhimSC } = this.props;
        const { listDanhSachPhimDC } = this.props;
        const settings = {
            dots: false,
            infinite: true,
            accessibility: true,
            arrows: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        }

        return (
            < div className="List-Phim">
                <div className="ListPhimDC">
                    <h6>ĐANG CHIẾU</h6>
                    <div className="Detail-DC">
                        <Slider {...settings}>
                            {listDanhSachPhimDC.map((phim, index) => {
                            
                                return (
                                    <div key={index}>
                                        <ListPhimDC phim={phim} />
                                    </div>

                                );
                            })
                            }

                        </Slider>
                    </div>
                </div>
                <div className="ListPhimSC">
                    <h6>SẮP CHIẾU</h6>
                    <div className="Detail-SC">
                        <Slider {...settings}>
                            {listDanhSachPhimSC.map((phim, index) => {
                              
                                return (
                                    <div key={index}>
                                        <ListPhimSC phim={phim} />
                                    </div>
                                );
                            })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }



    componentDidMount() {
        this.props.dispatch(fetchDanhSachPhimSC());
        this.props.dispatch(fetchDanhSachPhimDC())
    }
}

const mapStateToProps = (state) => ({
    listDanhSachPhimSC: state.danhSachPhim.DSPhimSC,
    listDanhSachPhimDC: state.danhSachPhim.DSPhimDC
});

export default connect(mapStateToProps)(Product);
