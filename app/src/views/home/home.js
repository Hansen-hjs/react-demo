import React from 'react';
import './home.css';
import logo from '../../logo.svg';
import Todo from '../../components/todo/todo';

export default class Home extends React.Component {
    /** 数据状态 */
    state = {
        /** 内容 */
        text: '',
        /** 子组件传过来的数据 */
        homeData: '',
        list: [
            {
                name: '列表一',
                id: 0
            }, {
                name: '列表二',
                id: 1
            }
        ]
    }

    /** 清空输入 */
    clearInput() {
        this.setState({
            text: '',
            homeData: ''
        });
    }

    /**
     * 监听输入
     * @param {Event} e
     */
    onInput(e) {
        // console.log(e.target.value);
        let value = e.target.value;
        this.setState({
            text: value
        });
    }
    
    /** 获取子组件数据 */
    getData(...agrs) {
        let value = [...agrs].toString().replace(',','');
        this.setState({
            homeData: value
        });
    }

    /**
     * 添加一条数据到列表中
     * @param {string} text 
     */
    addList(text) {
        if (!text) return;
        let list = this.state.list;
        let id = list.length > 0 ? list[list.length - 1].id + 1 : 0;
        list.push({
            name: text,
            id: id
        });
        this.setState({
            list: list
        });
    }

    /**
     * 移除指定列表item
     * @param {number} index item索引 
     */
    removeListItem(index) {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list
        });
    }

    render() {
        return (
            <div className="home">
                <img className="logo" src={ logo } alt="logo" />  
                
                { this.state.list.length > 0 && <div className="list">
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <div className="item" key={ item.id }>
                                        <div className="item-name flex fvertical">
                                            <div className="f1">{ item.name }</div>
                                            <button className="button red-btn" onClick={ this.removeListItem.bind(this, index) }>删除</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
                
                <input className="card input" type="text" onChange={ this.onInput.bind(this) } value={ this.state.text } placeholder="输入内容到子组件中去"></input>
                { this.state.homeData && <div className="card text-box">{ this.state.homeData }</div> }
                <button className="button blue-btn clear-btn" onClick={ this.clearInput.bind(this) }>清空输入</button>
                { this.state.text && <Todo content={ this.state.text } getHomeData={ this.getData.bind(this) } add={ this.addList.bind(this) } /> }
            </div>
        )
    }
}