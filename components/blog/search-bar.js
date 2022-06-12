import { useRouter } from "node_modules/next/router";
import Link from "node_modules/next/link";
import { useState } from "react";
import {BiSearch} from "react-icons/bi"


export default function SearchBar() {
  const router = useRouter()
  const [inputValue, setInputValue] = useState("");
  function handleButton(e) {
    e.preventDefault
    router.push("search/"+inputValue)
  }

  function getInputValue (e){
    const userValue = e.target.value
    setInputValue(userValue)
  }

  return (
    <div className="my-8 flex justify-center">
      <div className="mb-3 xl:w-96 flex flex-row">
        <input
          type="search"
          className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          id="exampleSearch"
          placeholder="Search..."
          onChange={getInputValue}
        />
        <button onClick={handleButton} >
            <BiSearch className="text-2xl text-center ml-2 hover:text-sky-500 "/>
        </button>
      </div>
    </div>
  );
}
