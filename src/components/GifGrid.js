import React from 'react';
import 'animate.css/animate.css';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

  const {data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__flash">{category}</h3>
      {loading && 'Cargando'}

      <div className="card-grid">
        {
          images.map(image =>
            <GifItem {...image} />
          )
        }
      </div>
    </>
  );
}
