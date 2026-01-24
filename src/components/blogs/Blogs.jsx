import React from 'react';
import BlogCard from './BlogCard';
import blogsData from '../../data/blogs.json';

const Blogs = ({ addToRefs }) => {
  return (
    <>
      <style>{`
        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* 3 columns desktop */
          gap: 1.5rem;
          margin-top: 1rem;
        }
        
        /* Tablet: 2 columns */
        @media (max-width: 1024px) {
          .blogs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile: 1 column */
        @media (max-width: 768px) {
          .blogs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="blogs" className="section reveal" ref={addToRefs}>
        <div className="wood-panel">
            <div className="stone-panel-inner" style={{background: '#fff8e1'}}>
                <h2 style={{color: '#d9534f'}}>Strategy Guides</h2>
                <div className="section-subtitle">Clan Mail & Blogs</div>
                
                {/* Replaced 'grid-3' with 'blogs-grid' */}
                <div className="blogs-grid">
                    {blogsData.map(blog => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;