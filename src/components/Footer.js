import React from 'react';


function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li>Home</li>
                        <li>About Me</li>
                        <li>GitHub</li>
                        <li>MyProject</li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Address</h5>
                    <address>
		             House 765 block B <br />
		            Hyderabad Sindh<br />
		              Pakistan<br />
		              <i className="fa fa-phone fa-lg"></i>: +923075607635<br />
		              <i className="fa fa-fax fa-lg"></i>: +923333468532<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mosamarafique@gmail.com">
                        mosamarafique@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-facebook" href="https://web.facebook.com/itxomiqureshi"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/muhammad-osama-qureshi-2973b2170/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/itxomiqureshi"><i className="fa fa-twitter"></i></a>
                     
                        <a className="btn btn-social-icon" href="mosamarafique@gmail.com"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021 Muhammad Osama</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;