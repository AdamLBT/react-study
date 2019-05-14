import React from 'react';

class List extends React.Component{

    //构造函数，初始化的作用
    constructor(props){
        //父组件调用子组件时能获得参数
        super(props);
        //局部状态，仅在当前组件中有效
        //作用：1.动态改变UI；2.获取UI上数据状态的变化；
        this.state = {
            arr : [1,2,3]
        }

        //每隔一秒改变arr
        setInterval(() => {
            this.setState({
                arr : [...this.state.arr,Math.random()]
            })
        }, 1000);

    }

    //渲染
    render(){
        //将state中的局部状态解构到不能变量上
        let{arr} = this.state;

        return(
            <div>
                你好LBT
                <ul>
                    {
                        arr.map((item,index) => <li key={index}>{item}</li>)
                    }
                </ul>
            </div>
        );
    }

}

export default List;