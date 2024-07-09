import './Button.css';

function Button(props) {
    let stylebtn = {
        backgroundColor:props.bgColor,
        color:props.color,
    }
    console.log(stylebtn);

    return(
        <>
            <button className='btn' style={stylebtn}>{props.title || 'click ME'}</button>
        </>
    );
}

export default Button;