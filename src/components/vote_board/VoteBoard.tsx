import React, { useState, useEffect } from 'react'
import VoteContext from '../contexts/VoteContext';
import PlayerContext from '../contexts/PlayerContext'
import SelectDaily from '../select/SelectDaily'
import styles from './VoteBoard.module.css'
import VoteBoardVoteList from './VoteBoardVoteList'
import {fetchJsonData} from '../ApiFetch'

import { VOTE_LOG, AVATAR } from '../types';

const VoteBoard:React.FC = () => {
  const select_days_style = {
    width: 90,
    height: 30,
    color: '#1F2327',
    backgroundColor: '#bdbdbd',
  }
 
  const [days, setDays] = useState(1);

  const [res, setRes] = useState({body: '', id: 1, title: '', userId: 1})
  // const [res, setPlayerRes] = useState({user_id: 1, name:"", avatar:'', cause_of_death:'alive', date_of_death: 1})
  // const [res, setVoteRes] = useState({vote_id: 1, voter_id: 1, destination_player_id: 2, date_progress: 1})

  const dailies_props = {
    select_days_style: select_days_style,
    days: days,
    setDays: setDays
  }

  useEffect(() => {
    fetchJsonData(days).then((res) => {
      console.log(res.data)
      setRes(res.data)
    })
    },[days])
  
  console.log(res)

  const Votes:VOTE_LOG[] = [
    {vote_id: 1, voter_id: 1, destination_player_id: 2, date_progress: 1},
    {vote_id: 2, voter_id: 2, destination_player_id: 3, date_progress: 1},
    {vote_id: 3, voter_id: 3, destination_player_id: 2, date_progress: 1},
    {vote_id: 4, voter_id: 4, destination_player_id: 2, date_progress: 1},
    {vote_id: 5, voter_id: 5, destination_player_id: 3, date_progress: 1}
  ]

  const Players:AVATAR[] = [
    {user_id: 1, name:"Jon", avatar:'', position:'fortune-teller', cause_of_death:'murdered', date_of_death: 3},
    {user_id: 2, name:"Jack", avatar:'',position:'were-wolf', cause_of_death:'executed', date_of_death: 2},
    {user_id: 3, name:"Mike", avatar:'', cause_of_death:'perished', date_of_death: 2},
    {user_id: 4, name:"Noah", avatar:'../../static/images/Bitmap.png'},
    {user_id: 5, name:"Lucas", avatar:'',position:'medium'},
  ]


  return (
    <PlayerContext.Provider value={Players}>
    <VoteContext.Provider value={Votes}>
      <div className={styles.vote__board}>
        <div className={styles.vote__title}>Vote for</div>
        <div className={styles.vote__box}>
          <VoteBoardVoteList />
          <SelectDaily dailies_props={dailies_props} />
        </div>
      </div>
    </VoteContext.Provider>
    </PlayerContext.Provider>
  )
}

export default VoteBoard