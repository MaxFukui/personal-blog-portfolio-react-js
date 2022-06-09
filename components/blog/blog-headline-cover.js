function PostCoverHeadline(props) {
  return (
    <div>
      <h1 className="font-bold">{props.title}</h1>
      <br />
      <h2>{props.headline}</h2>
      <br />
      <img src={props.cover}/>
    </div>
  );
}
export default PostCoverHeadline;
