const MONGO_URL = 'http://localhost:3001/posts';

export const getPosts = async () => {
    const response = await fetch(MONGO_URL);
    const data = await response.json();
    const posts = data.data;
    // console.log('Posts:', data.data);
    return posts;
};

