import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchThongTinHeThongRap } from '../Reducer/Actions/danhSachRap';
class DanhSachRap extends Component {
    render() {
        const { heThongRap } = this.props;
        return (
            <div >
                <div classname="row">
                    <div classname="col-3">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">{heThongRap.maHeThongRap}</a>
                            <img src="{heThongRap.logo}" alt />
                        </div>
                    </div>
                    <div classname="col-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">a</div>
                        </div>
                    </div>
                </div>



            </div>


        )
    }
    componentDidMount() {
        this.props.dispatch(fetchThongTinHeThongRap());
    }
}
const mapStateToProps = state => ({
    heThongRap: state.danhSachRap.DSRap,
})
export default connect(mapStateToProps)(DanhSachRap);


