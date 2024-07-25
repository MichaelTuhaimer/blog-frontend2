export function PostsIndex({ posts }) {
  return (
    <div>
      <h1>All posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image} />
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
