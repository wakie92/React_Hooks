import React, {useState} from 'react';
import HooksCon from '../containers/HooksContainer'
import Info from '../containers/InfoContainer';
import ContextSample from '../containers/ContextSample';
const App =  () => {
  
  const [visible, setVisible] = useState(false)
  return (
    <>
      <HooksCon/>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr/>
      {visible && <Info/>}
      <ContextSample/>
    </>
  )
}

export default App;