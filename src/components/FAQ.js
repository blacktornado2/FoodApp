import React from "react";
import ButtonList from "./ButtonList";
import SectionHeader from "./SectionHeader";
import FaqCard from "./FaqCard";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchMenu } from "../actions";

const FAQ = () => {
  const dispatch = useDispatch();
  let faq = useSelector((state) => state.menu);
  const [faqCategory, setFaqCategory] = useState("Our food");

  useEffect(() => {
    getFaq();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFaq = () => {
    dispatch(fetchMenu("faq"));
  };

  return (
    <div>
      <SectionHeader headingOne="Frequently Asked" spanOne="Questions" />
      <div className="navFaq-section">
        <div className="container">
          <div className="home-menu">
            <ButtonList
              setFaqCategory={setFaqCategory}
              cName="navFaqButton-list hidden-button"
              menuButton1="Our food"
              menuButton2="Our Delivery"
              menuButton3="Our Company"
            />
            {faq.length !== 0 &&
              faq[faqCategory].queries.map((query) => {
                return (
                  <div key={query.question}>
                    <FaqCard
                      query={query}
                      para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet accusamus possimus vero tempora sit provident! Atque maxime dolor excepturi asperiores natus nulla vero recusandae explicabo dolorem deleniti, temporibus, error libero. Assumenda non quo, laudantium, iusto velit soluta tempora quaerat magnam ipsa tenetur vitae omnis debitis dolores enim. Placeat, porro? Esse minima fuga laborum adipisci, unde molestiae corrupti quis culpa. Repellat at fugit temporibus beatae quaerat quis dolorum ratione ex laudantium eius sed cumque natus explicabo, tempora aperiam, doloribus neque! Rem aspernatur quibusdam unde corporis quidem culpa nostrum cupiditate similique consequuntur!fugit temporibus beatae quaerat quisconsequuntur!"
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
