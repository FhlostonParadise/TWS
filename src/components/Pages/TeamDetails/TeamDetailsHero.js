import React from "react";

const TeamDetailsHero = () => {
  return (
    <>
      <div className="team-single-page pt-140 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="team-hero-img p-relative">
                <img src="assets/img/team/liv.png" alt="" />
                <div className="team-info-box white-bg pt-60 pl-100 pr-100">
                  <h3 className="t-box-title">Shana Aoyama</h3>
                  <span>Marriage & Family Therapist, MS, LMFT</span>
                  <div className="team-member-info-list">
                    <ul>
                      <li>She/Her/Hers</li>
                      <li>License: LMFT136157</li>
                      <li>
                        E-mail:
                        <a href="mailto:'shana@therapywithshana.com'">
                        shana@therapywithshana.com
                        </a>
                      </li>
                      <li>
                        Phone: <a href="tel:831-208-3385"> 831-208-3385</a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-social-icons mt-30">
                    <span>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetailsHero;
