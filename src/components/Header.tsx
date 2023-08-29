import { type ChangeEvent, useState, type FormEvent, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsSearch, BsYoutube } from 'react-icons/bs';

export default function Header() {
  const navigator = useNavigate();
  const { keyword } = useParams();
  const [searchText, setSearchText] = useState('');
  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigator(`/videos/${searchText}`);
  };
  useEffect(() => {
    setSearchText(keyword ?? '');
  }, [keyword]);
  return (
    <header className="header">
      <Link to="/" className="logo">
        <BsYoutube />
        <span>Youtube</span>
      </Link>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="search"
          value={searchText}
          onChange={handleChangeSearch}
          className="search-input"
        />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
