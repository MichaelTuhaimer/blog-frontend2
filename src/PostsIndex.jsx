export function PostsIndex({ posts, onShowPost }) {
  return (
    <div>
      <h1>All posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <button onClick={() => onShowPost(post)}>
            <img src={post.image} />
          </button>
        </div>
      ))}
    </div>
  );
}
