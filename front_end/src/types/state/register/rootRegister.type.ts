import { FirstStep } from "./registerFirstStep.type"
import { SecondStep } from "./registerSecondStep.type"
import { ThirdStep } from "./registerThridStep.type"

interface UserData {
    firstStepData : FirstStep,
    secondStepData : SecondStep,
    thirdStepData : ThirdStep
}

export interface registerInitialState {
  step: number,
  userData : UserData
}