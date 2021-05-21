import { useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Finally moved in :)', body: 'lorem ipsum...', author: 'Janine', id: 1 },
        { title: 'Mousey party!', body: 'lorem ipsum...', author: 'Newty', id: 2 },
        { title: 'Summer Sips', body: 'lorem ipsum...', author: 'Janine', id: 3 }
    ]);
    

    return (
        <div className="Home">
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author === "Janine")} title="Janine's Blogs" />
        </div>
     );
}
 
export default Home;