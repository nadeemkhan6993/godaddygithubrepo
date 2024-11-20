import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RepoList from './component/RepoList'
import RepoDetails from './component/RepoDetails'
import { DataProvider } from './component/DataProvider'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <DataProvider>
        <RepoList />
      </DataProvider>
    },
    {
      path:"/repo/:id",
      element:
      <DataProvider>
        <RepoDetails />
      </DataProvider>
    }
  ])

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
