import { useContext, useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import gitIcon from '../assets/github.svg'
import { RepoContext } from "./DataProvider";

const RepoDetails = () => {

    const { data, loading } = useContext(RepoContext);
    const [res, setRes] = useState({})

    const {id} = useParams()


    useEffect(() => {
        if(!loading){
            let tempData = data.filter(i => i.id == id)
            setRes(tempData[0])
        }
    }, [id])


  return (
    <div>
        {!loading ? 
      <>
        <div>
            <img src={gitIcon} />
            <span style={{ fontSize : 'xxx-large', fontWeight : 'bolder', margin : '0 20px' }} >{res["name"]}</span>
        </div>
            <p>{res["description"]}</p>
        <div>
            <p style={{fontWeight : 'bold'}}>You can check the repo page from <a target="_blank"
            rel="noopener noreferrer" href={`${res["html_url"]}`}>here</a>
            </p>
        </div>
        <div>  
            <span style={{fontWeight : 'bold'}}>Languages : </span>
            <span>{res["language"]}</span>
        </div>
        <div>
            <span style={{fontWeight : 'bold'}}>Forks : </span>
            <span>{res["forks"]}</span>
        </div>
        <div>
            <span style={{fontWeight : 'bold'}}>Open Issues : </span>
            <span>{res["open_issues"]}</span>
        </div>
        <div>
            <span style={{fontWeight : 'bold'}}>Number of Watchers : </span>
            <span>{res["watchers"]}</span>
        </div>
      </> : <p>Loading...</p>
    }
    </div>
  )
}

export default RepoDetails