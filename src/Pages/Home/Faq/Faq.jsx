import React from "react";
import faq from '../../../assets/Faq.png'

const Faq = () => {
  return (
    <div>
      <div>
        <h1 className="text-center my-9 font-semibold text-5xl">
          Frequently Ask Questions And Answers
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="mt-10">
          <img data-aos="fade-right" src={faq} />
        </div>
        <div className="mx-20">
          <div data-aos="fade-left" data-aos-delay="50" className="flex justify-center items-center">
            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="checkbox" checkbox="checkbox" />
                <div className="collapse-title text-xl font-medium text-white">
                  How do I create an account on the streaming platform?
                </div>
                <div className="collapse-content text-white">
                  <p>
                    To create an account, visit our website and click on the "Sign
                    Up" button. Provide your email address, choose a password, and
                    follow the verification steps.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium text-white">
                  Is there a cost associated with using the streaming service?
                </div>
                <div className="collapse-content text-white">
                  <p>
                    Yes, we offer different subscription plans. We have a free trial
                    period for new users, and after that, you can choose from our
                    various subscription tiers, each with its own pricing and
                    features.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium text-white">
                  What devices can I use to access the streaming service?
                </div>
                <div className="collapse-content text-white">
                  <p>
                    You can access our platform on smartphones, tablets, smart TVs,
                    web browsers, and gaming consoles. Simply download our app or
                    visit our website to start streaming.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium text-white">
                  Can I watch content offline?
                </div>
                <div className="collapse-content text-white">
                  <p>
                    Yes, you can download certain content to watch offline. Look for
                    the download icon next to eligible titles. Downloaded content is
                    available for a limited time and varies by subscription plan.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium text-white">
                  What kind of content is available on the platform?
                </div>
                <div className="collapse-content text-white">
                  <p>
                    Our platform offers a diverse range of movies, TV shows,
                    documentaries, and exclusive content across various genres,
                    catering to different tastes and preferences.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium text-white">
                  How do I cancel my subscription?
                </div>
                <div className="collapse-content text-white">
                  <p>
                    To cancel your subscription, go to your account settings and
                    navigate to the subscription section. Follow the prompts to
                    cancel, and your subscription will end at the end of the current
                    billing cycle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
