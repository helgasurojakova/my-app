import './UI.css';

function AddButton() {
  return (
    <div className="add-button">
        <svg className="add-button__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.89999 7.99999C1.89999 7.66862 2.16862 7.39999 2.49999 7.39999H13.5C13.8314 7.39999 14.1 7.66862 14.1 7.99999C14.1 8.33136 13.8314 8.59999 13.5 8.59999H2.49999C2.16862 8.59999 1.89999 8.33136 1.89999 7.99999Z" fill="#82B284"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99999 1.89999C8.33136 1.89999 8.59999 2.16862 8.59999 2.49999V13.5C8.59999 13.8314 8.33136 14.1 7.99999 14.1C7.66862 14.1 7.39999 13.8314 7.39999 13.5V2.49999C7.39999 2.16862 7.66862 1.89999 7.99999 1.89999Z" fill="#82B284"/>
        </svg>
        <div className="add-button__text">ДОБАВИТЬ ИЗОБРАЖЕНИЕ</div>
    </div>
  );
}

export default AddButton;