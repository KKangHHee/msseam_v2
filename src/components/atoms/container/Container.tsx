import { Color } from '@/type/colorType';

import { ReactNode } from 'react';

type ContainerColor = Exclude<Color, 'black' | 'dark-gray' | 'alarm-red' | 'light-purple' | 'gray'>;

export interface ContainerProps {
  children: ReactNode;
  color?: ContainerColor;
}

const Container = ({ children, color = 'white' }: ContainerProps) => {
  return (
    <div className='container-full' style={{ background: color }}>
      {children}
    </div>
  );
};

export default Container;
