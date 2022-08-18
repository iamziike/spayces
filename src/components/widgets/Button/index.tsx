import classes from './Button.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

const Button = ({ title, className = '', ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${className} ${classes.button} pointer-cursor`}
    >
      {title}
    </button>
  );
};

export default Button;
