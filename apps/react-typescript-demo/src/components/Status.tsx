type statusProps = {
  status: 'loading' | 'success' | 'error';
};

export const Status = (props: statusProps) => {
  let message;

  if (props.status === 'loading') {
    message = 'Loading...';
  } else if (props.status === 'success') {
    message = 'Data fetched successfully!';
  } else if (props.status === 'error') {
    message = 'Error fetching data';
  }

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};
