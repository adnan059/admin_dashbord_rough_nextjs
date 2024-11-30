import EditBlogForm from "@/components/EditBlogForm";
import { baseUrl } from "@/utils/data";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

export default async function EditBlog({ params }) {
  const { id } = await params;
  const response = await fetch(`${baseUrl}/api/blogs/${id}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error?.message || "failed to fetch blog");
  }
  const { data } = await response.json();

  return (
    <div className="addblogspage">
      <div className="titledashboard flex flex-sb">
        <div>
          <h2>
            Edit <span>Blog</span>
          </h2>
          <h3>ADMIN PANEL</h3>
        </div>
        <div className="breadcrumb">
          <MdOutlineAddPhotoAlternate />
          <span>/</span>
          <span>Edit Blog</span>
        </div>
      </div>
      <div className="blogsadd">
        <EditBlogForm blog={data} />
      </div>
    </div>
  );
}
