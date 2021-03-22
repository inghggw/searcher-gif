import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Soccer']);

  /*const handleAdd = () => {
    setCategories([...categories, 'Golf']);
    //setCategories(cats => [...cats, 'Golf']);
  };*/

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/*<button onClick={handleAdd}>Add</button>*/}

      <ol>
        {
          categories.map(category =>
            <GifGrid
              key={category}
              category={category} />
          )
        }
      </ol>
    </>
  );
};

export default GifExpertApp;
