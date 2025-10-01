import { statusType } from "../../api/status.types"

export interface SecondStepState{
    email: ''
}

export interface SecondStep {
  state: SecondStepState
  massage?: string
  status?: statusType
}