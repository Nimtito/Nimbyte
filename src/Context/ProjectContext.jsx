import { createContext, useReducer } from "react"

import { projectReducer } from "../reducers/projectReducer"

export const ProjectContext = createContext()

function ProjectProvider({ children }) {

  const initialState = [

    {
      id: 1,
      title: "Restaurant Website",
      status: "In Progress"
    },

    {
      id: 2,
      title: "E-commerce Store",
      status: "Completed"
    },

    {
      id: 3,
      title: "Booking System",
      status: "Pending"
    }

  ]

  const [projects, dispatch] = useReducer(
    projectReducer,
    initialState
  )

  return (
    <ProjectContext.Provider
      value={{
        projects,
        dispatch
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}

export default  ProjectProvider 