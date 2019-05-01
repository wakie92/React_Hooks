import React from 'react';

const HooksContainer = () => {

  const [frist, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');

  const onChangeInput = (e) => {
    setValue(e.target.value)
  }

  const onSubmitForm = (e) => {

  }
  return (
    <div onSubmit = {this.onSubmitForm}>
      {test}<br/>
      {frist *  second} = {result}
      <span onChange = {this.onChangeInput}> {value}</span>
    </div>
  )
}
export default HooksContainer;