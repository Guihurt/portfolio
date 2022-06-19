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

const ProgressBar = ({ progress = 0, title = "Untitled Grail" }: ProgressBarProps) => {

  return (
    <div>
      <p>{title}</p>
      <div className="min-w-[100px] relative border-2 rounded-xl border-solid border-black">
        <div>
          <Bar
            className="transition-[width] h-6 bg-amber-200 rounded-xl"
            progress={progress}
          >
          </Bar>
        </div>
        <p className="absolute top-0 right-0 pr-1.5">
          {progress}%
        </p>
      </div>
    </div>
  )
}

export default ProgressBar;