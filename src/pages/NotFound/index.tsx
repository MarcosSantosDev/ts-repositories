import React from 'react';
import { useHistory } from 'react-router-dom';
import { iconLoader } from '../../utils/iconLoader';

import {
  Container, FormWrapper, Input, Button,
} from './styled';

const NotFound: React.FC = () => {
  const history = useHistory();

  const handleOnSubmit = () => {
    const elementInput: any = document.getElementById('userName');

    if (elementInput && elementInput?.value) {
      history.push(`/${elementInput?.value}`);
    }
  };

  const handleOnSubmitByKeyUp = (event: any) => {
    if (event.which === 13) {
      handleOnSubmit();
    }
  };

  return (
    <Container>
      <div className="notFound-404">404</div>
      <div className="notFound-message">Ops, page not found!</div>
      <FormWrapper>
        <Input
          type="text"
          name="userName"
          id="userName"
          placeholder="Write here the name of the profile"
          onKeyUp={handleOnSubmitByKeyUp}
        />
        <Button type="button" onClick={handleOnSubmit}>
          Find profile
          {iconLoader('github', 16)}
        </Button>
      </FormWrapper>
    </Container>
  );
};

export default NotFound;
