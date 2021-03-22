import React from 'react';

export const GifItem = (props) => {
  const { id, title, url } = props;

  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} id={id}/>
      <h5>{title}</h5>
    </div>
  );
}
