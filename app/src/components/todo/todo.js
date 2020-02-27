import React from 'react';
import './todo.css';

export default class Todo extends React.Component {
    /** 数据状态 */
    state = {
        /** 内容 */
        info: '',
    }

    /**
     * 监听输入事件
     * @param {Event} e 
     */
    onInput(e) {
        let value = e.target.value;
        this.setState({
            info: value
        });
        if (value) {
            this.props.getHomeData('子组件数据：', value);
        } else {
            this.props.getHomeData('');
        }
    }

    sendData() {
        this.props.add(this.state.info);
        this.setState({
            info: ''
        });
        this.props.getHomeData('');
    }

    render() {
        return (
            <div className="todo card">
                <div className="info">父组件传过来的数据: { this.props.content }</div>
                <input className="card input" type="text" onChange={ this.onInput.bind(this) } value={ this.state.info } placeholder="输入内容"></input>
                <button className="button green-btn" onClick={ this.sendData.bind(this) }>添加一条数据到父组件列表</button>
            </div>
        )
    }
}