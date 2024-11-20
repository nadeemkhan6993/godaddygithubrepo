import { createContext, useEffect, useState } from "react"
import axios from "axios";

export const RepoContext = createContext()

// eslint-disable-next-line react/prop-types
export const DataProvider= ({children}) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.github.com/orgs/godaddy/repos");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <RepoContext.Provider value={{ data, loading }}>
        {children}
    </RepoContext.Provider>
  )
}