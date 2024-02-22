type inputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, handleChange }: inputProps) => {
  return <input type="text" value={value} onChange={handleChange} />;
};
