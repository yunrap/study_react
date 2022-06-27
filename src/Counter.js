import { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할때는 this.state로 조회한다
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지않는값 {fixedNumber}</h2>
        <button
          //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            this.setState((prevState) => {
              return { number: prevState.number + 1 };
            }); //변하는값만 설정
            this.setState((prevState) => ({ number: prevState.number + 1 }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
