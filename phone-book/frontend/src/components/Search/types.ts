export type SearchProps = {
  inputWidth?: string;
  onSearch: (value: string) => void;
  currentValue?: string;
  message?: string;
};

export interface IContainer {
  size?: string;
}
