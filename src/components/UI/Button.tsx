import './UI.css';

type Params = {
    text: string;
}

function Button(props:Params) {
  return (
    <button className="button" type="submit">
        <div className="button__text" >{props.text}</div>
    </button>
  );
}

export default Button;