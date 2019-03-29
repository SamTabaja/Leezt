// import React from "react";
// import "./Input.scss";

// const Input = ({ value, onChange, name, type, holder }) => {
//   return (
//     <input
//       value={value}
//       onChange={onChange}
//       id={value}
//       name={name}
//       className="input"
//       type={type}
//       placeholder={holder}
//     />
//   );
// };

// export default Input;

import React from "react";
import "./Input.scss";

const Input = ({
  value,
  onChange,
  name,
  type,
  holder,
  onClick
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      id={value}
      name={name}
      className="input"
      type={type}
      onClick={onClick}
      placeholder={holder}
    />
  );
};

export default Input;
