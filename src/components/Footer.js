import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="logo">
          <Link to="/">
            <img src="image/logo.png" className="img" alt="" />
          </Link>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <Link to="/">
              <strong>믿을 수 있는 경매</strong>
            </Link>
            <Link to="/">
              <strong>자주 묻는 질문</strong>
            </Link>
          </div>
          <div class="footer-link-items">
            <Link to="/">회사 소개</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <Link to="/Agreement">이용약관</Link>
          </div>
          <div class="footer-link-items">
            <Link
              to={{ pathname: "https://github.com/SGABF/MarketWeb" }}
              target="_blank"
            >
              github
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo"></div>
          <small className="website-rights">
            고객문의 cs@GaeKkulmaket.com
            <br />
            경기도 성남시 분당구 돌마로 46, 5층, 사업자등록번호 : 544-85-01791,
            ©GaeKkulmaket.
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
