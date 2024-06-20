/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = "강남 우동 맛집";
  let [a, b] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉,c] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title,setTitle] = useState(0);
  let [입력값,입력값변경] = useState('');

  function 리스트정렬(){
    let copy = [...a];
    copy.sort();
    b(copy);
  }

  function 좋아요추가(i){
    let copy = [...따봉];
    copy[i]++
    c(copy);
  }

  function 글제목수정(){
    let copy = [...a];
    copy[0] = '여자 코트 추천';
    b(copy);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>나만의 블로그</h4>
      </div>

      <button onClick={리스트정렬}>가나다순정렬</button>

      {/* <div className='list'>
        <h4>{a[0]} <span onClick={()=>{c(따봉++)}}>🔥</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{a[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{setModal(true)}}>{a[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {
        a.map( function(title,count){
            return (
              <div className='list' key={count}>
                <h4 onClick={()=>{
                  setModal(true);
                  setTitle(count);
                  }}>{count+1}. {title} <span onClick={(e)=>{ e.stopPropagation(); 좋아요추가(count)}}>🔥</span> {따봉[count]}</h4>
                <p>2월 17일 발행</p>
                <button onClick={()=>{
                  let copy = [...a];
                  copy.splice(count,1);
                  b(copy);
                }}>삭제하기</button>
              </div>
            )
          }
        )
      }

      <input onChange={(e)=>{입력값변경(e.target.value)}}></input>
      <button onClick={()=>{
          let copy = [...a];
          copy.unshift(입력값);
          b(copy);
          따봉.push(0);
          c(따봉);
        }
      }>발행하기</button>
      
      {
        modal === true
        ? <Modal 글제목={a} 날짜={"2월 17일 발행"} 함수전달={글제목수정} title={title}></Modal>
        : null
      }

    </div>
  );
}

function Modal(props){
  return(
    <div className='modal'>
      <h2>{props.글제목[props.title]}</h2>
      <p>{props.날짜}</p>
      <p>상세내용</p>
      <button onClick={props.함수전달}>글수정</button>
    </div>
  )
}

export default App;
