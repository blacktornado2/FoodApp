import { useState } from "react";

const FaqCard = ({ query, para }) => {
  const [showPara, setShowPara] = useState(false);

  const handleShowPara = () => {
    setShowPara(!showPara);
  };

  return (
    <div className="navFaq-content">
      <div className="dropdown-contentBlock">
        <div className="head">
          <h4 className="dropdown-heading">{query.question}</h4>
          <button onClick={handleShowPara} className="faq-cross">
            +
          </button>
        </div>
        <div className="base">
          {showPara && <p className="dropdown-para">{para}</p>}
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
