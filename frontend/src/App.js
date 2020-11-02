import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import CreateJob from "./CreateJob";
import CreateJobSuccess from "./CreateJobSuccess";
import ViewJob from "./ViewJob";
import UpdateJob from "./UpdateJob";

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <a href="/">View Jobs</a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="/jobs/create">Create Job</a>
            </Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <Switch>
              <Route path="/jobs/create/success" component={CreateJobSuccess} />
              <Route path="/jobs/create" component={CreateJob} />
              <Route path="/jobs/:job_id/edit" component={UpdateJob} />
              <Route path="/jobs/:job_id" component={ViewJob} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
