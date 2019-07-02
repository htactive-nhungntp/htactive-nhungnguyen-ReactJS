import React from "react";

const DemoProps = ({ student: { id, name } }) => (
  <p>
    Your id is: {id} and your name is: {name}
  </p>
);

export default DemoProps;
