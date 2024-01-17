import React from "react";
import "./FooterStyles.css";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <div id="footerwrapper">
      <div className="myfooter">
        <div className="first">
          <div className="footerLinkOne">
            <a href="/">
              <img
                src="../logo-png.png"
                alt=""
                width="50"
                height="50"
                className="d-inline-block align-top"
              />
            </a>
          </div>
          <div className="footerLinkOne">
            <a href="/">SPACES</a>
          </div>
          <div class="footerLinkOne">
            <a href="/">UPGRADE</a>
          </div>
          <div class="footerLinkOne">
            <a href="/" target="_blank">
              NEWSLETTER
            </a>
          </div>
          <div class="footerLinkOne">
            <a href="/" target="_blank">
              GET CERTIFIED
            </a>
          </div>
          <div class="footerLinkOne">
            <a href="/">REPORT ERROR</a>
          </div>
        </div>
      {/* </div> */}
      <div className="second">
        <div class="footerlinks_2">
          <h5 className="hh5">Top Tutorials</h5>
          <a href="/" class="alinks">
            HTML Tutorial
          </a>
          <br />
          <a href="/" class="alinks">
            CSS Tutorial
          </a>
          <br />
          <a href="/" class="alinks">
            JavaScript Tutorial
          </a>
          <br />

          <a href="/" class="alinks">
            SQL Tutorial
          </a>
          <br />
          <a href="/" class="alinks">
            Python Tutorial
          </a>
          <br />

          <a href="/" class="alinks">
            Bootstrap Tutorial
          </a>
          <br />
          <a href="/" class="alinks">
            PHP Tutorial
          </a>
          <br />
          <a href="/" class="alinks">
            Java Tutorial
          </a>
          <br />
          <a href="/" class="alinks">
            C++ Tutorial
          </a>
          <br />
          <a href="/" class="alinks">
            jQuery Tutorial
          </a>
          <br />
        </div>
        <div class="footerlinks_2">
          <h5 className="hh5">Top References</h5>
          <a href="/" class="alinks">
            HTML Reference
          </a>
          <br />
          <a href="/" class="alinks">
            CSS Reference
          </a>
          <br />
          <a href="/" class="alinks">
            JavaScript Reference
          </a>
          <br />
          <a href="/" class="alinks">
            SQL Reference
          </a>
          <br />
          <a href="/" class="alinks">
            Python Reference
          </a>
          <br />
          <a href="/" class="alinks">
            Bootstrap Reference
          </a>
          <br />
          <a href="/" class="alinks">
            PHP Reference
          </a>
          <br />
          <a href="/" class="alinks">
            HTML Colors
          </a>
          <br />
          <a href="/" class="alinks">
            Java Reference
          </a>
          <br />
          <a href="/" class="alinks">
            Angular Reference
          </a>
          <br />
          <a href="/" class="alinks">
            jQuery Reference
          </a>
          <br />
        </div>
        <div class="footerlinks_2">
          <h5 className="hh5">Top Examples</h5>
          <a href="/" class="alinks">
            HTML Examples
          </a>
          <br />
          <a href="/" class="alinks">
            CSS Examples
          </a>
          <br />
          <a href="/" class="alinks">
            JavaScript Examples
          </a>
          <br />

          <a href="/" class="alinks">
            SQL Examples
          </a>
          <br />
          <a href="/" class="alinks">
            Python Examples
          </a>
          <br />
          <a href="/" class="alinks">
            Bootstrap Examples
          </a>
          <br />
          <a href="/" class="alinks">
            PHP Examples
          </a>
          <br />
          <a href="/" class="alinks">
            Java Examples
          </a>
          <br />
          <a href="/" class="alinks">
            XML Examples
          </a>
          <br />
          <a href="/" class="alinks">
            jQuery Examples
          </a>
          <br />
        </div>
        <div class="footerlinks_2">
          <a href="/" target="_blank" class="alinks">
            <h5 className="hh5">Get Certified</h5>
          </a>
          <a href="/" target="_blank" class="alinks">
            HTML Certificate
          </a>
          <br />
          <a href="/" target="_blank" class="alinks">
            CSS Certificate
          </a>
          <br />
          <a href="/" target="_blank" class="alinks">
            JavaScript Certificate
          </a>
          <br />
          <a href="/" target="_blank" class="alinks">
            Front End Certificate
          </a>
          <br />
          <a href="/" target="_blank" class="alinks">
            SQL Certificate
          </a>
          <br />
          <a href="/" target="_blank" class="alinks">
            Python Certificate
          </a>
          <br />
          <a href="/" target="_blank" class="alinks">
            PHP Certificate
          </a>
          <br />
          <a href="/" target="_blank" class="alinks">
            jQuery Certificate
          </a>
          <br />
          <a href="/" target="_blank" class="alinks">
            Java Certificate
          </a>
          <br />
          <a href="/" target="_blank" class="alinks">
            C++ Certificate
          </a>
          <br />
          <a href="/" target="_blank" class="alinks">
            C# Certificate
          </a>
          <br />
          <a href="/" target="_blank" class="alinks">
            XML Certificate
          </a>
          <br />
        </div>
      </div>
      <div class="footersome">
        <a target="_blank" href="/" title="H4schools on Facebook">
          <i class="fa fa-facebook-f st"></i>
        </a>

        <a
          target="_blank"
          href="/"
          title="Join the H4schools community on Discord"
        >
          <i class="fab fa-discord st "></i>
        </a>
        <a target="_blank" href="/" title="H4Schools on LinkedIn">
          <i class="fab fa-linkedin-in st"></i>
        </a>
        <a target="_blank" href="/" title="H4Schools on Instagram">
          <i class="fa fa-instagram st"></i>
        </a>
        <a target="_blank" href="/" title="Forum" class="textlink">
          FORUM
        </a>
        <a target="_blank" href="/" title="About H4Schools" class="textlink">
          ABOUT
        </a>
      </div>
      <div class="footertext">
        H4Schools is optimized for learning and training. Examples might be
        simplified to improve reading and learning.
        <br class="footer-hide-special" />
        Tutorials, references, and examples are constantly reviewed to avoid
        errors, but we cannot warrant full correctness
        <br class="footer-hide-special" />
        of all content. While using H4Schools, you agree to have read and
        accepted our{" "}
        <a href="/" class="alinks">
          terms of use
        </a>
        ,
        <a href="/" class="alinks">
          cookie and privacy policy
        </a>
        .<br />
        <br />
        <a href="/" class="alinks">
          Copyright 1999-2023
        </a>{" "}
        by Refsnes Data. All Rights Reserved.
        <a href="/" class="alinks">
          H4Schools is Powered by H4.CSS
        </a>
        .<br />
        <br />
      </div>
      </div>
    </div>
  );
};

export default Footer;