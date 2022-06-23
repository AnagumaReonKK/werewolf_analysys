import { useState } from 'react'
import styles from './PlayerBoard.module.css'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/AddOutlined';
import EditIcon from '@mui/icons-material/EditOutlined';
import SelectDaily from '../select/SelectDaily'
import ModalMain from '../modal/ModalMain';
import { DAILIES_STYLE_ACTION } from '../types'

const PlayerBoardDailyReport = () => {
  
  const daily_button_style = {
    color: '#1F2327',
    backgroundColor: '#bdbdbd',
    width: 165,
    mr: 2
  }

  // <Select /> props
  const select_days_style = {
    width: 165,
    height: 30,
    color: '#1F2327',
    backgroundColor: '#bdbdbd',
    paddingLeft: 5
  }

  const dailies_props:DAILIES_STYLE_ACTION = {
    select_days_style: select_days_style,
    action: 'playerDay'
  }
  // <Select /> props

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true)
    const elements:any = document.getElementsByClassName("AvatarState_avatar__marker_box__fgSIC");
    Object.keys(elements).forEach((index: string) => {elements[index].style.zIndex = 0})
  }

  const handleClose = () => {
    setIsOpen(false)
    const elements:any = document.getElementsByClassName("AvatarState_avatar__marker_box__fgSIC");
    Object.keys(elements).forEach((index: string) => {elements[index].style.zIndex = 5})
  }



  return (
    <div className={styles.player__daily_reports}> 
      <SelectDaily dailies_props={dailies_props}/>
      <div className={styles.player__daily_button}>
        <Button onClick={handleOpen} variant="contained" sx={daily_button_style} endIcon={<AddIcon />}>
          Daily Report
        </Button>
      </div>
      <div className={styles.player__daily_button}>
        <Button variant="contained" sx={daily_button_style} endIcon={<EditIcon />}>
          Edit Report
        </Button>
      </div>
      <ModalMain 
        isOpen={isOpen} 
        handleClose={handleClose}
        body='createReport'
      />
    </div>
  )
}

export default PlayerBoardDailyReport