import React from "react";
import "./css/index.css";
function MainPage() {
  return (
    <main className="main">
      <div className="main-wrapper">
        <div className="section1">
          <div className="section1-set-background">
            <div className="text">스킨패스트</div>
            <div className="sub">사용은 간편하게, 치료는 빠르게</div>
          </div>
        </div>
        <div className="section2">
          <div className="wrapper">
            <div className="scroll">
              <div className="scroll-wrapper">
                <img src="/assets/main/scroll-down.svg" alt="logo" />
              </div>

              <div className="text">스크롤 내리기</div>
            </div>

            <div className="logo">
              <img src="/assets/common/logo-green.svg" alt="logo" />
            </div>

            <div className="section2-content">
              {section2.map((item, index) => {
                return (
                  <div key={index} className="box">
                    <img src={item.img} alt="logo" />
                    <div className="title">{item.title}</div>
                    <div className="sub">{item.sub}</div>
                  </div>
                );
              })}
            </div>

            <div className="element">구성요소</div>
          </div>
        </div>

        <div className="section3">
          <div className="section3-top">
            <img src="/assets/main/section3-top.svg" alt="back" />
          </div>
          <div className="section3-green">
            <div className="wrapper">
              <img
                src="/assets/main/syringe.png"
                alt="img"
                srcSet="/assets/main/syringe@2x.png 2x, /assets/main/syringe@3x.png 3x"
              />
              <div className="left-arrow">
                <img src="/assets/main/section3-arrow.svg" alt="arrow" />
              </div>

              <div className="right-arrow">
                <img src="/assets/main/section3-arrow2.svg" alt="arrow" />
              </div>

              <div className="section3-text-1">
                <img src="/assets/main/section3-icon4.svg" alt="icon" />
                <div className="text">Sodium Hyaluronate</div>
                <div className="sub">보습 상처치유 개선</div>
              </div>

              <div className="section3-text-2">
                <img src="/assets/main/section3-icon5.svg" alt="icon" />
                <div className="text">Sodium alginate</div>
                <div className="sub">독소제거, 점증효과</div>
              </div>

              <div className="section3-text-3">
                <img src="/assets/main/section3-icon6.svg" alt="icon" />
                <div className="text">Hydroxy Ethyl cellulose</div>
                <div className="sub">점증효과</div>
              </div>

              <div className="section3-text-4">
                <img src="/assets/main/section3-icon7.svg" alt="icon" />
                <div className="text">Glycerine</div>
                <div className="sub">피부장막 개선</div>
              </div>
            </div>
          </div>
          <div className="section3-bottom">
            <img src="/assets/main/section3-bottom.svg" alt="back" />
          </div>
        </div>

        <div className="section4">
          <div className="wrapper">
            <div className="section4-back">
              <div className="text">
                이런 분들께 <span>스킨패스트를 추천</span>합니다.
              </div>

              <img
                src="/assets/main/cream.png"
                srcSet="/assets/main/cream@2x.png 2x, /assets/main/cream@3x.png 3x, "
                alt="img"
              />
            </div>
            <div className="section4-back-set"></div>

            <div className="section4-content">
              {section4.map((item, index) => {
                return (
                  <div key={index} className="box">
                    <div className="title">{item.title}</div>
                    <img src={item.img} alt="logo" srcSet={item.srcSet} />
                    <div className="sub">{item.sub}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="section5">
          <div className="element">효과적인 상처 관리</div>
          <div className="text">
            오늘부터 <span>상처에</span>{" "}
            <span className="set">스킨패스트 </span>하세요
          </div>

          <div className="section5-content">
            <div className="text-box">
              <div className="text">
                실험을 통해 찾아낸 <br />
                가장 적절한 <span>고형분 함량 4%</span>
              </div>
            </div>
            <img src="/assets/main/section5-arrow.svg" alt="icon" />

            <div className="section5-set-circle">
              <img src="/assets/main/section5-set1.svg" alt="icon" />
            </div>

            <div className="section5-back"></div>
            <img
              className="section5-set"
              src="/assets/main/section5-set2.svg"
              alt="icon"
            />
            <div className="back-circle"></div>

            {/* <img
              src="/assets/main/section5-img.svg"
              alt="img"
              className="img"
            /> */}
          </div>
        </div>

        <div className="section6">
          <div className="wrapper">
            <div className="section6-text">
              <div className="element">PRODUCT DETAIL</div>
              <div className="text">스킨패스트 제형 및 질감 디테일</div>
              <div className="sub">
                모니터나 사용환경에 따라 제형사진은 실제와 다를 수 있으며,{" "}
                <br />
                보관상태와 제조일자에 따라 다르게 느껴질 수 있습니다. 제품구매에{" "}
                <br />
                참고를 위한 안내 사항임을 참조바랍니다.
              </div>
            </div>

            <div className="section6-content">
              {section6.map((item, index) => {
                return (
                  <div key={index} className="box">
                    <div className="title">{item.title}</div>
                    <img src={item.img} alt="logo" srcSet={item.srcSet} />
                    <div className="sub">{item.sub}</div>
                  </div>
                );
              })}
            </div>

            <div className="section6-detail">
              <div className="text">스킨패스트 제품상세</div>

              <div className="section6-content-wrapper">
                <div className="section6-img">
                  <img
                    src="/assets/main/syringe-mini.png"
                    alt="img"
                    srcSet="/assets/main/syringe-mini@2x.png 2x, /assets/main/syringe-mini@3x.png 3x"
                  />
                </div>
                <div className="section6-content-detail">
                  {detail.map((item, index) => {
                    return (
                      <div key={index} className="box">
                        <div className="text">{item.text}</div>
                        <div className="sub">{item.sub}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section7">
          <div className="section7-back">
            <div className="section7-back-color">
              <div className="wrapper">
                <div className="title">CONTACT US</div>
                <div className="text">
                  전문병의원, 약국 등 <br />
                  스킨패스트와 <span>제휴가 필요 </span>하다면 <br />
                  아래 연락주세요
                </div>

                <div className="section7-content">
                  {contact.map((item, index) => {
                    return (
                      <div key={index} className="box">
                        <div className="text">{item.text}</div>
                        <input placeholder={item.sub} type="text" />
                      </div>
                    );
                  })}
                </div>

                <div className="cheak-box">
                  <div className="box"></div>
                  <div className="text">
                    상담을 위한 개인정보 사용에 동의합니다
                  </div>
                </div>

                <button className="btn">상담 신청하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;

const section2 = [
  {
    img: "/assets/main/section2-icon1.svg",
    title: "주사형 용기",
    sub: "간편한 사용성을 위한 전용용기",
  },
  {
    img: "/assets/main/section2-icon2.svg",
    title: "고흡수성 고분자",
    sub: "기본에 충실한 연고형",
  },
  {
    img: "/assets/main/section2-icon3.svg",
    title: "전문의가 만든 전문연고",
    sub: "의사가 연구하고 만든 전문연고",
  },
];

const section4 = [
  {
    img: "/assets/main/section4-1.png",
    srcSet:
      "/assets/main/section4-1@2x.png 2x,/assets/main/section4-1@3x.png 3x",
    title: "사용이 불편하면 관리도 어려워요",
    sub: (
      <>
        꾸준히 관리가 필요하기에 <br /> 간편한 사용성이 중요한 분들
      </>
    ),
  },
  {
    img: "/assets/main/section4-2.png",
    srcSet:
      "/assets/main/section4-2@2x.png 2x,/assets/main/section4-2@3x.png 3x",
    title: "전문적인 관리가 필요해요",
    sub: (
      <>
        상처의 정도에 따라 <br />
        전문적인 연고가 필요한 분들
      </>
    ),
  },
  {
    img: "/assets/main/section4-3.png",
    srcSet:
      "/assets/main/section4-3@2x.png 2x,/assets/main/section4-3@3x.png 3x",
    title: "젤타입 사용성이 좋아요",
    sub: (
      <>
        보습이나 유지가 편리한 <br />
        젤타입의 연고를 선호하는 분들
      </>
    ),
  },
];

const section6 = [
  {
    img: "/assets/main/section6-img1.png",
    srcSet:
      "/assets/main/section6-img1@2x.png 2x,/assets/main/section6-img1@3x.png 3x",
    title: "제형",
    sub: <>촉촉하고 점성이 있는 하이드로겔</>,
  },

  {
    img: "/assets/main/section6-img2.png",
    srcSet:
      "/assets/main/section6-img2@2x.png 2x,/assets/main/section6-img2@3x.png 3x",
    title: "질감",
    sub: <>펴바르기 쉽고 부드러운 질감</>,
  },
];

const detail = [
  {
    text: "용량",
    sub: "30g / 1.05oz",
  },
  {
    text: "제품 주요 사양",
    sub: "모든 피부용",
  },
  {
    text: "사용기한",
    sub: "제품 별도 표기 (제조일로부터 36개월)",
  },

  {
    text: "사용방법",
    sub: "기재된 상세페이지 설명 참고",
  },
  {
    text: "화장품제조업자",
    sub: "제휴업체 (정확한 확인이 필요한 경우 별도 문의)",
  },
  {
    text: "책임판매업자",
    sub: "(주) 낫다바이오텍",
  },
  {
    text: "제조국",
    sub: "대한민국",
  },
  {
    text: "전성분",
    sub: (
      <>
        Sodium Hyaluronat, Hydroxy Ethyl cellulose(HEC), Sodium algina
        <br /> Glycerin, Lactic acid solutio, 주사용수
      </>
    ),
  },
];

const contact = [
  {
    text: "담당자명",
    sub: "실명을 입력해주세요",
  },
  {
    text: "회사명",
    sub: "병원, 의원, 약국 등의 상호를 입력해주세요",
  },
  {
    text: "이메일",
    sub: "이메일을 입력해주세요",
  },
  {
    text: "연락처",
    sub: "전화번호를 입력해주세요",
  },
];
