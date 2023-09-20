import React, {useState} from 'react'

const Index = () => {
    const [visible, setVisible] = useState(false);
  return (
    <button onClick={setVisible(true)}>Add student</button>
  )
}

export default Index