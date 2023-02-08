import React from "react";
import "./css/index.css";
function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="img">
          <img src="/assets/common/logo.svg" alt="logo" />
        </div>

        <button className="header-buy">
          <img src="/assets/common/buy-icon.svg" alt="buy" />
          <div className="text">제품 구매하기</div>
        </button>
      </div>
    </header>
  );
}

export default Header;
