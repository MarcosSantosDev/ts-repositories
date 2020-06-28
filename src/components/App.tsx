import React, { useState, useEffect } from 'react';

import ListRepositories from './ListRepositories';

import repository from '../services/GitHub/repository';

interface Repository {
  id: number
  name: string
}

const App = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const handleRepositories = async () => {
    const { data } = await repository.get();
    setRepositories(data);
  };

  useEffect(() => {
    handleRepositories();
  }, []);

  return (
    <div className="App">
      <ListRepositories repositories={repositories} />
    </div>
  );
};

export default App;
