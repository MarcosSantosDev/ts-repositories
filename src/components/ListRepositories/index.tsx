import React from 'react';

interface Repository {
  id: number
  name: string
}

interface Props {
  repositories: Repository[]
}

const RepositoriesList = (props: Props) => {
  const { repositories } = props;

  return (
    <div>
      <ul>
        {
          repositories.map((repository) => <li>{repository.name}</li>)
        }
      </ul>
    </div>
  );
};

export default RepositoriesList;
