/**
 * @author https://github.com/Hansen-hjs
 * @description 工具类
 */
class ModuleUtil {
    /**
     * 获取日期周几
     * @param {string | Date} date 日期 '2019/04/28' & '2019/04/28 12:12:12'
     */
    getDateDayString(date) {
        return '周' + '日一二三四五六'.charAt(new Date(date).getDay());
    }

    /**
     * 将秒数换成时分秒格式
     * @param {number} value 秒数
     */
    secondFormat(value) {
        let day = 0, hour = 0, minute = 0, second = 0;
        day = Math.floor(value / (24 * 3600));
        hour = Math.floor(value / 3600) - (day * 24);
        minute = Math.floor(value / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(value) - (day * 24 * 3600) - (hour * 3600) - (minute * 60);
        // 格式化
        day = ('0' + day).slice(-2);
        hour = ('0' + hour).slice(-2);
        minute = ('0' + minute).slice(-2);
        second = ('0' + second).slice(-2);
        return { day, hour, minute, second };
    }

    /**
     * 时间戳生成 
     * @param {number} num 1时为明天，-1为昨天天，以此类推
     * @description 返回格式：'yyyy/mm/dd hh:mm:ss'
     */
    getDateFormat(num = 0) {
        const date = new Date(Date.now() + (num * 24 * 3600 * 1000));
        const year = date.getFullYear();
        const month = `0${date.getMonth() + 1}`.slice(-2);
        const day = `0${date.getDate()}`.slice(-2);
        const hour = `0${date.getHours()}`.slice(-2);
        const minute = `0${date.getMinutes()}`.slice(-2);
        const second = `0${date.getSeconds()}`.slice(-2);
        return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
    }

    /**
     * 写入并下载文件（只支持Chrome && Firefox）
     * @param {string} filename 文件名 xxx.text | xxx.js | xxx.[type]
     * @param {string} content 文件内容
     */
    download(filename, content) {
        const label = document.createElement('a');
        label.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
        label.setAttribute('download', filename);
        if (document.createEvent) {
            const event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            label.dispatchEvent(event);
        } else {
            label.click();
        }
    }

    /**
     * 点击复制
     * @param {string} text 复制的内容
     * @param {Function} success 成功回调
     * @param {(res: string) => void} fail 出错回调
     */
    copyText(text, success = null, fail = null) {
        text = text.replace(/(^\s*)|(\s*$)/g, '');
        if (!text) {
            fail && fail('复制的内容不能为空！');
            return;
        }
        const id = 'the-clipboard';
        let clipboard = document.getElementById(id);
        if (!clipboard) {
            clipboard = document.createElement('textarea');
            clipboard.id = id;
            clipboard.style.cssText = 'font-size: 15px; position: fixed; top: -1000%; left: -1000%;';
            document.body.appendChild(clipboard);
        }
        clipboard.value = text;
        clipboard.select();
        clipboard.setSelectionRange(0, clipboard.value.length);
        document.execCommand('copy');
        success && success();
    }
    
}

/** 工具模块 */
const utils = new ModuleUtil();

export default utils;

