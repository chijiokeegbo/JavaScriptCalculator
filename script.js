const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = [ '/', '*', '-', '+'];
const ids = {
  7: 'seven',
  8: 'eight',
  9: 'nine',
  4: 'four',
  5: 'five',
  6: 'six',
  1: 'one',
  2: 'two',
  3: 'three',
  0: 'zero',
  '/': 'divide',
  '*': 'multiply', 
  '-': 'subtract', 
  '+': 'add'
}

class App extends React.Component {
  state = {
    lastPressed: undefined,
    calc: '0',
    operation: undefined
  }

  handleClick = (e) => {

    const {calc, lastPressed} = this.state;
    const {innerText} = e.target;

    /*this.setState({
      calc: currentNum + innerText,
      currentNum: currentNum + innerText,
      lastPressed: innerText
    }); */

    switch(innerText){
      case 'AC' : {
        this.setState({
          calc: '0'
        });
        break;
      }
      case '=': {
        const evaluated = eval(calc);
        this.setState({
          calc: evaluated
        });
        break;
      }
      case '.' : {
        const splitted = calc.split(/[\+\-\*\/]/);
        const last = splitted.slice(-1)[0];

        if(!last.includes('.')){
          this.setState({
            calc: calc + '.'
          })
        }
        break;
      }
      default: {
        let e = undefined;
        if(ops.includes(innerText)){
        if(ops.includes(lastPressed) && innerText !== '-'){
          const lastNumId = calc.split('').reverse().findIndex(char => char !== ' ' 
            && nums.includes(+char));
          e = calc.slice(0, calc.length -lastNumId) + `${innerText}`
        }else{
          e =  `${calc} ${innerText }`
        }
      } else {
          e = (calc === '0') ? innerText : (calc + innerText);
      }
      this.setState({
            calc: e
        });

        this.setState({
          lastPressed: innerText
        })
    }
    
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
  }
    render(){
      const {calc} = this.state;
    return (
            <div className="calculator"><div 
                id="display" 
                className="display">
                {calc}
              </div>
                <div className="nums-container">
                  <button 
                  className=" big-h light-gray ac" 
                  onClick={this.handleClick} 
                  id="clear"
                  >
                  AC
                  </button>
                  {nums.map(num => (
                    <button 
                      className={`dark-gray ? ${num === 0 && 'big-h'}`} 
                      key={num} onClick={this.handleClick}
                      id={ids[num]}
                    >{num}</button>
                  ))}
                  <button 
                    className="light-gray" 
                    onClick={this.handleClick} 
                    id="decimal"
                  >.</button>
                </div>
                <div className="ops-container">
                  {ops.map(op =>(
                    <button 
                      id={ids[op]} 
                      className={`orange ? ${op === '=' && 'big'}`} 
                      key={op} 
                      onClick={this.handleClick}
                    >{op}</button>
                  ))}
                  <button 
                    className="orange" 
                    onClick={this.handleClick} 
                    id="equals"
                  >=</button>
                </div>
              
            </div>
          )
      }
  }


  
ReactDOM.render(<App/>, document.getElementById("root"));