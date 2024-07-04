'use client';

import { useState } from 'react';

const NewToDoForm = () => {
  const [state, updateState] = useState();
  console.log(window.localStorage);
  return (
    <div>
      <form>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewToDoForm;
