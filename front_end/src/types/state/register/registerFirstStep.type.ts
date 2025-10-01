import { statusType } from '../../api/status.types'

export interface FirstStepState {
  name: string
  username: string
  password: string
}

export interface FirstStep {
  state: FirstStepState
  massage?: string
  status?: statusType
}
