import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Finally moved in :)', body: 'lorem ipsum...', author: 'Janine', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Janine', id: 2 },
        { title: 'Summer Sips', body: 'lorem ipsum...', author: 'Janine', id: 3 }
    ]);
    

    return (
        <div className="Home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;