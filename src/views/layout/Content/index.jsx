import React from "react";
import { Redirect, withRouter, Route, Switch } from "react-router-dom";
import DocumentTitle from "react-document-title";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Layout } from "antd";
import { getMenuItemInMenuListByProperty } from "@/utils";
import routeList from "@/config/routeMap";
import menuList from "@/config/menuConfig";
const { Content } = Layout;
// react-router-dom 参考：https://v5.reactrouter.com/web/example/basic
const getPageTitle = (menuList, pathname) => {
  let title = "Ant Design Pro";
  let item = getMenuItemInMenuListByProperty(menuList, "path", pathname);
  if (item) {
    title = `${item.title} - Ant Design Pro`;
  }
  return title;
};
/**
 * A <Switch> looks through all its children <Route> elements and renders the first one whose path
 * matches the current URL. Use a <Switch> any time you have multiple routes, but you want only oneof them to render at a time
 */

// Rendering a <Redirect> will navigate to a new location. The new location will override the current location in the history stack
const LayoutContent = (props) => {
  const { role, location } = props;
  const { pathname } = location;
  const handleFilter = (route) => {
    // 过滤没有权限的页面
    return role === "admin" || !route.roles || route.roles.includes(role);
  };
  return (
    <DocumentTitle title={getPageTitle(menuList, pathname)}>
      <Content style={{ height: "calc(100% - 100px)" }}>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            timeout={500}
            classNames="fade"
            exit={false}
          >
            <Switch location={location}>
              <Redirect exact from="/" to="/dashboard" />
              {routeList.map((route) => {
                return (
                  handleFilter(route) && (
                    <Route
                      component={route.component}
                      key={route.path}
                      path={route.path}
                    />
                  )
                );
              })}
              <Redirect to="/error/404" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Content>
    </DocumentTitle>
  );
};
/**
 * You can get access to the history object’s properties and the closest <Route>'s match via the withRouter higher-order component.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 * */
export default connect((state) => state.user)(withRouter(LayoutContent));
