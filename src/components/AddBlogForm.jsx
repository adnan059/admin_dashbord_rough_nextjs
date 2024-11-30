"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MarkdownEditor from "react-markdown-editor-lite";
import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";

const AddBlogForm = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [blogCategory, setBlogCategory] = useState([]);
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState("");
  const router = useRouter();

  // creating the blog
  const createBlog = async (e) => {
    e.preventDefault();

    const blogData = { title, slug, desc, tags, blogCategory, status };

    console.log(blogData);

    try {
      const response = await fetch(`/api/blogs/create`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      if (!response.ok) {
        const error = await response.json();

        throw new Error(error.message || "failed to create blog");
      }

      const data = await response.json();

      router.push("/blogs");
    } catch (error) {
      console.log(error.message);
    }
  };

  // replacing the spaces with hyphens
  const handleSlugChange = (e) => {
    const inputValue = e.target.value;
    const newSlug = inputValue.replace(/\s+/g, "-");

    setSlug(newSlug);
  };

  // return the jsx
  return (
    <form onSubmit={createBlog} className="addWebsiteform">
      {/* blog title */}
      <div className="w-100 flex flex-col flex-left mb -2">
        <label htmlFor="title">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          placeholder="Enter small title"
        />
      </div>
      {/* blog slug */}
      <div className="w-100 flex flex-col flex-left mb -2">
        <label htmlFor="slug">Slug</label>
        <input
          value={slug}
          onChange={handleSlugChange}
          type="text"
          id="slug"
          placeholder="Enter slug url"
        />
      </div>

      {/* blog category */}
      <div className="w-100 flex flex-col flex-left mb -2">
        <label htmlFor="category">Category</label>
        <select
          value={blogCategory}
          onChange={(e) =>
            setBlogCategory(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
          multiple
          name="category"
          id="category"
        >
          <option value="htmlcssjs">HTML, CSS & JavaScript</option>
          <option value="nextjs">Next.js, React.js</option>
          <option value="database">Database</option>
          <option value="deployment">Deployment</option>
        </select>
        <p className="existingcategory flex gap-1 mt-1 mb-1">
          selected: <span>category</span>
        </p>
      </div>

      {/* blog description */}
      <div className="description w-100 flex flex-col flex-left mb-2">
        <label htmlFor="description">Blog Content</label>
        <MarkdownEditor
          value={desc}
          onChange={(e) => setDesc(e.text)}
          style={{ width: "100%", height: "400px" }}
          renderHTML={(text) => (
            <ReactMarkdown
              components={{
                code: ({ node, inline, className, children, ...props }) => {
                  const match = /language-(\w+)/.exec(className || "");
                  if (inline) {
                    return <code>{children}</code>;
                  } else if (match) {
                    return (
                      <div style={{ position: "relative" }}>
                        <pre
                          style={{
                            padding: "0",
                            borderRadius: "5px",
                            overflowX: "auto",
                            whiteSpace: "pre-wrap",
                          }}
                          {...props}
                        >
                          <code>{children}</code>
                        </pre>
                        <button
                          style={{
                            position: "absolute",
                            top: "0",
                            right: "0",
                            zIndex: "1",
                          }}
                          onClick={() =>
                            navigator.clipboard.writeText(children)
                          }
                        >
                          Copy Code
                        </button>
                      </div>
                    );
                  } else {
                    return <code {...props}>{children}</code>;
                  }
                },
              }}
            >
              {text}
            </ReactMarkdown>
          )}
        />
      </div>

      {/* tags */}
      <div className="w-100 flex flex-col flex-left mb -2">
        <label htmlFor="tags">Tags</label>
        <select
          value={tags}
          onChange={(e) =>
            setTags(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
          multiple
          name="tags"
          id="tags"
        >
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
          <option value="nextjs">Next.js</option>
          <option value="reactjs">React.js</option>
          <option value="database">Database</option>
          <option value="deployment">Deployment</option>
        </select>
        <p className="existingcategory flex gap-1 mt-1 mb-1">
          selected: <span>tags</span>
        </p>
      </div>

      {/* status */}
      <div className="w-100 flex flex-col flex-left mb -2">
        <label htmlFor="status">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          name="status"
          id="status"
        >
          <option disabled value="">
            Select Status
          </option>

          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
        <p className="existingcategory flex gap-1 mt-1 mb-1">
          selected: <span>status</span>
        </p>
      </div>

      {/* submit button */}
      <div className="w-100 mb-2">
        <button type="submit" className="w-100 addwebbtn flex-center">
          Create Blog
        </button>
      </div>
    </form>
  );
};

export default AddBlogForm;
