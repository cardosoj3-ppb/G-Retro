type containerPros = {
  style: React.CSSProperties;
};

export const Container = (props: containerPros) => {
  return <div style={props.style}> Text content goes here </div>;
};
