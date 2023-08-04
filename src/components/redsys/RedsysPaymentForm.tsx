import React, { useState } from 'react';
import RedsysForm from './RedsysForm';
import RedsysScriptLoader from './RedsysScriptLoader';
import { RedsysFormProps } from './types';

interface Props extends RedsysFormProps {
  mode: 'sandbox' | 'production';
}

const RedsysPaymentForm: React.FC<Props> = (props) => {
  const { mode, ...rest } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <RedsysScriptLoader
        isSandbox={mode === 'sandbox'}
        onLoad={() => setIsLoaded(true)}
      />
      {isLoaded && <RedsysForm {...rest} />}
    </>
  );
};

export default RedsysPaymentForm;
