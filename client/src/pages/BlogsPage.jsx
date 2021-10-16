import React from "react";
import styled from "styled-components";
import Title from "../components/Title";

import blogs from "../data/Blogs";
import { InnerLayout, MainLayout } from "../styles/Layouts";

const BlogsPage = () => {
  return (
    <MainLayout>
      <BlogsPageStyled>
        <Title title="Blogs" span="Blogs" />
        <InnerLayout className="blog">
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className="blog-item">
                <div className="image">
                  <img src={blog.image} alt="" />
                </div>
                <div className="title">
                  <a href={blog.link}>{blog.title}</a>
                </div>
              </div>
            );
          })}
        </InnerLayout>
      </BlogsPageStyled>
    </MainLayout>
  );
};

const BlogsPageStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;

    .blog-item {
      padding: 2rem 1rem;
      background-color: var(--background-dark-grey);
    }

    .image {
      overflow: hidden;
      width: 100%;
      height: 90%;
      img {
        width: 100%;
        height: 90%;
        object-fit: cover;
        transition: transform 0.2s ease-in;
        &:hover {
          cursor: pointer;
          transform: rotate(5deg) scale(1.1);
        }
      }
    }

    .title {
      font-size: 1rem;
      color: var(--white-color);
      cursor: pointer;
      transition: color 0.2s ease-in;
      &:hover {
        color: var(--primary-color);
      }
    }
  }
`;

export default BlogsPage;
