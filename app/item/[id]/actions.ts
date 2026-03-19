"use server";

export async function updateItem() {
  // Simulate an API call
  await new Promise((resolve) => setTimeout(resolve, 100));
  console.log("Action executed successfully");
  return { success: true };
}
