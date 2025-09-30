import React from 'react'
import styles from './index.module.scss'
import Text from '../../componentsUI/Text'
import Button from '../../componentsUI/Button'

const index = () => {
  return (
    <div className={styles.Header}>
      <Button>
        <Text>Primary</Text>
      </Button>
      <Button type="secondary">
        <Text>Secondary</Text>
      </Button>
      <Button type="pink">
        <Text>pink</Text>
      </Button>
      <Button type="lavander">
        <Text>lavander</Text>
      </Button>
      <Button type="mint">
        <Text>mint</Text>
      </Button>
    </div>
  )
}

export default index
