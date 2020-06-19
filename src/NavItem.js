import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'

const NavItem = ({ divider,isExternal=true,href, ...props }) => {
  if (divider) return <li className="divider" />;
  if (isExternal) return <a href {...props} />;
  return <NavLink to={href} {...props} />
  
};

NavItem.propTypes = {
  /**
   * children can be a string value or a node
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  divider: PropTypes.bool,
  href: PropTypes.string,
  isExternal:PropTypes.bool,
  /**
   * NavItem can have onClick. If it does have, href
   * will not be rendered
   */
  onClick: PropTypes.func
};

export default NavItem;
