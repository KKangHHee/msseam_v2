import '@/components/atoms/button/Button.css';
import { Color } from '@/type/colorType';

type ButtonColor = Exclude<Color, 'black' | 'white' | 'dark-gray' | 'alarm-red'>;

interface ButtonProps {
  text: string;
  size: 'sm' | 'md' | 'lg';
  color?: ButtonColor;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({
  text,
  size = 'sm',
  color = 'purple',
  onClick = undefined,
  disabled = false,
  type = 'button',
}: ButtonProps) => (
  <button type={type} className={`btn ${color} ${size}`} onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

export default Button;
