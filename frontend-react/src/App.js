import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" type="image/png" href="/public/kitty.png" />
        <title>Home - Blackcat-Tinkerngineers</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Press+Start+2P&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
        <link href="./assets/bootstrap-4.0.0/scss/_close.scss" rel="stylesheet" />
        <link href="./assets/css/bootstrap.min.css" rel="stylesheet" />
        <link href="./assets/css/stylesheet.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" crossOrigin="anonymous" />
        <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n    body {\n      position: relative;\n    }\n  " }} />
        {/* Navbar start*/}
        <article id="navigation">
          <section id="section_navigation" className="section_navigation">
            <header>
              <div className="navbar navbar-expand-lg navbar-dark bg-dark box-shadow">
                <div className="container d-flex justify-content-between">
                  <div className="navbar-brand d-flex align-items-center" id="main">
                    <div className="navbar-title">Blackcat-Tinkerngineers</div>
                  </div>
                  {/* Scrollto start */}
                  <ul id="main_nav" className="nav nav-dots">
                    <a className="nav-link scrollto" href="#section_navigation"><img src="./assets/images/chevron-bar-up.svg" /></a>
                    <a className="nav-link scrollto" href="#section_about"><img src="./assets/images/person.svg" /></a>
                    <a className="nav-link scrollto" href="#section_work"><img src="./assets/images/terminal.svg" /></a>
                    <a className="nav-link scrollto" href="#section_resume"><img src="./assets/images/file-earmark-pdf.svg" /></a>
                    <a className="nav-link scrollto" href="#section_contact"><img src="./assets/images/chat-left.svg" /></a>
                    <a className="nav-link scrollto" href="#section_footer"><img src="./assets/images/chevron-bar-down.svg" /></a>
                  </ul>
                </div>
              </div> {/* container-fluid.// */}
              {/* Banner start */}
              <div className="img-responsive" style={{ width: '100%', height: '100%' }}>
                <img src="./assets/images/banner-2.png" alt="Responsive image" className="img-fluid mx-auto d-block" />
              </div>
            </header>
          </section></article>
        {/* jumbotron start*/}
        <article id="about">
          <section id="section_about" className="section_action">
            <section className="jumbotron text-center">
              <div className="container">
                <h1 className="jumbotron-heading"><strong>About Me:</strong></h1>
                <p className="lead text-muted">“I think everybody needs a passion. Whether it’s one passion or a hundred, that’s
                  what keeps life interesting.” – Betty White</p>
              </div>
            </section>
          </section>
        </article>
        {/* Album Start */}
        <article id="work">
          <section id="section_work">
            <div className="work py-5 bg-light">
              <section className="album text-center">
                <div className="container">
                  <h1 className="album-heading">Work:</h1>
                  <div className="row">
                    {/*Card 1*/}
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow-none">
                        <img className="card-img-top" img src="./assets/images/group-demo.png" />
                        <div className="card-body">
                          <h5 className="card-lable">Group project 1</h5>
                          <h6 className="sub-card-lable">Stories on the go</h6>
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional
                            content. This content is a little bit longer.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target=".bd-example-modal-sm">View</button>
                              <div className="modal fade bd-example-modal-sm" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                  </button>
                                  <div className="modal-content">
                                    <img src="./assets/images/group-demo.png" alt="Responsive image" className="gp1 img-fluid mx-auto d-block" />
                                  </div>
                                </div>
                              </div>
                              <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://blackcat-tinkerngineers.github.io/stories-on-the-go" style={{ textDecoration: 'none' }}>Visit
                                App</a></button>
                              <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://github.com/Blackcat-Tinkerngineers/stories-on-the-go" style={{ textDecoration: 'none' }}>Github
                                Repo</a></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Card 2*/}
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" img src="./assets/images/group-demo.png" />
                        <div className="card-body">
                          <h5 className="card-lable">Group project 1</h5>
                          <h6 className="sub-card-lable">Stories on the go</h6>
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional
                            content. This content is a little bit longer.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target=".bd-example-modal-sm">View</button>
                              <div className="modal fade bd-example-modal-sm" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                  </button>
                                  <div className="modal-content">
                                    <img src="./assets/images/group-demo.png" alt="Responsive image" className="gp1 img-fluid mx-auto d-block" />
                                  </div>
                                </div>
                              </div>
                              <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://blackcat-tinkerngineers.github.io/stories-on-the-go" style={{ textDecoration: 'none' }}>Visit
                                App</a></button>
                              <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://github.com/Blackcat-Tinkerngineers/stories-on-the-go" style={{ textDecoration: 'none' }}>Github
                                Repo</a></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Card 3*/}
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" img src="./assets/images/group-demo.png" />
                        <div className="card-body">
                          <h5 className="card-lable">Group project 1</h5>
                          <h6 className="sub-card-lable">Stories on the go</h6>
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional
                            content. This content is a little bit longer.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target=".bd-example-modal-sm">View</button>
                              <div className="modal fade bd-example-modal-sm" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                  </button>
                                  <div className="modal-content">
                                    <img src="./assets/images/group-demo.png" alt="Responsive image" className="gp1 img-fluid mx-auto d-block" />
                                  </div>
                                </div>
                              </div>
                              <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://blackcat-tinkerngineers.github.io/stories-on-the-go" style={{ textDecoration: 'none' }}>Visit
                                App</a></button>
                              <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://github.com/Blackcat-Tinkerngineers/stories-on-the-go" style={{ textDecoration: 'none' }}>Github
                                Repo</a></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Card 4*/}
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" img src="./assets/images/group-demo.png" />
                        <div className="card-body">
                          <h5 className="card-lable">Group project 1</h5>
                          <h6 className="sub-card-lable">Stories on the go</h6>
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional
                            content. This content is a little bit longer.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target=".bd-example-modal-sm">View</button>
                              <div className="modal fade bd-example-modal-sm" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                  </button>
                                  <div className="modal-content">
                                    <img src="./assets/images/group-demo.png" alt="Responsive image" className="gp1 img-fluid mx-auto d-block" />
                                  </div>
                                </div>
                              </div>
                              <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://blackcat-tinkerngineers.github.io/stories-on-the-go" style={{ textDecoration: 'none' }}>Visit
                                App</a></button>
                              <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://github.com/Blackcat-Tinkerngineers/stories-on-the-go" style={{ textDecoration: 'none' }}>Github
                                Repo</a></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Card 6*/}
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" img src="./assets/images/group-demo.png" />
                        <div className="card-body">
                          <h5 className="card-lable">Group project 1</h5>
                          <h6 className="sub-card-lable">Stories on the go</h6>
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional
                            content. This content is a little bit longer.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target=".bd-example-modal-sm">View</button>
                              <div className="modal fade bd-example-modal-sm" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                  </button>
                                  <div className="modal-content">
                                    <img src="./assets/images/group-demo.png" alt="Responsive image" className="gp1 img-fluid mx-auto d-block" />
                                  </div>
                                </div>
                              </div>
                              <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://blackcat-tinkerngineers.github.io/stories-on-the-go" style={{ textDecoration: 'none' }}>Visit
                                App</a></button>
                              <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://github.com/Blackcat-Tinkerngineers/stories-on-the-go" style={{ textDecoration: 'none' }}>Github
                                Repo</a></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Card 7*/}
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" img src="./assets/images/group-demo.png" />
                        <div className="card-body">
                          <h5 className="card-lable">Group project 1</h5>
                          <h6 className="sub-card-lable">Stories on the go</h6>
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional
                            content. This content is a little bit longer.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target=".bd-example-modal-sm">View</button>
                              <div className="modal fade bd-example-modal-sm" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                  </button>
                                  <div className="modal-content">
                                    <img src="./assets/images/group-demo.png" alt="Responsive image" className="gp1 img-fluid mx-auto d-block" />
                                  </div>
                                </div>
                              </div>
                              <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://blackcat-tinkerngineers.github.io/stories-on-the-go" style={{ textDecoration: 'none' }}>Visit
                                App</a></button>
                              <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://github.com/Blackcat-Tinkerngineers/stories-on-the-go" style={{ textDecoration: 'none' }}>Github
                                Repo</a></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Card 8*/}
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" img src="./assets/images/group-demo.png" />
                        <div className="card-body">
                          <h5 className="card-lable">Group project 1</h5>
                          <h6 className="sub-card-lable">Stories on the go</h6>
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional
                            content. This content is a little bit longer.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target=".bd-example-modal-sm">View</button>
                              <div className="modal fade bd-example-modal-sm" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                  </button>
                                  <div className="modal-content">
                                    <img src="./assets/images/group-demo.png" alt="Responsive image" className="gp1 img-fluid mx-auto d-block" />
                                  </div>
                                </div>
                              </div>
                              <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://blackcat-tinkerngineers.github.io/stories-on-the-go" style={{ textDecoration: 'none' }}>Visit
                                App</a></button>
                              <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://github.com/Blackcat-Tinkerngineers/stories-on-the-go" style={{ textDecoration: 'none' }}>Github
                                Repo</a></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Card 9*/}
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" img src="./assets/images/group-demo.png" />
                        <div className="card-body">
                          <h5 className="card-lable">Group project 1</h5>
                          <h6 className="sub-card-lable">Stories on the go</h6>
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional
                            content. This content is a little bit longer.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target=".bd-example-modal-sm">View</button>
                              <div className="modal fade bd-example-modal-sm" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                  </button>
                                  <div className="modal-content">
                                    <img src="./assets/images/group-demo.png" alt="Responsive image" className="gp1 img-fluid mx-auto d-block" />
                                  </div>
                                </div>
                              </div>
                              <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://blackcat-tinkerngineers.github.io/stories-on-the-go" style={{ textDecoration: 'none' }}>Visit
                                App</a></button>
                              <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://github.com/Blackcat-Tinkerngineers/stories-on-the-go" style={{ textDecoration: 'none' }}>Github
                                Repo</a></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Card 10*/}
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" img src="./assets/images/group-demo.png" />
                        <div className="card-body">
                          <h5 className="card-lable">Group project 1</h5>
                          <h6 className="sub-card-lable">Stories on the go</h6>
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional
                            content. This content is a little bit longer.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target=".bd-example-modal-sm">View</button>
                              <div className="modal fade bd-example-modal-sm" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                  </button>
                                  <div className="modal-content">
                                    <img src="./assets/images/group-demo.png" alt="Responsive image" className="gp1 img-fluid mx-auto d-block" />
                                  </div>
                                </div>
                              </div>
                              <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://blackcat-tinkerngineers.github.io/stories-on-the-go" style={{ textDecoration: 'none' }}>Visit
                                App</a></button>
                              <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://github.com/Blackcat-Tinkerngineers/stories-on-the-go" style={{ textDecoration: 'none' }}>Github
                                Repo</a></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div></div></section>
            </div></section>
        </article>
        <article id="resume">
          <section id="section_resume" className="resume">
            <div className="container">
              <h1 className="resume-heading text-center"><strong>Resume</strong></h1>
              <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas
                laboriosam sit aliquam excepturi omnis velit, ipsam libero distinctio praesentium nemo
                consequuntur doloribus aperiam ducimus natus ex architecto repudiandae minus?</p>
            </div>
          </section>
        </article>
        <hr />
        <article id="contact">
          <section id="section_contact" className="section_contact">
            <div className="container">
              <div className="contact">
                <h1 className="contact-heading text-center"><strong>Contact</strong></h1>
                <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel molestias
                  voluptas a, minus, voluptates asperiores illo, quo voluptatum laudantium dignissimos non
                  possimus repudiandae sed sequi fugit. Culpa nam reiciendis molestias?</p>
              </div>
            </div>
          </section>
        </article>
        <footer className="text-muted">
          <article id="section_footer">
            <section id="footer" className="section_footer">
              <div className="container">
                <p>Find me on social media.</p>
                <a href="https://www.instagram.com/_chiisaikai" className="social"><i className="fa fa-instagram w3-hover-opacity" /></a>
                <a href="https://twitter.com/clbgonsalves" className="social"> <i className="fa fa-twitter w3-hover-opacity" /></a>
                <a href="https://www.linkedin.com/in/chelsiebgonsalves/" className="social"><i className="fa fa-linkedin w3-hover-opacity" /></a>
                <a href="https://github.com/Blackcat-Tinkerngineers" className="social"><i className="fa fa-github w3-hover-opacity" /></a>
                <p>Made with 🖤Chelsie L. Bangloy-Gonsalves</p>
              </div>
            </section>
          </article>
        </footer>
        {/* Bootstrap core JavaScript */}
      </div>

    </div>
  );
}

export default App;
