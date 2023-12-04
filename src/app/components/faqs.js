import "../style/globals.css";
import HeroSectionIcon from "./svgHeroSection";
const FaqSection = () => {
  return (
    <>
      <div class="bg-white">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div class="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 class="text-5xl font-extrabold text-gray-900">
                Frequently asked questions
              </h2>
              <p class="mt-4 text-lg text-gray-500">
                <a
                  href="#"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                ></a>{" "}
              </p>
            </div>
            <div class="mt-12 lg:mt-0 lg:col-span-2">
              <dl class="space-y-12">
                <div>
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Is there a demo that I can try?
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Yes, you can go and try out the demo. The demo bot you see
                    is trained on the sitegpt.ai website content itself. So you
                    can ask any questions related to website in that demo bot
                    and it will answer it.
                  </dd>
                  <br />
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    How do I train the chatbot?
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    You can train the chatbot by adding a website link, a
                    sitemap link, a Gitbook link. You can just enter a URL and
                    the chatbot will be trained on all the content present on
                    that URL.
                  </dd>
                  <br />
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    What type of content can we use to train the chatbot?
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    You can use any type of content to train the chatbot. The
                    more content you provide, the better the chatbot will be
                    able to answer the questions.
                  </dd>
                  <br />
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    How do I add the chatbot to my website?
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Each chatbot gets its own unique url, you can embed the
                    chatbot on your own site via the embed code we provide. You
                    can even directly link to the chatbot from your site.
                  </dd>
                  <br />
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Do you use OpenAI models or your own models?
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    We use OpenAI models at the moment.
                  </dd>
                  <br />

                  <br />
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
