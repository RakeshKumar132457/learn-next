const Blog = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Delay");
    }, 3000);
  });
  return <h1>Blog</h1>;
};

export default Blog;
