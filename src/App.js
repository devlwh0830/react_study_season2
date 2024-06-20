/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = "강남 우동 맛집";
  let [a, b] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉,c] = useState(0);
  let [modal, setModal] = useState(false);

  function 함수(){
    let copy = [...a];
    copy.sort();
    b(copy);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>나만의 블로그</h4>
      </div>

      <button onClick={함수}>가나다순정렬</button>

      <div className='list'>
        <h4>{a[0]} <span onClick={()=>{c(따봉++)}}>🔥</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{a[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{
          if(modal === false){
            setModal(true);
          }else{
            setModal(false);
          }
        }}>{a[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      {
        modal === true
        ? <Modal></Modal>
        : null
      }

    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
