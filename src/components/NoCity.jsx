import React from "react";

const NoCity = ({onclose}) => {
  return (
    <div id="modal-screen" className="hide">
      <div id="modal-content">
        <div id="danger-icon">
          <i className="fa-solid fa-exclamation"></i>
        </div>
        <p id="modal-title">یافت نشد !</p>
        <p id="modal-caption">متاسفانه شهر مدنظر شما پیدا نشد !</p>

        <div id="modal-footer">
          <button id="close-btn" onClick={onclose}>تایید</button>
        </div>
      </div>
    </div>
  );
};

export default NoCity;
