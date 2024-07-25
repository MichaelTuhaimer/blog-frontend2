export function PostsNew() {
  return (
    <div>
      <h1>New Post</h1>
      <form>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Body: <input name="body" type="text" />
        </div>
        <div>
          Image url: <input name="image" type="text" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
