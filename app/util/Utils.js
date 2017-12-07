import React from "React";

class Utils extends React.Component {
  static breakLine(linesStr) {
    return linesStr.split(", ").map((line, i) => {
      return [line, <br key={i} />];
    });
  }
}
export default Utils;
