import { useState, useContext } from 'react'
import { PlayersContext, DailiesContext, SelectPlayerBoardDateContext } from '../../utils/AnalysisContext'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { dailyReportsCreateRequest } from '../../utils/ApiFetch'


const ModalCreateReport = (props: any ) => {

  const select_days_style = {
    width: 165,
    height: 30,
    color: '#1F2327',
    backgroundColor: '#bdbdbd',
    textAlign: 'center'
  }

  const players = useContext(PlayersContext)
  const { selectPlayerDate, setSelectPlayerDate } = useContext(SelectPlayerBoardDateContext)
  const dailies = useContext(DailiesContext)

  const [executedPlayerId, setExecutedPlayerId] = useState<string>('')
  const [murderedPlayerId, setMurderedPlayerId] = useState<string | null>('')
  const [perishedPlayerId, setPerishedPlayerId] = useState<string | null>('')

  const handleChangeExecutedPlayer = (event: SelectChangeEvent) => {
    setExecutedPlayerId(event.target.value)
  }

  const handleChangeMurderedPlayer = (event: SelectChangeEvent) => {
    setMurderedPlayerId(event.target.value === '0' ? null : event.target.value)
  }

  const handleChangePerishedPlayer = (event: SelectChangeEvent) => {
    setPerishedPlayerId(event.target.value === '0' ? null : event.target.value)
  }

  const onClickSubmit = () => {
    // daily_idをフィルターで取得してpostする
    const daily_id = dailies.filter(daily => String(daily.date_progress) === selectPlayerDate)[0].id
    if(executedPlayerId !== ''){
      dailyReportsCreateRequest( 
        daily_id,
        executedPlayerId, 
        murderedPlayerId,
        perishedPlayerId
      ).then((res: any) => {
        console.log(res.data.date_progress)
        setSelectPlayerDate(res.data.date_progress)
        props.handleClose(false)
      }).catch((error: any)  => {
        alert(error.response.data.title)
      })
    }else{
      alert('処刑された人を選択してください')
    }
  }

  return (
    <div style={{color: 'white',textAlign: 'center'}}>
      <h2>DAILY REPORT</h2>
      <form>
        <div>
          <FormControl>
            <h3>処刑された人</h3>
            <Select
              sx={select_days_style}
              value={executedPlayerId as any}
              onChange={handleChangeExecutedPlayer}
            >
            {players.map((player) => 
              <MenuItem value={player.id} key={player.id}>{player.player_name}</MenuItem>
            )}
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl>
            <h3>殺害された人</h3>
            <Select
              sx={select_days_style}
              value={murderedPlayerId as any}
              onChange={handleChangeMurderedPlayer}
            >
              <MenuItem value={'0'} >ー</MenuItem>
            {players.map((player) => 
              <MenuItem value={player.id} key={player.id}>{player.player_name}</MenuItem>
            )}
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl>
            <h3>突然死した人</h3>
            <Select
              sx={select_days_style}
              value={perishedPlayerId as any}
              onChange={handleChangePerishedPlayer}
            >
              <MenuItem value={'0'} >ー</MenuItem>
            {players.map((player) => 
              <MenuItem value={player.id} key={player.id}>{player.player_name}</MenuItem>
            )}
            </Select>
          </FormControl>
        </div>
        <Button
          variant="contained"
          onClick={onClickSubmit}
          style={{backgroundColor: "#bdbdbd", color: "#1F2327", marginTop: 130}}
        >
          SUBMIT
        </Button>
      </form>
    </div>
  )
}

export default ModalCreateReport