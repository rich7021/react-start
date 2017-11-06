import React, { Component } from "react";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-6 img-background">
          <img
            src={require("../images/AboutPage.jpg")}
            style={{ width: 465 }}
            alt="img"
          />
        </div>
        <div className="col-6 shop-background">
          <h3>服務內容</h3>
          <p>客製化保鮮花之相關花藝產品設計 依據作品花數及精緻度而定</p>
          <p>可以依據粉絲頁所po的圖，指定喜歡的款式及想要的色系與風格，細節內容可以透過私訊粉絲頁詳談。</p>

          <h3>自己設計婚禮捧花及相關婚禮花藝產品（如：胸花）</h3>
          <p>依據捧花使用花數及精緻度而定</p>
          <p>透過此機會，提供準新娘有機會自己親手做婚禮用的捧花！捧花的顏色及風格，亦可透過私訊粉絲頁討論詳情。</p>

          <h3>運送方式</h3>
          <p>香港本地免運費；送至台灣透過香港郵政 收運費NT350</p>
          <p>
            香港本地訂製 寄送免運費 亦可選擇面交方式取貨 台灣客人訂製 可透過國際郵件寄達（收NT350） 或是私訊我 詢問近期回台地區及時間
            可回台後面交取貨 或是台灣本地宅配送達（NT120)
          </p>
        </div>
      </div>
    );
  }
}

export default About;
