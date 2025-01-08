import React from 'react';

const HighlightText = (props) => {
    const text = props.text ;
    return (
      // ? how to apply gradient ex: bg-gradient-to-b   from-[red] to-[yellow]
      <span className=" text-blue-100   ">
          {" "}
          {text}
          {" "}
      </span>
    );
};

export default HighlightText;