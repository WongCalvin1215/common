import Common from "./functions/common";
let c = new Common();

//Goal:
//1. API order dependency (for common usage)

//trigger function after resolve array of function
//eg: A, B has diff resolve time
//C must be triggered whenever AB are both resolved

const get_user = async () => {
  await c.sleep();
  console.log("get_user finish");
  return { status: "Success", data: { id: 1 } };
};
const get_config = async () => {
  await c.sleep();
  console.log("get_config finish");
  return { status: "Success", data: { is_show_shop: false } };
};
const get_shop = async (userId) => {
  await c.sleep();
  console.log("get_shop finish");
  return { status: "Success", data: [userId] };
};

const example = async () => {
  const arr = [get_user, get_config];
  const result = await c.resolve_all(arr);
  console.log(result);

  let shops = [];
  let is_show_shop = false;
  is_show_shop =
    result[1].status === "Success" &&
    c.is_boolean(result[1].data?.is_show_shop);

  if (is_show_shop) {
    let userId = (result[0].status = "Success" && result[0].data?.id);
    let get_shop_result = await get_shop(userId);
    if (get_shop_result.status === "Success") {
      shops = get_shop_result.data;
    }
  }

  console.log(`shops: ${shops}`);
};

export default example;
