import React from "react";
import { Link } from "react-router-dom";
import "../../styles/blog.css"

const blogPosts = [
  {
    id: 1,
    title: "Latest Tech Trends in 2024",
    summary: "Discover the cutting-edge technologies shaping the future.",
    date: "June 10, 2024",
    category: "Technology",
    author: "John Doe",
  },
  {
    id: 2,
    title: "How to Live a Healthy Lifestyle",
    summary: "Tips and tricks for maintaining a balanced and healthy life.",
    date: "June 9, 2024",
    category: "Health",
    author: "Jane Smith",
  },
  // Add more blog posts as needed
];

const popularCategories = [
  "Technology",
  "Lifestyle",
  "Health",
  "Travel",
];

export const Blog = () => (
  <div className="blog-main-page container mt-5">
    <header className="text-center mb-4">
      <h1>Welcome to Our Blog</h1>
      <p>Your source for the latest news, tips, and stories.</p>
    </header>
    
    <div className="row">
      <div className="col-md-8">
        <h2>Recent Posts</h2>
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post mb-4">
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <p className="text-muted">{post.date} by {post.author}</p>
            <Link to={`/blog/${post.id}`} className="btn btn-primary">Read More</Link>
          </div>
        ))}
      </div>
      
      <div className="col-md-4">
        <div className="search-bar mb-4">
          <h2>Search</h2>
          <input type="text" className="form-control" placeholder="Search blog posts..." />
        </div>
        
        <div className="popular-categories mb-4">
          <h2>Popular Categories</h2>
          <ul className="list-unstyled">
            {popularCategories.map(category => (
              <li key={category}>
                <Link to={`/category/${category.toLowerCase()}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="newsletter">
          <h2>Subscribe to Our Newsletter</h2>
          <form action="#" method="post">
            <input type="email" name="email" placeholder="Your email address" className="form-control" />
            <button type="submit" className="btn btn-primary mt-2">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;

