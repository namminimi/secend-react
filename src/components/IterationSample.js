import React,{useState} from 'react';

const IterationSample = () => {
    const [names,setNames] = useState([
        {id:1, text: "눈"},
        {id:2, text: "팥빙수"},
        {id:3, text: "귤"},
        {id:4, text: "붕어빵"}
    ])
    //인풋 상태관리
    const [inputText, setInputText] = useState("");
    //id상태관리
    const [nextId, setNextId] = useState(5);//디폴트값 5 nextId에 할당
    //버튼 클릭시 실행될 함수
    const onClick = () => {
        const nextNames = [
            ...names,
            {id: nextId, text: inputText}
        ];
        //클릭누를때마다 업데이트
        setNextId(nextId+1); //다음아이디값을 업데이트
        setNames(nextNames); //names배열 업데이트
        setInputText(""); //inputText 비우기
    }
    //함수표현식
    const onChange = (e) => setInputText(e.target.value);
    //항목을 삭제하는 함수
    const onRemove = (id) => {
        const nextNames = names.filter(name=> name.id !== id); //id값이 다른얘들은 그대로 있고 같은 얘는 필터로 거름
        setNames(nextNames);
    }
    const namelist = names.map((name, index) =><li key={index}>{name.text} 
    <button onClick={ ()=> onRemove(name.id) }>삭제</button></li>) //map은 키를 지정해줘야함 li안에 key값 지정(index값)
    //삭제키는 전달할 id값이 있기에 함수자체를 {}안에 넣어줘야함
    return (
        <div>
            <input value={inputText} onChange={onChange}/><button onClick={onClick}>추가</button>
        <ul>
            {namelist}
        </ul>
        </div>
    );
};

export default IterationSample;