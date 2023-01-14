import './button.css';

// eslint-disable-next-line react/prop-types
function Button({ text, color }) {
  return (
    <div>
      <button style={{ backgroundColor: color }} type="submit">
        {text}
      </button>
    </div>
  );
}

export default Button;
