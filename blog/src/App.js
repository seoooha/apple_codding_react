import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [title, updateTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '낙성대 맛집']);  
  let [like,updateLike] = useState([0,0,0]);
  let [clickTitle,updateClickTitle] = useState(0);
  let [val,updateValue] = useState('');
  let [writer, updateWriter] = useState('');

  function updateTitleBtn(){
    let newArr = title.map((data,idx)=>{
      return (idx==0) ? "여자 코트 추천" : data;
    })
    updateTitle(newArr)
  }
  
  let [modal,updateModal] = useState(false);

  function updateLikeBtn(i){
    let likeArr = [...like];
    likeArr[i] = likeArr[i]+1;
    updateLike(likeArr)
  }

  function clickTitleBtn(i){
    updateClickTitle(i)
    updateModal(!modal)
  }
  
  function insertWriter(){
    let titleArr = [...title]
    titleArr.unshift(writer);
    updateTitle(titleArr)

    let likeArr = [...like]
    likeArr.unshift(0);
    updateLike(likeArr)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      {
        title.map((data,i)=>{
          return (
            <div className="list" key={i} onClick={()=>{clickTitleBtn(i)}}>
              <h3>{ data }<span onClick={()=>{updateLikeBtn(i)}}>👍</span>{like[i]}</h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div>
          )
        })
      }

      {/* <input onChange={(e)=>{updateValue(e.target.value)}} /> */}

      {/* <button onClick={updateTitleBtn}>업데이트 타이틀 버튼</button> */}

      <div className="publish">
        <input onChange={(e)=>{updateWriter(e.target.value)}}/>
        <button onClick={insertWriter}>저장</button>
      </div>
      {
        modal === true
        ? <Modal title={title} clickTitle={clickTitle}/>
        : null
      }

    </div>
  );
}

function Modal(props){
  return(
    <div className="modal">
      <h2>{props.title[props.clickTitle]}</h2>
      <p></p>
      <p>상세내용</p>
    </div>
  )
}

export default App;