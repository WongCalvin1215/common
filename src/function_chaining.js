import common from "./functions/common";

//Goal:
//1. Function Chaining (for readability)
//2. Seperate Object (for common usage)
//3. Global variable (for common usage)

const example = () => {
  let c = common();
  //console.log(c.format());

  let c2 = common(1, 1, 1).add(2).subtract(1);
  // // equals to this
  // // let c2 = common(1, 1, 1);
  // // c2.add(2);
  // // c2.subtract(1);
  console.log(c2.format());

  //update global variable (shared across all object)
  const update_lang = (lang) => {
    common().lang(lang);
    //console.log(c.format());
  };

  //update_lang("chn");
  update_lang("en");
  console.log(c2.format());
};

export default example;
