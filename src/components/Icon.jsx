const Icon = ({ id, width = 24, height = 24, color = 'currentColor' }) => {
    return (
      <svg width={width} height={height} fill={color} aria-hidden="true">
        <use href={`/sprite.svg#${id}`} />
      </svg>
    );
  };
  
  export default Icon;