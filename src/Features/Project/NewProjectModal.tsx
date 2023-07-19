import React from 'react'
import Modal from '../../Components/Modal'
import { AddProjectButton, AddProjectForm } from './components'

const NewProjectModal = () => {
  return (
    <>
    <Modal button={<AddProjectButton />} contentComponent={<AddProjectForm/>}/>
    </>
  )
}

export default NewProjectModal