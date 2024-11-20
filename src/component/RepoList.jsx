import { useContext } from "react";
import { RepoContext } from "./DataProvider";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";


const RepoList= () => {

    const { data, loading } = useContext(RepoContext);

    if (loading) return <p>Loading...</p>;


  return (
    <div style={{ textAlign : 'center'}}>
      <h1>GoDaddy GitHub Repo List</h1>
      <p>Click on the repository name to get the details.</p>
      <div>
      <ListGroup>
      {data.map((item, index) => (
         <ListGroup.Item key={index} className="p-3" action>
            <Link to={`/repo/${item.id}`}>{item.name}</Link>
        </ListGroup.Item>
        ))}
    </ListGroup>
    </div>
    </div>
  )
}

export default RepoList;