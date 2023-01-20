import React, {Component} from "react";

class ClassIteration extends Component {
    state = { //상태 관리할거 싹다 state로 
        names: [
            {id:1, text: "눈"},
            {id:2, text: "팥빙수"},
            {id:3, text: "귤"},
            {id:4, text: "붕어빵"}
        ],
        inputText: "",
        nextId: 5
    }
    onChange = (e) => this.setState({ //onChange함수 업데이트
        ...this.state,  //state다 뿌려주고
        inputText: e.target.value //inputtext에 입력값 받음
    })

    onClick = () => {  //onclick 함수
        const nextNames = [  //배열, 객체 새로운 값 변수 선언
            ...this.state.names,  //state.names 배열객체값 다뿌리기
            {id: this.state.nextId, text: this.state.inputText} //밑에 추가할값
        ]
        this.setState({ //업데이트 시작
            names: nextNames, //클릭시 names 값에 새로운 객체값 할당
            inputText: "", //input 안에는 빈문자열로 다시 업뎃
            nextId: this.state.nextId+1 //id값은 +1
        })
    }

    onRemove = (id) => { //id값도 같이 전달해줘야해서 매개변수 저장
        const nextNames = this.state.names.filter(name => name.id !== id)
        //state.names.id값과 클릭했을때 불러온 id값이 일치하지 않다면
        this.setState({
            ...this.state,
            names: nextNames
        })
        //기본 상태뿌려주기
        //일치하지 않는 id값을 제외 일치하는 id값 삭제
    }
    render(){ //화면에 그리기
        const {names, inputText, nextId} = this.state; //상태관리값들 구조분해할당 해주기
        const namelist = names.map((name, index)=> <li key={name.id}>{name.text} 
        <button onClick={()=>this.onRemove(name.id)}>삭제</button></li>)
        //state에 있는 names 전체 다 돌리고 li태그와 삭제버튼 태그 namelist에 할당
        return(
            <div>
                <input value={inputText} onChange={this.onChange}/>
                {/* input 기본값 , 체인지 이벤트 */} 
                <button onClick={this.onClick}>추가</button>
                {/* 클릭이벤트 */}
                <ul>
                    {namelist}
                    {/* map으로 돌려준 값 ul안에 뿌려주기 */}
                </ul>
            </div>
        )
    }
}

export default ClassIteration