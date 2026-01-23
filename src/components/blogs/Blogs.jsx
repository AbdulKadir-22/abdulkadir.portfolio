import React from 'react';
import BlogCard from './BlogCard';
import blogsData from '../../data/blogs.json';

const Blogs = ({ addToRefs }) => {
  return (
    <section id="blogs" className="section reveal" ref={addToRefs}>
      <div className="wood-panel">
          <div className="stone-panel-inner" style={{background: '#fff8e1'}}>
              <h2 style={{color: '#d9534f'}}>Strategy Guides</h2>
              <div className="section-subtitle">Clan Mail & Blogs</div>
              
              <div className="grid-3" style={{marginTop: '1rem'}}>
                  {blogsData.map(blog => (
                      <BlogCard key={blog.id} blog={blog} />
                  ))}
              </div>
          </div>
      </div>
    </section>
  );
};

export default Blogs;