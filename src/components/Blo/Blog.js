import React from 'react';
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container pb50">
        <div className="row">
          <div className="col-md-9 mb40">
            <article>
              <img
                src="https://bootdey.com/img/Content/bg1.jpg"
                alt=""
                className="img-fluid mb30"
              />
              <div className="post-content">
                <h3>A smart template that works 24/7 for your company</h3>
                <ul className="post-meta list-inline">
                  <li className="list-inline-item">
                    <i className="fa fa-user-circle-o"></i>{' '}
                    <a href="#">John Doe</a>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-calendar-o"></i>{' '}
                    <a href="#">29 June 2017</a>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-tags"></i> <a href="#">Bootstrap4</a>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo,
                </p>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo,
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo,
                </p>
                <ul className="list-inline share-buttons">
                  <li className="list-inline-item">Share Post:</li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="social-icon-sm si-dark si-colored-facebook si-gray-round"
                    >
                      <i className="fa fa-facebook"></i>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="social-icon-sm si-dark si-colored-twitter si-gray-round"
                    >
                      <i className="fa fa-twitter"></i>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="social-icon-sm si-dark si-colored-linkedin si-gray-round"
                    >
                      <i className="fa fa-linkedin"></i>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
                <hr className="mb40" />
                <h4 className="mb40 text-uppercase font500">About Author</h4>
                <div className="media mb40">
                  <i className="d-flex mr-3 fa fa-user-circle fa-5x text-primary"></i>
                  <div className="media-body">
                    <h5 className="mt-0 font700">Jane Doe</h5> Cras sit amet
                    nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin. Cras purus odio, vestibulum in vulputate
                    at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                    vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </div>
                </div>
                <hr className="mb40" />
                <h4 className="mb40 text-uppercase font500">Comments</h4>
                <div className="media mb40">
                  <i className="d-flex mr-3 fa fa-user-circle-o fa-3x"></i>
                  <div className="media-body">
                    <h5 className="mt-0 font400 clearfix">
                      <a href="#" className="float-right">
                        Reply
                      </a>
                      Jane Doe
                    </h5>{' '}
                    Nulla vel metus scelerisque ante sollicitudin. Cras purus
                    odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                    lacinia congue felis in faucibus.
                  </div>
                </div>
                <div className="media mb40">
                  <i className="d-flex mr-3 fa fa-user-circle-o fa-3x"></i>
                  <div className="media-body">
                    <h5 className="mt-0 font400 clearfix">
                      <a href="#" className="float-right">
                        Reply
                      </a>
                      Jane Doe
                    </h5>{' '}
                    Nulla vel metus scelerisque ante sollicitudin. Cras purus
                    odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                    lacinia congue felis in faucibus.
                  </div>
                </div>
                <div className="media mb40">
                  <i className="d-flex mr-3 fa fa-user-circle-o fa-3x"></i>
                  <div className="media-body">
                    <h5 className="mt-0 font400 clearfix">
                      <a href="#" className="float-right">
                        Reply
                      </a>
                      Jane Doe
                    </h5>{' '}
                    Nulla vel metus scelerisque ante sollicitudin. Cras purus
                    odio, vestibulum in vulputate at, tempus viverra turpis.
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                    lacinia congue felis in faucibus.
                  </div>
                </div>
                <hr className="mb40" />
                <h4 className="mb40 text-uppercase font500">Post a comment</h4>
                <form role="form">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="john@doe.com"
                    />
                  </div>
                  <div className="form-group">
                    <label>Comment</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Comment"
                    ></textarea>
                  </div>
                  <div className="clearfix float-right">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </article>
          </div>
          <div className="col-md-3 mb40">          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
