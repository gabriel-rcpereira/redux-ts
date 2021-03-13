import { useState } from 'react';

import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';


const RepositoriesList: React.FC = () => {
  const [ name, setName ] = useState('');
  const { searchRepositories } = useActions();
  const { data, loading, error } = useTypedSelector((state) => state.repositories);

  const handleOnClickSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    searchRepositories(name);
  };

  return (
    <form>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleOnClickSearch}>Search Repositories</button>
      { error && <h3>{error}</h3> }
      { loading && <h3>Loading...</h3> }
      { !error && !loading && data && (<ul> { data.map(name => (<li>{name}</li>)) } </ul>) }
    </form>
  );
};

export default RepositoriesList;