export default function html([first, ...strings], ...values) {
    return values.reduce((acc,cur) => acc.concat(cur, strings.shift()), [first])
    .filter(x=>x&&x!==true||x===0)
    .join('')
}

export function createStore (reducer) {
    let state = reducer()
    const roots = new Map()

    function render () {
        for ( const [ root, component ] of roots) {
            const output = component()
            root.innerHTML = output
        }
    }
    return {
        // Nhận từ View các giá trị (root, component) vào roots và xuất ra UI để thể hiện thay đổi
        attach(component, root) {
            // set các cặp giá trị root (element), component (hàm xuất ra html) vào roots
            roots.set(root, component);
                // xuất ra UI
            render()
        },
        // đẩy giữ liệu qua đối số selector từ store vào View (muốn lấy dữ liệu từ store thì phải dùng hàm connect)
        connect(selector = state => state) {
            return component => (props, ...agrs) =>
            component(Object.assign({}, props, selector(state), ...agrs))
        },

        // View thực hiện hành động thì phải mô tả hành động đó qua dispatch
        dispatch(actions, ...agrs) {
            // khi thực hiện hành động thì hàm reducer update lại state thông qua các hành động
            state = reducer(state, actions, ...agrs)
            render()
        }
    }
}


