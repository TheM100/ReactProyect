const MONGO_URL = 'http://localhost:3001/posts';
const MONGO_URL_USERS = 'http://localhost:3001/users';

export const getPosts = async () => {
    const response = await fetch(MONGO_URL);
    const data = await response.json();
    const posts = data.data;
    // console.log('Posts:', data.data);
    return posts;
};



  export const getPostById =  async (id)=>{
    //const { id } = req.params; //esto extrae el id del url
    const response = await fetch(`${MONGO_URL}/${id}`);
    const data = await response.json();
    const posts = data.data;
     console.log('PostsId:', data.data);
    return posts;
  }

  export const getUsers =  async ()=>{
    //const { id } = req.params; //esto extrae el id del url
    const response = await fetch(`${MONGO_URL_USERS}`);
    const data = await response.json();
    const posts = data.data;
     console.log('UsersInfo: ', data.data);
    return posts;
  }