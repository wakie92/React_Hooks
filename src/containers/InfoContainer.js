import React, {useState, useEffect} from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    //componentDidmount + componentDidUpdate
    console.log('effect')
    console.log(name)
    return() => {
      console.log('cleanUp')
      console.log(name)
    }
    //두번째 파라미터에 빈배열을 넣으면
    //뒷정리 함수를 언마운트 됬을때만 실행가능
  },[]);

  const onChangeName = e => {
    setName(e.target.value);
  }

  const onChangeNickname = e => {
    setNickname(e.target.value);
  }

  return (
    <div>
      <div>
        <input value = {name} onChange = {onChangeName}/>
        <input value = {nickname} onChange = {onChangeNickname}/>
      </div>
      <div>
        <div>
          <b>이름 :</b> {name}
        </div>
        <div>
          <b>닉네임 :</b> {nickname}
        </div>
      </div>
    </div>
  )
}
export default Info;