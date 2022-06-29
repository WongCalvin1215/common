let _;
let _config = { lang: "en" };

//contructor function
function Common(days, hours, minutes) {
  //omit new keyword when initiate object
  _ = Object.create(Common.prototype);

  //init value
  _.days = is_number(days) ? days : 0;
  _.hours = is_number(hours) ? hours : 0;
  _.minutes = is_number(minutes) ? minutes : 0;

  return _;
}

//CORE
const add = (value) => {
  add_subtract(value, 1);
  return _;
};
const subtract = (value) => {
  add_subtract(value, -1);
  return _;
};
const add_subtract = (value, direction) => {
  _.days = _.days + value * direction;
};

//CHECKING
const is_undefined = (input) => {
  return input === void 0;
};
const is_null_undefined = (input) => {
  return input == null;
};
const is_number = (input) => {
  return (
    typeof input === "number" ||
    Object.prototype.toString.call(input) === "[object Number]"
  );
};
const is_boolean = (input) => {
  return typeof input === "boolean";
};

//CONFIG
const lang = (value) => {
  _config.lang = value;
  return _;
};

//DISPLAY
const format$1 = () => {
  return _config.lang === "chn"
    ? `${_.days}日${_.hours}小時${_.minutes}分`
    : `${_.days}-${_.hours}-${_.minutes}`;
};

const sleep = () =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));

const resolve_all = async (arr) => {
  const p = arr.map((e) => e());
  return await Promise.all(p);
};

//prototype function
//only function registered here are exposed
//for object to use
var proto = Common.prototype;
proto.format = format$1;
proto.is_undefined = is_undefined;
proto.is_null_undefined = is_null_undefined;
proto.is_number = is_number;
proto.is_boolean = is_boolean;
proto.is_null_undefined = is_null_undefined;
proto.is_number = is_number;
proto.is_boolean = is_boolean;
proto.add = add;
proto.subtract = subtract;
proto.lang = lang;
proto.sleep = sleep;
proto.resolve_all = resolve_all;

export default Common;
