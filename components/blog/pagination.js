import { useState, useEffect } from "react";
import { useRouter } from "node_modules/next/router";
import Link from "node_modules/next/link";
import { Pagination } from "node_modules/@mui/material/index";

export default function PaginationBlogList(props) {
  const router = useRouter()
  const { page, pageCount } = props;
  const [tags, setTags] = useState([]);
  return(
    <Pagination 
      count={props.pageCount}
      variant='outlined'
      color='primary'
      className='pagination'
      page={page}
    />
  )
}
