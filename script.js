const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = [ '/', '*', '-', '+', '='];

class App extends React.Component {
  state = {
    lastPressed: undefined,
    currentNum: '0',
    calc: undefined,
    operation: undefined
  }

  handleClick = (e) => {

    const {calc, currentNum} = this.state;
    const {innerText} = e.target;

    this.setState({
      currentNum: currentNum + innerText
    });

    /*
    const {currentNum, prevNum, operation} = this.state;
    const {innerText} = e.target;

    this.setState({
      lastPressed: innerText
    })

    if(!Number.isNaN(Number(innerText))){
      if(currentNum === '0'){
        this.setState({
          currentNum: innerText
        })
      }else if(operation.includes(lastPressed)){

      }else{
        this.setState({
          currentNum: currentNum + innerText
        });
      }
      return;
    }

    switch(innerText){
      case 'AC' :{
        this.setState({
          currentNum: '0',
          prevNum: undefined,
          operation: undefined
        });
        break;
      }// to add dot, first check if the number collection has dot
      case '.' : {
        if(!currentNum.includes('.')){
            this.setState({
            currentNum: currentNum + innerText
          })
        }
        break;
      }
      default: {
        if(!operation){
          this.setState({
            operation: innerText,
            prevNum: currentNum,
            currentNum: ''
          });
        }else 
        if(innerText === '='){
            const evalued = eval(`${prevNum} ${operation} ${currentNum}`);
            this.setState({
              operation: undefined,
              prevNum: evalued,
              currentNum: innerText === '=' ? evalued : '0'
            });
        } else {
          this.setState({
            operation: innerText
          })

        }
      }
    }
    //this.setState({
    //  lastPressed: innerText
    //});
*/
  }

  render(){
    const {currentNum, prevNum, operation} = this.state;
  return (
          <div className="calculator">
            <p style={{position: 'absolute', top: '0'}}>{JSON.stringify(this.state, null, 2)}</p>
            <div id="display" className="display">
              <small>{calc} </small>
              {currentNum}
            </div>
              <div className="nums-container">
                <button className=" big-h light-gray ac" onClick={this.handleClick}>AC</button>
                {nums.map(num => (
                  <button className={`dark-gray ? ${num === 0 && 'big-h'}`} key={num} onClick={this.handleClick}>{num}</button>
                ))}
                <button className="light-gray" onClick={this.handleClick}>.</button>
              </div>
              <div className="ops-container">
                {ops.map((op, idx) =>(
                  <button id="equals" className={`orange ? ${op === '=' && 'big'}`} key={op} onClick={this.handleClick}>{op}</button>
                ))}
              </div>
            
          </div>
        )
    }
  }
ReactDOM.render(<App/>, document.getElementById("root"));