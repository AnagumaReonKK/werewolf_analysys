import { createContext } from 'react'
import { AVATAR } from '../types'

const players:AVATAR[] = [
  {user_id: 1, name:"", avatar:'', cause_of_death:'alive', date_of_death: 1}
]


export const PlayersContext = createContext(players)

export const PlayersProvider = (props: any) => {
  const { children } = props

  const Players:AVATAR[] = [
    {user_id: 1, name:"Jon", avatar:'', position:'fortune-teller', cause_of_death:'murdered', date_of_death: 3},
    {user_id: 2, name:"Jack", avatar:'',position:'were-wolf', cause_of_death:'executed', date_of_death: 2},
    {user_id: 3, name:"Mike", avatar:'', cause_of_death:'perished', date_of_death: 2},
    {user_id: 4, name:"Noah", avatar:'../../static/images/Bitmap.png'},
    {user_id: 5, name:"Lucas", avatar:'',position:'medium'},
  ]
  
  return (
    <PlayersContext.Provider value={Players}>
      {children}
    </PlayersContext.Provider>
  )

}

// ===================================================================

// export const SelectPlayerBoardDateContext = createContext({} as setTypeObject)


// export const SelectPlayerBoardDateProvider = (props: any) => {

//   const { children } = props
//   const [selectPlayerDate, setSelectPlayerDate] = useState('1')

//   return (
//     <SelectPlayerBoardDateContext.Provider value={{selectPlayerDate, setSelectPlayerDate}}>
//       {children}
//     </SelectPlayerBoardDateContext.Provider>
//   )
// }