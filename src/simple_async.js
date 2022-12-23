const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const getData = async () => {
  console.log("getData");
  await sleep(1000);
  if (Math.random() > 0.5) {
    return [{ id: 1 }];
  } else {
    return [null, new Error("hehe")];
  }
};

//Aim: simplest way to trigger async function
//1: just get res
//2: get res,err

const just_data = async () => {
  let [data] = await getData();
  console.log(data);
};
const data_and_err = async () => {
  let [data, err] = await getData();
  console.log({ data, err });
};

const example = () => {
  just_data();
  data_and_err();
};

export default example;
