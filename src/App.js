import React from 'react';
import TodoList from './TodoList'

// function App() {
  class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      list:[
      ],
      addValue:""
    }
  }
  addList(list){
    let _val = this.state.addValue;
    if(_val){
      this.setState({
        list: [ ...this.state.list , this.state.addValue],
        addValue:""
      })
    }else{
      alert("请添加内容")
    }
  }
  deleteList(index){
    let list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list
    })
  }
  changeValue(e){
    this.setState({
      addValue:e.target.value
    })
  }
  render(){
    return (
        <div>
          <ul>
            {
              this.state.list.map((item,index) => {
                return <TodoList key={index} val={item}/>
                // return <li key={index} onClick={this.deleteList.bind(this,index)}>{item}</li>
              })
            }
          </ul>
          <input value={this.state.addValue} onChange={this.changeValue.bind(this)}/>
          <p onClick={this.addList.bind(this)}>添加</p>
          <p onClick={this.deleteList.bind(this)}>删除</p>
        </div>
    );
  }
}

export default App;
