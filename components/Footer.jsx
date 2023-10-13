import * as React from "react";

export default function MyComponent() {
  return (
    <div className="flex flex-col">
      <div className="items-center self-stretch bg-neutral-700 flex w-full flex-col mt-0 px-5 py-10 max-md:max-w-full">
        <div className="justify-between self-center w-full max-w-[988px] -ml-5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[30%] max-md:w-full">
              <div className="items-start flex grow flex-col max-md:mt-12">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b8ab6fb5-3308-453d-a40e-8ad44eb1f147?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8ab6fb5-3308-453d-a40e-8ad44eb1f147?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8ab6fb5-3308-453d-a40e-8ad44eb1f147?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8ab6fb5-3308-453d-a40e-8ad44eb1f147?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8ab6fb5-3308-453d-a40e-8ad44eb1f147?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8ab6fb5-3308-453d-a40e-8ad44eb1f147?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8ab6fb5-3308-453d-a40e-8ad44eb1f147?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8ab6fb5-3308-453d-a40e-8ad44eb1f147?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                  className="aspect-[7.63] object-cover object-center w-full"
                />
                <div className="items-start flex w-[238px] max-w-full grow flex-col mt-8">
                  <div className="text-stone-300 text-base leading-6 self-stretch w-full">
                    NFT marketplace UI created with Anima for Figma.
                  </div>
                  <div className="items-start self-stretch flex grow flex-col mt-5">
                    <div className="text-stone-300 text-base leading-6 w-64">
                      Join our community
                    </div>
                    <div className="items-start flex w-[158px] max-w-full gap-2.5 mt-4 max-md:justify-center">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ba63736c-45ec-4272-928e-665fbc8a7bfd?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba63736c-45ec-4272-928e-665fbc8a7bfd?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba63736c-45ec-4272-928e-665fbc8a7bfd?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba63736c-45ec-4272-928e-665fbc8a7bfd?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba63736c-45ec-4272-928e-665fbc8a7bfd?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba63736c-45ec-4272-928e-665fbc8a7bfd?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba63736c-45ec-4272-928e-665fbc8a7bfd?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba63736c-45ec-4272-928e-665fbc8a7bfd?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                        className="aspect-square object-cover object-center w-8 shrink-0"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/51d45c82-ed59-4c22-9ed9-1f424df5a0d9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/51d45c82-ed59-4c22-9ed9-1f424df5a0d9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51d45c82-ed59-4c22-9ed9-1f424df5a0d9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/51d45c82-ed59-4c22-9ed9-1f424df5a0d9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/51d45c82-ed59-4c22-9ed9-1f424df5a0d9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51d45c82-ed59-4c22-9ed9-1f424df5a0d9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/51d45c82-ed59-4c22-9ed9-1f424df5a0d9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/51d45c82-ed59-4c22-9ed9-1f424df5a0d9?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                        className="aspect-square object-cover object-center w-8 shrink-0"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/076674f7-5f46-4097-8258-89af2c1d5a28?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/076674f7-5f46-4097-8258-89af2c1d5a28?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/076674f7-5f46-4097-8258-89af2c1d5a28?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/076674f7-5f46-4097-8258-89af2c1d5a28?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/076674f7-5f46-4097-8258-89af2c1d5a28?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/076674f7-5f46-4097-8258-89af2c1d5a28?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/076674f7-5f46-4097-8258-89af2c1d5a28?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/076674f7-5f46-4097-8258-89af2c1d5a28?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                        className="aspect-square object-cover object-center w-8 shrink-0"
                      />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eeb91860-3539-4ca2-9282-faca53a4e3fa?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb91860-3539-4ca2-9282-faca53a4e3fa?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb91860-3539-4ca2-9282-faca53a4e3fa?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb91860-3539-4ca2-9282-faca53a4e3fa?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb91860-3539-4ca2-9282-faca53a4e3fa?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb91860-3539-4ca2-9282-faca53a4e3fa?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb91860-3539-4ca2-9282-faca53a4e3fa?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb91860-3539-4ca2-9282-faca53a4e3fa?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                        className="aspect-square object-cover object-center w-8 shrink-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[19%] ml-5 max-md:w-full">
              <div className="items-start flex flex-col max-md:mt-12">
                <div className="text-white text-2xl font-bold leading-9 capitalize">
                  Explore
                </div>
                <div className="items-start flex w-[133px] max-w-full grow flex-col mt-6">
                  <div className="text-stone-300 text-base leading-6">
                    Marketplace
                  </div>
                  <div className="text-stone-300 text-base leading-6 mt-5">
                    Rankings
                  </div>
                  <div className="text-stone-300 text-base leading-6 mt-5">
                    Connect a wallet
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full">
              <div className="items-start flex flex-col max-md:mt-12">
                <div className="text-white text-2xl font-bold leading-9 capitalize">
                  Join our weekly digest
                </div>
                <div className="items-start flex w-[420px] max-w-full grow flex-col mt-6">
                  <div className="text-stone-300 text-base leading-6 w-[330px] max-w-full">
                    Get exclusive promotions & updates straight to your inbox.
                  </div>
                  <div className="items-start bg-white flex w-full gap-3 mt-5 pl-5 rounded-3xl">
                    <div className="text-zinc-800 text-base leading-6 self-center w-[225px] my-auto">
                      Enter your email here
                    </div>
                    <div className="justify-end items-center bg-purple-500 self-stretch flex w-[179px] max-w-full flex-col px-5 py-5 rounded-3xl">
                      <div className="text-white text-center text-base font-semibold leading-6 self-center">
                        Subscribe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-start self-center flex w-full max-w-[1050px] flex-col -ml-5 mt-12 max-md:max-w-full">
          <div className="self-center text-stone-300 text-xs leading-3 w-[1050px] max-md:max-w-full">
            Ⓒ NFT Market. Use this template freely.
          </div>
        </div>
      </div>
    </div>
  );
}
