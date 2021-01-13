import React, { useState, useEffect } from 'react';
import * as prob from './problems';

const JavaScript: React.FC = () => {
  const [result, setResult] = useState();
  const showResult = (result: any) => {
    setResult(result);
  };

  useEffect(() => {
    showResult(prob.generalConsole());
  }, []);

  if (result) {
    console.log(result);
  }

  return (
    <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
      JavaScript Challenges
    </div>
  );
};

export default JavaScript;
