import { statusType } from "../../api/status.types"

export interface ThirdStepData {
  verificationCode: number | null
}

export interface ThirdStep {
  state: ThirdStepData
  massage?: string
  status?: statusType
}