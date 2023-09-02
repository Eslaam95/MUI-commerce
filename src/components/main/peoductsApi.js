import supabase from "./supbase";

export async function getCabins() {
  let { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    console.log("ERROR", error);
    throw new Error("Cabins couldn't be loaded");
  }

  return products;
}
