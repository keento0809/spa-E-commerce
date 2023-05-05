interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ onChange }: Props) {
  return <input type="text" onChange={onChange} />;
}
