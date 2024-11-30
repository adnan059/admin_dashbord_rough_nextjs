"use server";

import { signIn, signOut } from "@/auth";
import { Blog } from "@/models/models";
import connectDB from "@/utils/connectDB";
import { revalidatePath } from "next/cache";

// auth actions
export const googleLoginAction = async () => {
  await signIn("google", { redirectTo: "/" });
};

export const logoutAction = async () => {
  console.log("logout called");
  await signOut();
};

// blog actions

export const deleteBlog = async (formData) => {
  try {
    const _id = formData.get("_id");
    await connectDB();
    await Blog.findByIdAndDelete(_id);

    revalidatePath("/blogs");
    revalidatePath("/draft");

    return { success: true, message: "blog deleted successfully" };
  } catch (error) {
    console.log(error);
  }
};
