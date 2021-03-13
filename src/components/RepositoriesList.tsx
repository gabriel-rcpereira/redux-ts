import { useState } from 'react';

import { useActions } from '../hooks';

const RepositoriesList: React.FC = () => {
  const [ name, setName ] = useState('');
  const { searchRepositories } = useActions();

  const handleOnClickSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    searchRepositories(name);
  };

  return (
    <form>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleOnClickSearch}>Search Repositories</button>
    </form>
  );
};

export default RepositoriesList;