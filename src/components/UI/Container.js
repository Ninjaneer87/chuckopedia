import React from "react";

const Container = ({ children, maxWidth }) => {
  return <div style={{ maxWidth: maxWidth || 1920 , margin: '0 auto'}}>{children}</div>;
};

export default Container;
