import React from "react";
import "./css/index.css";
function FooterPage() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-logo">
          <img src="/assets/common/logo.svg" alt="logo" />
        </div>

        <div className="footer-text-box">
          <div className="footer-left">
            <div className="text">
              낫다 바이오텍 | 대표 허태욱 | 사업자등록번호 123-12-01234 <br />
              통신판매업등록번호 2022-2345-0282
            </div>

            <div className="terms">약관 및 정책</div>

            <div className="etc">Copyright Trace Herb, All Rights Reserved</div>
          </div>

          <div className="footer-right">
            <div className="right-wrapper">
              <div className="footer-text">
                <img src="/assets/common/footer-location.svg" alt="icon" />
                <div className="text">
                  대구광역시 동구 동대구로 465 대구스케일업허브
                </div>
              </div>
              <div className="footer-text">
                <img src="/assets/common/footer-call.svg" alt="icon" />
                <div className="text">0507-1453-5492</div>
              </div>
              <div className="footer-text">
                <img src="/assets/common/footer-mail.svg" alt="icon" />
                <div className="text">traceherb@traceherb.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterPage;
