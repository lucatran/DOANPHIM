import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
class Login extends Component {
    render() {
        return (
            <Formik
                initialValues={{
                    taiKhoan: "",
                    matKhau: "",
                }}
                onSubmit={(values) => {

                }}
                render={({handleChange}) => (
                    <Form className="w-50 mx-auto">
                        <h1 className="display-4 text-center">ĐĂNG NHẬP</h1>
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
                            <button className="btn btn-success">Đăng Nhập</button>
                        </div>
                    </Form>
                )}
            />

        )
    }
}
export default Login;
