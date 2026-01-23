import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card" style={{background: '#fff', borderRadius: '12px', border: '3px solid #333', overflow: 'hidden', boxShadow: '0 6px 0 #222'}}>
        <div className="blog-header" style={{background: '#eee', padding: '1rem', borderBottom: '2px solid #ccc', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{fontWeight:'bold', color: blog.tagColor}}>{blog.tag}</span>
            <span className="blog-date" style={{fontSize: '0.8rem', fontWeight: '700', color: '#666', background: '#ddd', padding: '2px 8px', borderRadius: '4px'}}>
                {blog.date}
            </span>
        </div>
        <div style={{padding: '1.5rem'}}>
            <h3 className="card-heading" style={{fontFamily: 'Nunito', fontWeight: '900', fontSize: '1.2rem', marginBottom: '0.5rem'}}>{blog.title}</h3>
            <p style={{color: '#666', fontSize: '0.9rem', marginBottom: '1rem'}}>{blog.description}</p>
            <button className="nav-btn" style={{width: '100%'}}>
                <div className="nav-btn-inner" style={{justifyContent: 'center', fontSize: '0.9rem'}}>Read More</div>
            </button>
        </div>
    </div>
  );
};

export default BlogCard;