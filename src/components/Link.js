import React from "react";

const Link = ({ handleShowCart, className, href, children }) => {
  const onClick = (event) => {
    if (event.metakey || event.ctrlkey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a
      onClick={() => {
        if (handleShowCart) {
          handleShowCart();
        } else onClick();
      }}
      className={className}
      href={href}
    >
      {children}
    </a>
  );
};

export default Link;
