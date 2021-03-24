import React, { Component } from 'react';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      email: '',
      password: '',
      confirm: ''
    }
  }
  onChange(event) {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  }
  onSubmit(event) {
    event.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div className="dangnhap">
        <form id="login">
          <h2> Now we start to get register</h2>
          <p> Full-Name:</p>
          <input type="text" name="fullname" placeholder="Tên đầy đủ" className="nhap" id="fullname" />
          <div id="errorfullname" className="error" />

          <p> Email:</p>

          <input type="text" name="email" placeholder="vd:buicathoa@gmail.com" className="nhap" id="email" />
          <div id="erroremail" className="error" />

          <p> Password: </p>

          <input type="password" name="password" placeholder="Mật khẩu" className="nhap" id="amatkhau" />
          <div id="errormatkhau" className="error" />
          <p> Nhập lại mật khẩu </p>

          <input type="password" name="confirm" placeholder="Nhập lại mật khẩu" className="nhap" id="confirm" />

          <div id="errorconfirm" className="error" />
          <p> Giới tính </p>
          <select id="gender">
            <option disabled selected value={0}>-- Choose an Option --</option>
            <option> Nam </option>
            <option> Nữ </option>
          </select>
          <br />
          <button className="registerr"> Register! </button>
        </form>
      </div>
    )
  }
}
export default SignUp