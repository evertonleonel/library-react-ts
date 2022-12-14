import { SpanError } from './InputErrorStyles';

export interface IErrorProps {
  erro?: string | null;
}

const InputError = ({ erro }: IErrorProps) => {
  return <SpanError>{erro}</SpanError>;
};

export default InputError;
