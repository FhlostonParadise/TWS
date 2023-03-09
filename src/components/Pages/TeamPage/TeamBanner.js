import React from "react";

const TeamBanner = () => {
  return (
    <>
      <section
        className="breadcrumb__area include-bg   team_banner"
        // data-background="assets/img/breadcrumb/breadcrumb-bg-2.jpg"
        style={{
          backgroundImage: `url("assets/img/breadcrumb/2555.png")`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center p-relative z-index-1">
                <h3 className="breadcrumb__title">
                  How do you tell your story?
                </h3>
                <div className="breadcrumb__list">
                  {/*     <span>
                    <a href="#">Home</a>
                  </span>
                  <span className="dvdr">:</span>
                  <span>Single Team</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamBanner;
