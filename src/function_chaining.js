import Common from "./functions/common";

//Goal:
//1. Function Chaining (for readability)
//2. Seperate Object (for multiple instance)
//3. Global variable (for config etc)

const example = () => {
  let c = new Common();
  console.log(c.format());

  let c2 = new Common(1, 1, 1).add(2).subtract(1);
  // // equals to this
  // // let c2 = Common(1, 1, 1);
  // // c2.add(2);
  // // c2.subtract(1);
  console.log(c2.format());

  //update global variable (shared across all object)
  //console.log(c.format());
  //c.lang("chn");
  //console.log(c2.format());
};

export default example;
