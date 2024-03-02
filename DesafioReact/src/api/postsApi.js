const MONGO_URL = 'http://localhost:3001/posts';
const MONGO_URL_USERS = 'http://localhost:3001/users';

const getPosts = async () => {
  const response = await fetch(MONGO_URL);
  const data = await response.json();
  const posts = data.data;
  // console.log('Posts:', data.data);
  return posts;
};

const postNew = async (data) => {
  const response = await fetch(MONGO_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

const getPostById = async (id) => {
  //const { id } = req.params; //esto extrae el id del url
  const response = await fetch(`${MONGO_URL}/${id}`);
  const data = await response.json();
  const posts = data.data;
 //  console.log("PostsId:", data.data);
    return posts;
  }

  export const getUsers =  async ()=>{
    //const { id } = req.params; //esto extrae el id del url
    const response = await fetch(`${MONGO_URL_USERS}`);
    const data = await response.json();
    const posts = data.data;
    //  console.log('UsersInfo: ', data.data);
  return posts;
};

export { getPosts, postNew, getPostById };
