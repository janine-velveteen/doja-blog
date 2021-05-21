import { useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Finally moved in :)', body: 'lorem ipsum...', author: 'Janine', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Janine', id: 2 },
        { title: 'Summer Sips', body: 'lorem ipsum...', author: 'Janine', id: 3 }
    ]);
    

    return (
        <div className="Home">
            <BlogList blogs={blogs} title="All Blogs" />
        </div>
     );
}
 
export default Home;