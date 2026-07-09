import React from "react";
import Input from "./Input";

function LabeledInput(props) {
  const { label, id, labelColor = "text-gray-01", ...rest } = props;

  return (
    <>
      <label htmlFor={id} className={`block text-sm mb-2 ${labelColor}`}>
        {label}
      </label>
      <Input id={id} {...rest} />
    </>
  );
}

export default LabeledInput;