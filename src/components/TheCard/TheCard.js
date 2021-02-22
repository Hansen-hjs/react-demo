import React, { useState } from 'react';
import './TheCard.css';

/**
 * `TheCard`函数组件
 * @description 
 * 函数组件有个好处就是代码注释可以跨文件提示，`calss`组件不行 <br />
 * HOOK learn: https://zh-hans.reactjs.org/docs/hooks-intro.html
 * @param {object} props 组件参数
 * @param {string} props.title 标题
 * @param {string} props.poster 图片
 * @param {string} props.posterDec 图片描述
 * @param {string} props.content 内容
 * @param {boolean} props.options 是否需要按钮操作
 * @param {(value: string) => void} props.setContent 传给父组件的回调函数
 */
export default function TheCard(props) {

    /** 默认数据 */
    const defaultData = {
        title: 'The card title',
        poster: 'https://54d4a4629fb6b.t73.qifeiye.com/qfy-content/uploads/2015/06/27f237e6b7f96587b6202ff3607ad88a.jpg',
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
        // fetch('https://douban.uieee.com/v2/movie/top250?start=1&count=5').then(response => response.json()).then(res => {
        //     console.log('fetch', res);
        // })
    }
    
    // function PosterImage() {
    //     const value = showDefaultPoster ? defaultData.poster : (props.poster || defaultData.poster);
    //     return <img src={ value } alt="the-card-poster" />
    // }

    return (
        <div className="card the-card">
            <h2 className="title">{ props.title || defaultData.title }</h2>
            <div className="poster">
                {/* <PosterImage /> */}
                <img src={ showDefaultPoster ? defaultData.poster : (props.poster || defaultData.poster) } alt="the-card-poster" />
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