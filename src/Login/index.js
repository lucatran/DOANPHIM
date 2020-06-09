import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { login } from '../Reducer/Actions/user'
import Header from '../MOVIE/Header';
import { NavLink } from 'react-router-dom';
class Login extends Component {
    render() {
        return (
            <div>
                <Header />
                <Formik
                    initialValues={{
                        taiKhoan: "",
                        matKhau: ""
                    }}
                    onSubmit={(values) => {
                        this.props.dispatch(login(values));
                    }}
                    render={({ handleChange }) => (
                        <Form className="w-50 mx-auto login">
                            <h1 className="display-6 text-center">ĐĂNG NHẬP</h1>
                            <div className="form-group">
                                <label>Tài Khoản</label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="taiKhoan"
                                    onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Mật Khẩu</label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="matKhau"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="text-center">
                                <button className="form-button">Đăng Nhập</button>
                            </div>
                            <br />
                            <NavLink to="/dangky" className="sign-up">Đăng Ký!</NavLink>
                            <br />

                        </Form>
                    )}
                />
                {/* <Formik
                    initialValues={{
                        taiKhoan: "",
                        matKhau: ""
                    }}
                    onSubmit={(values) => {
                        this.props.dispatch(login(values));
                    }}
                    render={({ handleChange }) => (
                        <Form>
                           <img src="./img/user.jpg" alt=""></img>
                <div className="login">
                    <div className="login-header">
                        <h1>Login</h1>
                    </div>
                    <div className="login-form">
                        <h3>Tài Khoản:</h3>
                        <Field
                            type="text"
                            name="taiKhoan" /><br />
                        <h3>Mật Khẩu:</h3>
                        <Field
                            type="text"
                            name="matKhau" />
                        <br />
                        <button className="btn btn-info">Đăng Nhập</button>
                        <br />
                        <p className="sign-up">Đăng Ký!</p>
                        <br />
                    </div>
                </div>
                        </Form>)}
        /> */}

            </div >


        )
    }
}
export default connect()(Login);
