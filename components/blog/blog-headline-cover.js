function PostCoverHeadline(props) {
  return (
    <div>
      <h1 className="font-bold text-2xl">{props.title}</h1>
      <br />
      <h2 className="italic text-justify">{props.headline}</h2>
      <br />
      <img className="mx-auto mb-4" src={props.cover}/>
    </div>
  );
}
export default PostCoverHeadline;
