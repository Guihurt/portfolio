import { useEffect } from "react";
import styled from 'styled-components';
import styles from '../ProgressBar/ProgressBar.module.css';

interface ProgressBarProps {
  progress?: number;
  title?: string;
}

const Bar = styled.div<ProgressBarProps>`
  width: ${props => props.progress}%;
`;

const ProgressBar = ({ progress = 0, title = "Progress Bar" }: ProgressBarProps) => {

  return (
    <div>
      <p>{title}</p>
      <div className="min-w-[100px] relative border border-solid border-black">
        <Bar
          className="transition-[width] h-6 bg-amber-200"
          progress={progress}
        >
        </Bar>
        <p className="absolute top-0 right-0">
          {progress}%
        </p>
      </div>
    </div>
  )
}

export default ProgressBar;