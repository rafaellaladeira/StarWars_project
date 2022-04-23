import React, { useState } from 'react';

function useFilterName() {
  const [filterByName, setFilterByName] = useState('');

  return (
    <section>
      <input
        data-testid="name-filter"
        type="text"
        name="name"
        placeholder="Nome do planeta"
        value={ filterByName }
        onChange={ (e) => setFilterByName(e.target.value) }
      />
    </section>
  );
}

export default useFilterName;
