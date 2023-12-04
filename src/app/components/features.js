import "../style/globals.css";
const FeaturesSection = () => {
  return (
    <>
      <div class="bg-gray-50 overflow-hidden">
        <div class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <svg
            class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
            />
          </svg>

          <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div class="lg:col-span-1">
              <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                A better way to send money.
              </h2>
            </div>
            <dl class="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
              <div>
                <dt>
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <p class="mt-5 text-lg leading-6 font-medium text-gray-900">
                    Tailored Data Training
                  </p>
                </dt>
                <dd class="mt-2 text-lg text-gray-500">
                  Our chatbot receives specialized training from carefully
                  selected web pages, nurturing a vast knowledge base for GPT
                  model proficiency.{" "}
                </dd>
              </div>

              <div>
                <dt>
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                  <p class="mt-5 text-lg leading-6 font-medium text-gray-900">
                    Effortless Integration
                  </p>
                </dt>
                <dd class="mt-2 text-lg text-gray-500">
                  Easily embed the chatbot directly onto any website, enriching
                  user satisfaction and engagement.
                </dd>
              </div>

              <div>
                <dt>
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p class="mt-5 text-lg leading-6 font-medium text-gray-900">
                    Instantaneous Responses
                  </p>
                </dt>
                <dd class="mt-2 text-lg text-gray-500">
                  The chatbot promptly addresses user queries regarding website
                  content, eradicating the need for human intervention.{" "}
                </dd>
              </div>

              <div>
                <dt>
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p class="mt-5 text-lg leading-6 font-medium text-gray-900">
                    Time Optimization
                  </p>
                </dt>
                <dd class="mt-2 text-lg text-gray-500">
                  Users experience significant time savings, as manual search
                  efforts become a thing of the past. This chatbot sets a new
                  standard for website interactions, simplifying information
                  retrieval with unmatched efficiency.{" "}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesSection;