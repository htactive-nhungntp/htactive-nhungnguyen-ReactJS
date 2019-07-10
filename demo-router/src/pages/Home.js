import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { title = "", object = "", point = 0 } =
      this.props.location.state || {};
    return (
      <div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <h2>Learning Router</h2>
                <ul className="nav nav-pills flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="/">
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Link1
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Link2
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/">
                      Link3
                    </a>
                  </li>
                </ul>
                <hr className="d-sm-none" />
                <p>Title: {title}</p>
                <p>Object: {object}</p>
                <p>Point: {point}</p>
              </div>
              <div className="col-sm-8">
                <h2>React Router</h2>
                <h5>Description, Dec 7, 2017</h5>
                <p>What is React Router</p>
                <p>
                  React Router keeps your UI in sync with the URL. It has a
                  simple API with powerful features like lazy code loading,
                  dynamic route matching, and location transition handling built
                  right in. Make the URL your first thought, not an
                  after-thought.
                </p>
                <br />
                <h2>Routing</h2>
                <h5>Description, Sep 2, 2017</h5>
                <div className="fakeimg">Fake Image</div>
                <p>Some text..</p>
                <p>Routing</p>
                <p>
                  Aviator - Aviator is a front-end router built for modular
                  single page applications. (Example). Backbone - Backbone
                  supplies structure to JavaScript-heavy applications by
                  providing models with key-value binding and custom events,
                  collections with a rich API of enumerable functions, views
                  with declarative event handling, and connects it all to your
                  existing application over a RESTful JSON interface.
                  component-router: Flux-based routing solution for components
                  Director - A tiny and isomorphic URL router for JavaScript.
                  Finch - A simple, yet powerful, javascript route handling
                  library. mvc-router Use the Model-View-Controller (MVC)
                  pattern to build React applications. Reach Router An
                  Accessible Router for React react-mini-router A minimal URL
                  router mixin. react-passage: Passage helps when linking or
                  redirecting to routes that may or may not be in your react
                  app. react-router - A popular declarative router for React
                  react-router-component Declarative routing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
