import { useState, useEffect } from "react";

export default function Pagination(props) {
  const { page, pageCount } = props;
  const [tags, setTags] = useState([]);

  const active =
    "page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none";
  const deactive =
    "page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none";

  const handleActive = (number) => {
    return (
      <li className="page-item active"
      key={number}>
        <a
          className="page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
        >
            {number}
        </a>
      </li>
    );
  };

  const handleInactive = (number) => {
    return (
      <li className="page-item"
      key={number}>
        <a className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
        >
          {number}
        </a>
      </li>
    );
  };

  const handlePrevious = (isActive) => {
    let styleToChange = ""
    let href = 0
    if(isActive){
         styleToChange = active
         href= (page-1)
    } else {
         styleToChange = deactive
    }
    return (
      <li className="page-item disabled"
      key={0}>
          <a
            className={styleToChange}
            tabIndex={-1}
            aria-disabled="true"
            href={href}
          >
            Previous
          </a>
      </li>
    );
  };

  const handleNext = (isActive) => {
    let styleToChange = ""
    let href = ""
    if(isActive){
         styleToChange = active
         href =  (page+1)
    } else {
         styleToChange = deactive
    }
    return (
      <li className="page-item" key={pageCount + 1}>
          <a className={styleToChange} href={href}>Next</a>
      </li>
    );
  };

  useEffect(() => {
    let tagsToBind = [];
    if(page == 1){
        tagsToBind.push(handlePrevious(false));
    } else {
        tagsToBind.push(handlePrevious(true));
    }

    for (let i = 1; i <= pageCount; i++) {
      if (i == page) {
        tagsToBind.push(handleActive(i));
      } else {
        tagsToBind.push(handleInactive(i));
      }
    }

    if (page == pageCount) {
        tagsToBind.push(handleNext(false))
    } else {
        tagsToBind.push(handleNext(true));
    }
    setTags(tagsToBind);
  });

  return (
    <div className="flex justify-center">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">{tags}</ul>
      </nav>
    </div>
  );
}
