function PostCoverHeadline(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <br />
      <h2>{props.headline}</h2>
      <br />
      <img src={props.cover}/>
    </div>
  );
}
export default PostCoverHeadline;
