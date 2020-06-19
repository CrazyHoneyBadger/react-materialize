import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

var lex={"racs":234}
const CollectionItem = ({ active, children, className, href,target, ...other }) => {
  let item = (
    <li {...other} className={cx('collection-item', className)}>
      {children}
    </li>
  );

  if (href) {
    item = (
      <a
        {...other}
        href={href}
        target={target}
        className={cx('collection-item', { active }, className)}
      >
        {children}
      </a>
    );
  }

  return item;
};

CollectionItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Default: false
   * For more information refer to : https://materializecss.com/collections.html#links
   */
  href: PropTypes.string,
  target:PropTypes.string
};

export default CollectionItem;
