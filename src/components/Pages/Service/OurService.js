import React from "react";
import { ServiceItem } from "../../HomeTwo/Services";

const OurService = () => {
  return (
    <>
      <div className="tp-service-ara grey-bg-4 pt-50 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-section-wrapper text-center mb-20">
                <span className="tp-section-subtitle mb-30">Services</span>
                <h2 className="tp-section-title">Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <ServiceItem
              icon="pe-7s-users"
              title="Identity explorers, mixed folks, multicultural folks"
              desc="You have a complicated relationship with your identity as a result of living in a world that upholds and privileges some over others. There are times when you feel pride and there are times when your identity feels like a load to carry. What would it be like to be welcomed as your whole, complete self?"
            />
            <ServiceItem
              icon="pe-7s-study"
              title="High-achievers, perfectionists, eldests, the 'strong friends'"
              desc="From the outside, you have everything together and you’re the one people go to for advice. No one would doubt that you are capable. Yet there are times when you experience uncertainty and now you’re ready to dip your toes into vulnerability."
            />
            <ServiceItem
              icon="pe-7s-help1"
              title="Odd ones out"
              desc="There is something about you that makes you different from your family of origin, community, or any other group. While you recognize that marching to the beat of your own drum is cool, you also long for a sense of belonging where you don’t have to constantly explain yourself."
            />
         
          </div>
        </div>
      </div>
    </>
  );
};

export default OurService;
