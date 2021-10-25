import { FC, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface IProps {}

const Portal: FC<IProps> = ({ children }) => {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default Portal;
