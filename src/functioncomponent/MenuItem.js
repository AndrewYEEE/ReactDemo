function MenuItem(props) { //傳入參數
    let {name , num} = props;
    return <li className="menu-item" id="show-area"> {name} {num}</li>
}

export default MenuItem;
