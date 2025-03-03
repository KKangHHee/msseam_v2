import { useNavigate } from 'react-router-dom';
import './TextSeparator.css';

interface TextSeparatorProps {
  array: {
    text: string;
    path: string;
  }[];
}
const TextSeparator = ({ array }: TextSeparatorProps) => {
  const navigate = useNavigate();
  const handleClick = (text: string) => {
    navigate(text);
  };
  return (
    <div className='textSeparator'>
      <ul>
        {array.map((item, idx) => (
          <li key={idx} className='' onClick={() => handleClick(item.path)}>
            <button>{item.text}</button>
            {idx < array.length - 1 && <span>|</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextSeparator;
