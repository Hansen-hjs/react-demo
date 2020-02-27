import React, { useState } from 'react';
import './TheCard.css';

/**
 * `TheCard`函数组件传参处理
 * @description HOOK learn: https://zh-hans.reactjs.org/docs/hooks-intro.html
 * @param {any} props 
 */
export default function TheCard(props) {

    // console.log(props);

    /** 默认数据 */
    const defaultData = {
        title: 'The card title',
        poster: 'https://muse-ui.org/img/sun.a646a52d.jpg',
        posterDec: 'The poster',
        content: '散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。 调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。 似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光， 找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！',
    }

    const [showDefaultPoster, setDefaultPoster] = useState(false);
    // let showDefaultPoster = false;
    
    function switchPoster() {
        setDefaultPoster(!showDefaultPoster);
    }

    function setDefaultContent() {
        // console.log(props);
        props.setContent(defaultData.content);
    }

    return (
        <div className="card the-card">
            <h2 className="title">{ props.title || defaultData.title }</h2>
            <div className="poster">
                {
                    showDefaultPoster ? <img src={ defaultData.poster } alt="the-card-poster" /> : <img src={ props.poster || defaultData.poster } alt="the-card-poster" />
                }
                <div className="poster-dec flex fvertical">{ props.posterDec || defaultData.posterDec }</div>
            </div>
            <div className="info">{ props.content || defaultData.content }</div>
            {
                props.options && <div>
                    <button className="button blue-btn" onClick={ switchPoster }>切换图片</button>
                    <button className="button green-btn" onClick={ setDefaultContent }>设置成默认文字</button>
                </div>
            }
        </div>
    )
}