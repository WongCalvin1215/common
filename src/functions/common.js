let _config = { lang: "en" };

export default class Common {
  constructor(days, hours, minutes) {
    this.config = { lang: "en" };
    this.days = this.is_number(days) ? days : 0;
    this.hours = this.is_number(hours) ? hours : 0;
    this.minutes = this.is_number(minutes) ? minutes : 0;
  }

  //CORE
  add_subtract(value, direction) {
    this.days = this.days + value * direction;
  }
  add(value) {
    this.add_subtract(value, 1);
    return this;
  }
  subtract(value) {
    this.add_subtract(value, -1);
    return this;
  }

  //CHECKING
  is_undefined(input) {
    return input === void 0;
  }
  is_null_undefined(input) {
    return input == null;
  }
  is_number(input) {
    return (
      typeof input === "number" ||
      Object.prototype.toString.call(input) === "[object Number]"
    );
  }
  is_boolean(input) {
    return typeof input === "boolean";
  }

  //CONFIG
  lang(value) {
    _config.lang = value;
    return this;
  }

  //DISPLAY
  format() {
    return _config.lang === "chn"
      ? `${this.days}日${this.hours}小時${this.minutes}分`
      : `${this.days}-${this.hours}-${this.minutes}`;
  }

  sleep() {
    return new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
  }

  async resolve_all(function_arr) {
    return await Promise.all(function_arr.map((f) => f()));
  }
}
