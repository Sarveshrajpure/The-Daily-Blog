import React, { useState } from "react";
import "./CreateBlog.css";
import BlogCards from "./BlogCards";
import { useSelector, useDispatch } from "react-redux";
import { create_blog } from "../../Actions/HomepageActions";
const CreateBlog = () => {
  const dispatch = useDispatch();
  const [formdata, setFormData] = useState({ title: "", content: "" });
  const [error, setError] = useState("");
  const blogArray = useSelector((state) => state.Home.Blog);
  console.log(blogArray);
  const scrollNext = () => {
    document.getElementById("a").scrollLeft += 490;
  };
  const scrollPrev = () => {
    document.getElementById("a").scrollLeft -= 490;
  };
  const CreateBlog = () => {
    console.log(formdata.title);
    if (formdata.title === "" && formdata.content === "") {
      setError("*Please enter Title and Content*");
    } else {
      dispatch(create_blog(formdata));
    }
  };

  return (
    <div className="create-blog-wrapper">
      <div className="create-blog-container">
        <div className="create-blog-title">Create a new Blog</div>

        <div className="create-blog-form">
          <div className="label-input-wrapper">
            <label className="label-title">Title*</label>
            <input
              type="text"
              className="inputField"
              onChange={(e) => {
                setFormData((prev) => {
                  return { ...prev, title: e.target.value };
                });
              }}
            />
          </div>
          <div className="label-input-wrapper">
            <label className="label-content">Content*</label>
            <textarea
              className="inputField"
              rows="4"
              cols="44"
              onChange={(e) => {
                setFormData((prev) => {
                  return { ...prev, content: e.target.value };
                });
              }}
            ></textarea>
          </div>

          <div
            className="publish-btn"
            onClick={() => {
              CreateBlog();
            }}
          >
            Publish blog
          </div>
          {error ? <div className="formError">{error}</div> : null}
        </div>
        <>
          <div
            className="scroll-Btn-left"
            onClick={() => {
              scrollPrev();
            }}
          >
            <i class="fas fa-chevron-left"></i>
          </div>
          <div className="new-blog-container" id="a">
            {blogArray
              .map((element) => (
                <BlogCards
                  title={element.data.title}
                  content={element.data.content}
                />
              ))
              .reverse()}
          </div>{" "}
          <div
            className="scroll-Btn-right"
            onClick={() => {
              scrollNext();
            }}
          >
            <i class="fas fa-chevron-right"></i>
          </div>
        </>
      </div>
    </div>
  );
};

export default CreateBlog;
