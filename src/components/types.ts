export type CAUSE_Of_DEATH = '突然死' | '処刑' | '殺害' | ''

export interface ROLE_STATE {
  id: number
  role_name: string  
}

export interface ROLES_CONTEXT {
  rolesState: ROLE_STATE[]
  setRolesState: React.Dispatch<React.SetStateAction<ROLE_STATE[]>>
}

export interface AVATAR {
  id: number
  player_name: string
  position?: string
  position_order?: number
  cause_of_death?: CAUSE_Of_DEATH
  date_of_death?: number
  dead_style?: {opacity: number}
}

export interface GAME_SELECT_STATE {
  gameSelect: string
  setGameSelect: React.Dispatch<React.SetStateAction<string>> 
};

export interface SELECT_STYLE_PROP {
  select_days:{
    width: number,
    height: number,
    color?: string,
    backgroundColor: string,
    textAlign?: string
  }
}

export interface VOTE_LOG {
  vote_id: number, 
  voter_id: number,
  voted_id: number,
  date_progress: number,
}

export interface DAILIES_ACTION {
  dailies_props: {
    select_days_style:{
      width: number,
      height: number,
      color?: string,
      backgroundColor: string,
      textAlign?: string
      paddingLeft?: number
    }
    // setDay?: React.Dispatch<React.SetStateAction<string>>
    action: 'playerDay' | 'voteDay' | undefined
  }
}

export interface DAILIES_STYLE_ACTION {
  select_days_style:{
    width: number,
    height: number,
    color?: string,
    backgroundColor: string,
    textAlign?: string
    paddingLeft?: number
  }
  action: 'playerDay' | 'voteDay' | undefined
}