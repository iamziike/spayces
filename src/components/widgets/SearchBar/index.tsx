import classes from './SearchBar.module.css';
import Icon from '../Icon';
import { VoidFunctionWithParams } from '../../../types/types';
import { ReactComponent as SearchIcon } from '../../../assets/images/search.svg';

type SearchBarProps = {
  placeholder?: string;
  className?: string;
  hasBoard?: boolean;
  onInputChange?: VoidFunctionWithParams<string>;
  onSubmit?: VoidFunctionWithParams<string>;
};

const SearchBar = ({
  onInputChange,
  placeholder = 'Search',
  hasBoard,
  className = '',
}: SearchBarProps) => {
  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (onInputChange) onInputChange(target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
  };

  return (
    <form
      className={`${classes['searchbar-wrapper']} opacified-bg ${className} ${
        hasBoard ? classes['searchbar-wrapper--border'] : ''
      }`}
      onSubmit={handleSubmit}
    >
      <button type='submit'>
        <Icon value={SearchIcon} />
      </button>
      <input
        placeholder={placeholder}
        type='search'
        onChange={handleInputChange}
      ></input>
    </form>
  );
};

export default SearchBar;
