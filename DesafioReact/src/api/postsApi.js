const MONGO_URL = "http://localhost:3001/posts";

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

export { getPosts, postNew };
