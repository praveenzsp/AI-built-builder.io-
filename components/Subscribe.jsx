import * as React from "react";

export default function MyComponent() {
  return (
    <div className="flex flex-col">
      <div className="items-center self-stretch bg-zinc-800 flex w-full flex-col mt-0 px-5 py-10 max-md:max-w-full">
        <div className="items-center bg-neutral-700 self-center flex w-full max-w-[1050px] flex-col -ml-5 mb-10 px-5 py-10 rounded-3xl max-md:max-w-full">
          <div className="self-center w-[930px] max-w-full my-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d138467a-594b-409e-a902-2be547232f28?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d138467a-594b-409e-a902-2be547232f28?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d138467a-594b-409e-a902-2be547232f28?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d138467a-594b-409e-a902-2be547232f28?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d138467a-594b-409e-a902-2be547232f28?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d138467a-594b-409e-a902-2be547232f28?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d138467a-594b-409e-a902-2be547232f28?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d138467a-594b-409e-a902-2be547232f28?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                  className="aspect-[1.37] object-cover object-center w-full grow rounded-3xl max-md:max-w-full max-md:mt-12"
                />
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full">
                <div className="items-start flex flex-col w-[425px] my-auto max-md:max-w-full max-md:mt-12">
                  <div className="items-start self-stretch flex flex-col w-full max-md:max-w-full">
                    <div className="self-stretch text-white text-4xl font-semibold leading-10 capitalize w-full">
                      Join our weekly digest
                    </div>
                    <div className="self-stretch text-white text-2xl leading-9 capitalize w-full mt-2.5">
                      Get exclusive promotions & updates straight to your inbox.
                    </div>
                  </div>
                  <div className="items-start self-stretch bg-white flex justify-between gap-3 mt-10 pl-5 rounded-3xl max-md:max-w-full max-md:flex-wrap">
                    <div className="text-zinc-800 text-base leading-6 self-center w-[196px] my-auto">
                      Enter your email here
                    </div>
                    <div className="justify-end items-center bg-purple-500 self-stretch flex w-[211px] max-w-full flex-col px-5 py-5 rounded-3xl">
                      <div className="self-center flex w-[111px] max-w-full items-start gap-3">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dea1cafd-0f1f-48f3-b87b-c7cb7d45ae39?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dea1cafd-0f1f-48f3-b87b-c7cb7d45ae39?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dea1cafd-0f1f-48f3-b87b-c7cb7d45ae39?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dea1cafd-0f1f-48f3-b87b-c7cb7d45ae39?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dea1cafd-0f1f-48f3-b87b-c7cb7d45ae39?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dea1cafd-0f1f-48f3-b87b-c7cb7d45ae39?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dea1cafd-0f1f-48f3-b87b-c7cb7d45ae39?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dea1cafd-0f1f-48f3-b87b-c7cb7d45ae39?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                          className="aspect-square object-cover object-center w-5 shrink-0 mt-px"
                        />
                        <div className="text-white text-center text-base font-semibold leading-6 self-stretch">
                          Subscribe
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
