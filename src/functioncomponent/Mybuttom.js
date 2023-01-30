function MyButton(props){
    return(
         <button onClick={props.handleClick}> {props.children}</button> 
    );
  }
  export default MyButton;