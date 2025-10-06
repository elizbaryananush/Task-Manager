import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import Button from '../../../../../componentsUI/Button'
import Text from '../../../../../componentsUI/Text'

interface IProp {
  setAllowed: Dispatch<SetStateAction<boolean>>
}

const TimeoutButton: FC<IProp> = ({ setAllowed }) => {
  const [minutes, setMinutes] = useState<number>(1)
  const [seconds, setSeconds] = useState<number>(0)
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    if (seconds >= 0) {
      setTimeout(() => {
        setSeconds(seconds - 1)

        if (seconds == 0 && minutes > 0) {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
        setTime(
          seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`
        )

        if (minutes == 0 && seconds == 0) {
          setAllowed(true)
        }
      }, 1000)
    }
  }, [seconds])

  return (
    <Text>
      {seconds > 0 && minutes > 0
        ? `Didn’t get the code?`
        : `Didn’t get the code? Resend in ${time}`}
    </Text>
  )
}

export default TimeoutButton
