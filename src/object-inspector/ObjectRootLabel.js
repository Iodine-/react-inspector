import React from 'react';
import ObjectName from '../object/ObjectName';
import ObjectPreview from './ObjectPreview';

const ObjectRootLabel = ({ name, data, expanded, format }) => {
  if (typeof name === 'string') {
    return expanded ? (
      <span>
        <ObjectName name={name} />
        <span>: {'{'}</span>
      </span>
    ) : (
      <span>
        <ObjectName name={name} />
        <span>: </span>
        <ObjectPreview data={data} format={format} />
      </span>
    );
  } else {
    return expanded ? '{' : <ObjectPreview data={data} format={format} />;
  }
};

export default ObjectRootLabel;
