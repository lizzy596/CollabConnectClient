import React from 'react'
import Modal from '../../Components/Modal'
import { AddProjectButton, AddProjectForm } from './components'

const Project = () => {
  return (
    <>
    <Modal button={<AddProjectButton />} contentComponent={<AddProjectForm/>}/>
    </>
  )
}

export default Project