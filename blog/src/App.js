import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [title,modiTitle] = useState(['남자 코드 추천','강남 우동 맛집','야호'])
  let [like, modiLike] = useState([0,0,0])
  let [modal,modiModal] = useState(false)

  function updateList(i){
    let likeArr = like.map((data,idx)=>{
      return (i==idx) ? data+1 : data
    })
    modiLike(likeArr)
  }

  function modalTF(i){
    
    modiModal(!modal)
  }

  return (
    <div className="App">
      <div className="black-nav">
          <div>Blog</div>
      </div>

      {
        title.map((data,idx)=>{
          return <div className="list">
                  <h3>{data}<span onClick={(e) => updateList(idx)}>👍</span>{like[idx]}</h3>
                  <p>2월16일</p>
                  <button onClick={(e)=>modalTF(idx)}>온오프</button>
                  <hr/>
                </div>
        })
      }

      {
        modal
        ? <Modal title={title} />
        : null
      }
    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
      <h2>{props.title[0]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App;