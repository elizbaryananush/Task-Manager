import { statusType } from "../../api/status.types"

export interface SecondStepState{
    email: string
}

export interface SecondStep {
  state: SecondStepState
  massage?: string
  status?: statusType
}