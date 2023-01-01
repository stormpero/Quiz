import React from 'react';

export const Answer = ({variant, result, ...props}) => {
    return (
          <li {...props} className={result} key={variant}>{variant}</li>
    );
};
