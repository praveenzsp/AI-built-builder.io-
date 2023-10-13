import * as React from "react";

export default function BrowseCategories() {
  return (
    <main className="flex flex-col">
      <section className="items-center self-stretch bg-zinc-800 flex w-full flex-col mt-0 px-5 py-10 max-md:max-w-full">
        <h1 className="self-center text-white text-4xl font-semibold leading-10 capitalize max-w-[1129px] my-10 max-md:max-w-full">
          Browse Categories
        </h1>
        <div className="items-start self-center flex w-full max-w-[1050px] flex-col -ml-5 mt- mb-10 max-md:max-w-full">
          <div className="self-stretch max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/12 max-md:w-full">
                <a
                  href="#"
                  className="items-center bg-neutral-700 flex w-60 max-w-full grow flex-col mx-auto pb-6 rounded-3xl max-md:mt-8"
                >
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/39b900e0-be11-4008-a113-58adce59035e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/39b900e0-be11-4008-a113-58adce59035e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39b900e0-be11-4008-a113-58adce59035e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/39b900e0-be11-4008-a113-58adce59035e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/39b900e0-be11-4008-a113-58adce59035e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39b900e0-be11-4008-a113-58adce59035e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/39b900e0-be11-4008-a113-58adce59035e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/39b900e0-be11-4008-a113-58adce59035e?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                    className="aspect-square object-cover object-center w-full self-stretch rounded-3xl"
                    alt="Art"
                  />
                  <h2 className="self-center text-white text-2xl font-semibold leading-8 capitalize w-[180px] max-w-full mt-5">
                    Art
                  </h2>
                </a>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full">
                <a
                  href="#"
                  className="items-center bg-neutral-700 flex w-60 max-w-full grow flex-col mx-auto pb-6 rounded-3xl max-md:mt-8"
                >
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/150c3bd2-b2fa-46ea-bb53-60654244d1b1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/150c3bd2-b2fa-46ea-bb53-60654244d1b1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/150c3bd2-b2fa-46ea-bb53-60654244d1b1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/150c3bd2-b2fa-46ea-bb53-60654244d1b1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/150c3bd2-b2fa-46ea-bb53-60654244d1b1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/150c3bd2-b2fa-46ea-bb53-60654244d1b1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/150c3bd2-b2fa-46ea-bb53-60654244d1b1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/150c3bd2-b2fa-46ea-bb53-60654244d1b1?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                    className="aspect-square object-cover object-center w-full self-stretch rounded-3xl"
                    alt="Collectibles"
                  />
                  <h2 className="self-center text-white text-2xl font-semibold leading-8 capitalize w-[180px] max-w-full mt-5">
                    Collectibles
                  </h2>
                </a>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full">
                <a
                  href="#"
                  className="items-center bg-neutral-700 flex w-60 max-w-full grow flex-col mx-auto pb-6 rounded-3xl max-md:mt-8"
                >
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1cb9f0b5-fae2-4040-92c8-a129e2f0628f?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb9f0b5-fae2-4040-92c8-a129e2f0628f?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb9f0b5-fae2-4040-92c8-a129e2f0628f?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb9f0b5-fae2-4040-92c8-a129e2f0628f?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb9f0b5-fae2-4040-92c8-a129e2f0628f?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb9f0b5-fae2-4040-92c8-a129e2f0628f?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb9f0b5-fae2-4040-92c8-a129e2f0628f?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb9f0b5-fae2-4040-92c8-a129e2f0628f?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                    className="aspect-square object-cover object-center w-full self-stretch rounded-3xl"
                    alt="Music"
                  />
                  <h2 className="self-center text-white text-2xl font-semibold leading-8 capitalize w-[180px] max-w-full mt-5">
                    Music
                  </h2>
                </a>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full">
                <a
                  href="#"
                  className="items-center bg-neutral-700 flex w-60 max-w-full grow flex-col mx-auto pb-6 rounded-3xl max-md:mt-8"
                >
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0f923442-87f5-4dbb-aca3-63eb16fb67f1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f923442-87f5-4dbb-aca3-63eb16fb67f1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f923442-87f5-4dbb-aca3-63eb16fb67f1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f923442-87f5-4dbb-aca3-63eb16fb67f1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f923442-87f5-4dbb-aca3-63eb16fb67f1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f923442-87f5-4dbb-aca3-63eb16fb67f1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f923442-87f5-4dbb-aca3-63eb16fb67f1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f923442-87f5-4dbb-aca3-63eb16fb67f1?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                    className="aspect-square object-cover object-center w-full self-stretch rounded-3xl"
                    alt="Photography"
                  />
                  <h2 className="self-center text-white text-2xl font-semibold leading-8 capitalize w-[180px] max-w-full mt-5">
                    Photography
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div className="self-stretch mt-8 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/12 max-md:w-full">
                <a
                  href="#"
                  className="items-center bg-neutral-700 flex w-60 max-w-full grow flex-col mx-auto pb-6 rounded-3xl max-md:mt-8"
                >
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0a54daf2-09e1-4724-a378-f30587dba098?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a54daf2-09e1-4724-a378-f30587dba098?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a54daf2-09e1-4724-a378-f30587dba098?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a54daf2-09e1-4724-a378-f30587dba098?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a54daf2-09e1-4724-a378-f30587dba098?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a54daf2-09e1-4724-a378-f30587dba098?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a54daf2-09e1-4724-a378-f30587dba098?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a54daf2-09e1-4724-a378-f30587dba098?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                    className="aspect-square object-cover object-center w-full self-stretch rounded-3xl"
                    alt="Video"
                  />
                  <h2 className="self-center text-white text-2xl font-semibold leading-8 capitalize w-[180px] max-w-full mt-5">
                    Video
                  </h2>
                </a>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full">
                <a
                  href="#"
                  className="items-center bg-neutral-700 flex w-60 max-w-full grow flex-col mx-auto pb-6 rounded-3xl max-md:mt-8"
                >
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4a17a15-92d1-4edd-9c3b-1923da0eefb1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a17a15-92d1-4edd-9c3b-1923da0eefb1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a17a15-92d1-4edd-9c3b-1923da0eefb1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a17a15-92d1-4edd-9c3b-1923da0eefb1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a17a15-92d1-4edd-9c3b-1923da0eefb1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a17a15-92d1-4edd-9c3b-1923da0eefb1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a17a15-92d1-4edd-9c3b-1923da0eefb1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a17a15-92d1-4edd-9c3b-1923da0eefb1?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                    className="aspect-square object-cover object-center w-full self-stretch rounded-3xl"
                    alt="Utility"
                  />
                  <h2 className="self-center text-white text-2xl font-semibold leading-8 capitalize w-[180px] max-w-full mt-5">
                    Utility
                  </h2>
                </a>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full">
                <a
                  href="#"
                  className="items-center bg-neutral-700 flex w-60 max-w-full grow flex-col mx-auto pb-6 rounded-3xl max-md:mt-8"
                >
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4a17a15-92d1-4edd-9c3b-1923da0eefb1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a17a15-92d1-4edd-9c3b-1923da0eefb1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a17a15-92d1-4edd-9c3b-1923da0eefb1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a17a15-92d1-4edd-9c3b-1923da0eefb1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a17a15-92d1-4edd-9c3b-1923da0eefb1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a17a15-92d1-4edd-9c3b-1923da0eefb1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a17a15-92d1-4edd-9c3b-1923da0eefb1?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4a17a15-92d1-4edd-9c3b-1923da0eefb1?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                    className="aspect-square object-cover object-center w-full self-stretch rounded-3xl"
                    alt="Utility"
                  />
                  <h2 className="self-center text-white text-2xl font-semibold leading-8 capitalize w-[180px] max-w-full mt-5">
                    Utility
                  </h2>
                </a>
              </div>
              
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full">
                <a
                  href="#"
                  className="items-center bg-neutral-700 flex w-60 max-w-full grow flex-col mx-auto pb-6 rounded-3xl max-md:mt-8"
                >
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/101570ad-d02e-4deb-afe6-616a1a2b1e78?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/101570ad-d02e-4deb-afe6-616a1a2b1e78?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/101570ad-d02e-4deb-afe6-616a1a2b1e78?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/101570ad-d02e-4deb-afe6-616a1a2b1e78?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/101570ad-d02e-4deb-afe6-616a1a2b1e78?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/101570ad-d02e-4deb-afe6-616a1a2b1e78?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/101570ad-d02e-4deb-afe6-616a1a2b1e78?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/101570ad-d02e-4deb-afe6-616a1a2b1e78?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                    className="aspect-square object-cover object-center w-full self-stretch rounded-3xl"
                    alt="Virtual Worlds"
                  />
                  <h2 className="self-center text-white text-2xl font-semibold leading-8 capitalize w-[180px] max-w-full mt-5">
                    Virtual Worlds
                  </h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
