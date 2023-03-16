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
                
                <h2 className="tp-section-title" id="service">What is your story?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <ServiceItem
              icon="pe-7s-users"
              title="Identity Explorers, Mixed Folks, Multicultural Folks"
              desc="You have a complicated relationship with your identity as a result of living in a world that upholds and privileges some over others. There are times when you feel pride and there are times when your identity feels like a load to carry. What would it be like to be welcomed as your whole, complete self?"
            />
            <ServiceItem
              icon="pe-7s-study"
              title="High-achievers, Perfectionists, Eldests, 'Strong Friends'"
              desc="From the outside, you have everything together and you’re the one people go to for advice. No one would doubt that you are capable. Yet there are times when you experience uncertainty and now you’re ready to dip your toes into vulnerability."
            />
            <ServiceItem
              icon="pe-7s-rocket"
              title="Disruptors, Outsiders, Mavericks, Rebels"
              desc="There is something about you that makes you different from your family of origin, community, or any other group. While you recognize that marching to the beat of your own drum is cool, you also long for a sense of belonging where you don’t have to constantly explain yourself."
            />

          <div className="row">
            <ServiceItem
              icon="pe-7s-date"
              title="Millenials"
              desc="Being an adult of a certain age comes with stressors around family, work, and finances. Being an adult of this particular generation means that those stressors were influenced further by the Great Recession, explosive growth of technology and social media, MeToo movement, Racial Reckoning, and the COVID-19 pandemic. You want to work with a peer who isn’t going to compare and diminish your experience."
            />
            <ServiceItem
              icon="pe-7s-notebook"
              title="Readers, Writers, Bibliophiles, Wordsmiths"
              desc="You have a deep appreciation for the written word and how it can both create new worlds and expound on the one we live in. We can incorporate the best parts of being in a book club with the personalized, introspective aspects of therapy to create a one-of-a-kind experience for healing and growth."
            />
            
         </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurService;
