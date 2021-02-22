import React, { useState } from "react";
import "./next-page.css";
import TheCard from "../../components/TheCard/TheCard";

export default function NextPage(props) {
    
    const [cardOne, setCardOne] = useState({
        title: "Card One",
        poster: "https://54d4a4629fb6b.t73.qifeiye.com/qfy-content/uploads/2015/06/c6bdf6f65f3845da9085e9ae5790b494.jpg",
        posterDec: "森林-糜花鹿",
        content: "起飞页是一款简单、便捷的工具，可以帮助您制作响应式网站。我们的网站构建器，将传统的编码工作转化为直观的拖拽操作和文字录入。在这里，您仅需花上10分钟便可以完成一个H5响应式网站，您会发现完全不需要编写一行代码，这就是起飞页自助建站的神奇之处。起飞页是一款简单、便捷的工具，可以帮助您制作响应式网站。我们的网站构建器，将传统的编码工作转化为直观的拖拽操作和文字录入。在这里，您仅需花上10分钟便可以完成一个H5响应式网站，您会发现完全不需要编写一行代码，这就是起飞页自助建站的神奇之处。"
    });
    
    // const cardTwo = {...cardOne};
    // cardTwo.title = "Card Two";

    const propsData = `props参数: \n ${JSON.stringify(props, null, 4)}`;

    function modifyCardOneContent(value) {
        // console.log("modifyCardOneContent", value);
        const data = {...cardOne}; // 这里需要注意，必须是一个新对象，如果用`cardOne.content = value`再传入`setCardOne(cardOne)`的话会导致视图不更新
        data.content = value;
        setCardOne(data);
    }

    function goBack() {
        window.history.go(-1);
    }
    
    return (
        <div className="next-page">
            <TheCard title={ cardOne.title } poster={ cardOne.poster } posterDec={ cardOne.posterDec } content={ cardOne.content } options={ true } setContent={ modifyCardOneContent } />
            <TheCard title="Card Two" posterDec="Horses and beauties" />
            <textarea className="props-box" defaultValue={ propsData }></textarea>
            <button className="button green-btn" onClick={ goBack }>返回</button>
        </div>
    )
}