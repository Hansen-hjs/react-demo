class ModuleStore {
    bookInfo = {
        /** 书名 */
        name: Math.random().toString(36).substr(2),
        /** 书本价格 */
        price: Math.floor(Math.random() * 80) + 10
    }
}

/** 状态模块 */
const store = new ModuleStore();

export default store;