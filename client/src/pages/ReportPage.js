import React from 'react'
import axios from 'axios'
import ExpenseContext from '../utils/ExpenseContext'
import TableDisplay from '../../src/components/TableDisplays.js'

const BoardsPage = _ => {

    // const [boardState, setBoardState] = React.useState({
    //   title: '',
    //   description: '',
    //   boards: []
    // })

    return (
        <ExpenseContext.Provider>
          <TableDisplay />
        </ExpenseContext.Provider>
      )
    }
    
    export default BoardsPage
