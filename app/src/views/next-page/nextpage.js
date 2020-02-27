import React from 'react';
import './next-page.css';

export default function NextPage(props) {

    console.log(props);

    const info = '散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。 调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。 似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光， 找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！';

    function goBack() {
        window.history.go(-1);
    }

    return (
        <div className="next-page">
            <div className="card">
                <h2 className="title">The new page</h2>
                <div className="poster">
                    <img src="https://muse-ui.org/img/sun.a646a52d.jpg" />
                    <div className="poster-dec flex fvertical">The poster</div>
                </div>
                <div className="info">{ info }</div>
                <button className="button blue-btn">切换图片</button>
                <button className="button green-btn">更换文字</button>
            </div>
            <div style={{ marginBottom: '10px' }}>页面参数：{ JSON.stringify(props, null, 4) }</div>
            <button className="button green-btn" onClick={ goBack }>返回</button>
        </div>
    )
}