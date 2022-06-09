import { useState, useEffect } from "react";
import { useRouter } from "node_modules/next/router";

export default function Pagination(props) {
  const router = useRouter()
  const { page, pageCount } = props;
  const [tags, setTags] = useState([]);

  const active =
    "relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none";
  const deactive =
    "relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none";

  const handleActive = (number) => {
    return (
      <li className="page-item active" key={number}>
          <a className="relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
          href="#"
          >
            {number}
          </a>
      </li>
    );
  };



  const handleInactive = (number) => {
    const href = `pagination/${number}`

    const handleOnClick = (e) =>{
      e.preventDefault();
      router.push(href)
    }

    return (
      <li className="page-item" key={number}>
          <a className="relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href={number}
          >
            {number}
          </a>
      </li>
    );
  };

  const handleLastFirst = (isActive, inside, isNext) => {
    let styleToChange = ""
    let href = ""
    let key = 0;
    if (isNext == true) {
      href = "" + (page + 1);
      key = pageCount + 1;
    } else {
      href = "" + (page - 1);
    }
    if(isActive){
         styleToChange = active
    } else {
         styleToChange = deactive
    }
    return (
      <li className="page-item" key={key}>
          <a className={styleToChange} href={href}>{inside}</a>
      </li>
    );
  };

  useEffect(() => {
    let tagsToBind = [];
    if(page == 1){
        tagsToBind.push(handleLastFirst(false, "Previous", false));
    } else {
        tagsToBind.push(handleLastFirst(true, "Previous", false));
    }

    for (let i = 1; i <= pageCount; i++) {
      if (i == page) {
        tagsToBind.push(handleActive(i));
      } else {
        tagsToBind.push(handleInactive(i));
      }
    }

    if (page == pageCount) {
        tagsToBind.push(handleLastFirst(false, "Last", true))
    } else {
        tagsToBind.push(handleLastFirst(true, "Last", true));
    }
    setTags(tagsToBind);
  });

  return (
    <div className="flex justify-center">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">{tags.map(tag =>{return tag})}</ul>
      </nav>
    </div>
  );
}
