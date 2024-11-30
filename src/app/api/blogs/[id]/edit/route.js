import { Blog } from "@/models/models";
import connectDB from "@/utils/connectDB";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const reqbody = await request.json();

    await connectDB();
    const updatedBlog = await Blog.findByIdAndUpdate(id, reqbody, {
      new: true,
    });

    revalidatePath("/blogs");
    revalidatePath("/draft");

    return NextResponse.json(
      { data: updatedBlog, success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "failed to update the blog", success: false },
      { status: 500 }
    );
  }
}
