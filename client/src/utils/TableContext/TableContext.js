import React from 'react'

const TableContext = React.createContext({
  boardTitle: '',
  boardDescription: '',
  title: '',
  owner: '',
  task: '',
  newTask: '',
  description: '',
  assignedTo: '',
  dueDate: '',
  priority: '',
  status: '',
  text: '',
  timeline: '',
  date: '',
  isLoading: '',
  tables: [],
  invoice: '',
  amount: '',
  account: '',
  date: '',
  tasks: [],
  getTasks: () => {},
  handleInputChange: () => {},
  handleUpdateTask: () => {},
  handleDeleteTask: () => {},
  handleAddTask: () => {},
  handleSubmitTable: () => {},
  handleEditTable: () => {},
  handleDeleteTable: () => {},
  handleAutoCompleteValue: () => {}
})

export default TableContext