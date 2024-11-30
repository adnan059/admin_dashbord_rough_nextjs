import AddBlogForm from "@/components/AddBlogForm";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

export default function AddBlog() {
  return (
    <div className="addblogspage">
      <div className="titledashboard flex flex-sb">
        <div>
          <h2>
            Add <span>Blog</span>
          </h2>
          <h3>ADMIN PANEL</h3>
        </div>
        <div className="breadcrumb">
          <MdOutlineAddPhotoAlternate />
          <span>/</span>
          <span>Add Blog</span>
        </div>
      </div>
      <div className="blogsadd">
        <AddBlogForm />
      </div>
    </div>
  );
}
