import { Input as InpuAntd, InputProps as InputPropsAntd } from 'antd';
import { BoxInput, TitleInput } from './input.styles';

interface InputProps extends InputPropsAntd {
  title?: string;
}

const Input = ({ title, ...props }: InputProps) => {
  return (
    <BoxInput>
      {title && (
        <TitleInput>
          {title}
        </TitleInput>
      )}
      <InpuAntd {...props}/>
    </BoxInput>
  )
    
};

export default Input;