import { createContext, useReducer } from "react"

import { projectReducer } from "../reducers/projectReducer"

export const ProjectContext = createContext()

function ProjectProvider({ children }) {

  // Initial state
  const initialState = [
    {
      id: 1,
      title: "Restaurant Website"
    },
    {
      id: 2,
      title: "E-commerce Store"
    }
  ]

  // useReducer
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

export { ProjectProvider }