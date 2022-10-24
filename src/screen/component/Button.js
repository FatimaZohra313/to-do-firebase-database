function Button(props) {
    console.log();
    return <button onClick={props.click} className={`btn  ${props.className}`}>{props.btnValue}</button>;
}
export default Button;