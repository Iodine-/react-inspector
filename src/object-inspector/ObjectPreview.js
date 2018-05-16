import React from 'react';
import PropTypes from 'prop-types';

import ObjectValue from '../object/ObjectValue';
import ObjectName from '../object/ObjectName';

/* NOTE: Chrome console.log is italic */
const styles = {
  preview: {
    fontStyle: 'italic',
  },
};

/* intersperse arr with separator */
function intersperse(arr, sep) {
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce((xs, x) => xs.concat([sep, x]), [arr[0]]);
}

function renderPropertyNodes(obj, arr, sep, format) {
  switch (format) {
    case 'count':
      return `${Object.keys(obj).length} items`;
    default:
      return (
        intersperse(arr, sep)
      )
  }
}

/**
 * A preview of the object
 */
const ObjectPreview = ({ data, maxProperties, format }) => {
  const object = data;

  if (
    typeof object !== 'object' ||
    object === null ||
    object instanceof Date ||
    object instanceof RegExp
  ) {
    return <ObjectValue object={object} />;
  }

  if (Array.isArray(object)) {
    return (
      <span style={styles.preview}>
        [
        {intersperse(
          object.map((element, index) => <ObjectValue key={index} object={element} />),
          ', ',
        )}
        ]
      </span>
    );
  } else {
    let propertyNodes = [];
    for (let propertyName in object) {
      const propertyValue = object[propertyName];
      if (object.hasOwnProperty(propertyName)) {
        let ellipsis;
        if (
          propertyNodes.length === maxProperties - 1 &&
          Object.keys(object).length > maxProperties
        ) {
          ellipsis = <span key={'ellipsis'}>…</span>;
        }
        propertyNodes.push(
          <span key={propertyName}>
            <ObjectName name={propertyName || `""`} />
            :&nbsp;
            <ObjectValue object={propertyValue} />
            {ellipsis}
          </span>,
        );
        if (ellipsis) break;
      }
    }

    return (
      <span style={styles.preview}>
        {`${object.constructor.name} {`}
        {renderPropertyNodes(object, propertyNodes, ', ', format)}
        {'}'}
      </span>
    );
  }
};

ObjectPreview.propTypes = {
  /**
   * max number of properties shown in the property view
   */
  maxProperties: PropTypes.number,
  format: PropTypes.string
};
ObjectPreview.defaultProps = {
  maxProperties: 5,
  format: 'default'
};

export default ObjectPreview;
