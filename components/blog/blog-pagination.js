import { useRouter } from "node_modules/next/router";
import { useState, useEffect } from "react";
import { allBlogIds } from "@/lib/api";
import { useQuery } from "@apollo/client";

function cleanIds(idsObject) {
  let arrayIds = idsObject.map((object) => {
    return object.id;
  });
  return arrayIds;
}

export default function BlogPagination(props) {
  const [previous, setPrevious] = useState();
  const [next, setNext] = useState();
  useEffect(() => {
    const ids = cleanIds(props.allIds.data);
    const indexPage = ids.indexOf(props.page);
    setPrevious(ids[indexPage - 1]);
    setNext(ids[indexPage + 1]);
  }, [props.allIds]);

  const href = (number) => {
    return {
      pathname: "/blog/[post]",
      query: { post: number },
    };
  };

  const styleButton = `bg-black text-white w-24 h-8 
  hover:bg-zinc-800 focus:bg-zinc-900
  `
  const buttonPrevious = (
    <button
      className={styleButton}
      onClick={() => {
        router.push(href(previous));
      }}
    >
      {" "}
      previous{" "}
    </button>
  );
  const buttonNext = (
    <button
      className={styleButton}
      onClick={() => {
        router.push(href(next));
      }}
    >
      {" "}
      next{" "}
    </button>
  );
  const showPrev = props.page == props.allIds.data[0] ? <></> : buttonPrevious;
  const showNext =
    props.page == props.allIds.data[props.allIds.data.length] ? (
      <></>
    ) : (
      buttonNext
    );

  const router = useRouter();
  return (
    <div className="relative w-full">
      <div className="inline-block bottom-0 left-0 ">{showPrev}</div>
      <div className="ml-1 inline-block bottom-0 right-0">{showNext}</div>
    </div>
  );
}
