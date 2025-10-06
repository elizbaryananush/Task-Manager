import React, { useEffect, useState } from 'react'
import Button from '../../../../../componentsUI/Button'
import Text from '../../../../../componentsUI/Text'

function TimeoutButton() {
  const [minutes, setMinutes] = useState<number>(1)
  const [seconds, setSeconds] = useState<number>(0)

  useEffect(() => {
    if (seconds == 0 && minutes > 0) {
      setMinutes(minutes - 1)
      setSeconds(59)
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (seconds == 0 && minutes > 0) {
        setMinutes(minutes - 1)
      }
      setSeconds(seconds - 1)
    }, 1000)
  } , [])

  return (
    <Text>
      Didn’t get the code? Resend in {minutes}:{seconds}
    </Text>
  )
}

export default TimeoutButton
