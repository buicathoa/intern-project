import React, { Component } from 'react';
class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div id="ogiua">
          <div id="about-us">
            <p className="important">VỀ CHÚNG TÔI</p>
            <p>Giới thiệu Sendo.vn
            Giới thiệu SenMall
          Quy chế hoạt động</p>
          </div>
          <div id="about-customer">
            <p className="important">DÀNH CHO NGƯỜI MUA</p>
            <p>Giải quyết khiếu nại<br />
          Hướng dẫn mua hàng<br />
          Chính sách đổi trả<br />
          Chăm sóc khách hàng<br />
          Nạp tiền điện thoại</p>
          </div>
          <div id="about-saler">
            <p className="important">DÀNH CHO NGƯỜI BÁN</p>
            <p>Mở shop trên Sendo<br />
          Quy định đối với người bán<br />
          Chính sách bán hàng<br />
          Hệ thống tiêu chí kiểm duyệt</p>
          </div>
          <div id="register">
            <p className="important">ĐĂNG KÝ NHẬN BẢN TIN ƯU ĐÃI KHỦNG TỪ SENDO</p>
            <input type="text" id="input" placeholder="Email của bạn là" />
            <button id="dangky">Đăng ký</button>
            <div id="gender">
              <input type="radio" name="gender" defaultValue="male" defaultChecked />
              <label htmlFor="male">Nam</label>
              <input type="radio" name="gender" defaultValue="female" />
              <label htmlFor="female">Nữ</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
