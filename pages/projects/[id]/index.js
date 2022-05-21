import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHander() {
      // load data...
    router.push( {
            pathname:'/clients/[id]/[clientprojectid]',
            query: {id:"max", clientprojectid:'projecta'},
        });
  }

  return (
    <div>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHander}>Load project A</button>
    </div>
  );
}

export default ClientProjectsPage;
