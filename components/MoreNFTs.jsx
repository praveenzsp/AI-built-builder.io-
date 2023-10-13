import * as React from "react";

export default function MyComponent() {
  return (
    <div className="items-center self-stretch bg-zinc-800 flex w-full flex-col mt-0 px-5 py-10 max-md:max-w-full">
      <div className="items-start self-center flex w-full max-w-[1050px] justify-between gap-5 -ml-5 mt-10 max-md:max-w-full max-md:flex-wrap">
        <div className="items-start flex flex-col w-[763px] max-md:max-w-full">
          <div className="self-stretch text-white text-4xl font-semibold leading-10 capitalize w-full">
            Discover More NFTs
          </div>
          <div className="self-stretch text-white text-2xl leading-9 capitalize w-full mt-2.5">
            Explore new trending NFTs
          </div>
        </div>
        <div className="justify-center items-center border-[color:var(--Call-to-Action,#A259FF)] flex w-[187px] max-w-full flex-col mt-8 px-5 py-5 rounded-3xl border-2 border-solid">
          <div className="self-center flex w-[87px] max-w-full items-start gap-3">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/604f0b07-0874-4567-91f5-af5e2366bff9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/604f0b07-0874-4567-91f5-af5e2366bff9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/604f0b07-0874-4567-91f5-af5e2366bff9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/604f0b07-0874-4567-91f5-af5e2366bff9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/604f0b07-0874-4567-91f5-af5e2366bff9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/604f0b07-0874-4567-91f5-af5e2366bff9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/604f0b07-0874-4567-91f5-af5e2366bff9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/604f0b07-0874-4567-91f5-af5e2366bff9?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
              className="aspect-square object-cover object-center w-5 shrink-0 mt-px"
            />
            <div className="text-white text-center text-base font-semibold leading-6 self-stretch">
              See All
            </div>
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1050px] -ml-5 mt-16 mb-10 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full">
            <div className="items-center bg-neutral-700 flex w-[330px] max-w-full grow flex-col mx-auto pb-7 rounded-3xl max-md:mt-8">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/30890625-bb0f-4639-8c02-31f5a793da15?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/30890625-bb0f-4639-8c02-31f5a793da15?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30890625-bb0f-4639-8c02-31f5a793da15?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/30890625-bb0f-4639-8c02-31f5a793da15?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/30890625-bb0f-4639-8c02-31f5a793da15?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30890625-bb0f-4639-8c02-31f5a793da15?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/30890625-bb0f-4639-8c02-31f5a793da15?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/30890625-bb0f-4639-8c02-31f5a793da15?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                className="aspect-[1.12] object-cover object-center w-full self-stretch rounded-3xl"
              />
              <div className="items-start self-center flex w-[270px] max-w-full flex-col mt-5">
                <div className="items-start self-stretch flex flex-col">
                  <div className="self-stretch text-white text-2xl font-semibold leading-8 capitalize w-full">
                    Distant Galaxy
                  </div>
                  <div className="items-start self-stretch flex justify-between gap-3 mt-1.5">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c6cf1ecd-ca7c-4ad2-8ce7-51c4a3d2330f?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6cf1ecd-ca7c-4ad2-8ce7-51c4a3d2330f?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6cf1ecd-ca7c-4ad2-8ce7-51c4a3d2330f?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6cf1ecd-ca7c-4ad2-8ce7-51c4a3d2330f?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6cf1ecd-ca7c-4ad2-8ce7-51c4a3d2330f?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6cf1ecd-ca7c-4ad2-8ce7-51c4a3d2330f?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6cf1ecd-ca7c-4ad2-8ce7-51c4a3d2330f?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6cf1ecd-ca7c-4ad2-8ce7-51c4a3d2330f?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                      className="aspect-square object-cover object-center w-6 shrink-0"
                    />
                    <div className="text-white text-base leading-6 w-[252px]">
                      MoonDancer
                    </div>
                  </div>
                </div>
                <div className="items-start self-stretch flex w-full justify-between gap-5 mt-6">
                  <div className="items-start self-stretch flex flex-col w-[114px]">
                    <div className="self-stretch text-zinc-500 text-xs leading-3 w-full">
                      Price
                    </div>
                    <div className="self-stretch text-white text-base leading-6 w-full mt-2">
                      1.63 ETH
                    </div>
                  </div>
                  <div className="justify-center items-end self-stretch flex flex-col w-[135px]">
                    <div className="self-stretch text-zinc-500 text-right text-xs leading-3 w-full">
                      Highest Bid
                    </div>
                    <div className="self-stretch text-white text-right text-base leading-6 w-full mt-2">
                      0.33 wETH
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full">
            <div className="items-center bg-neutral-700 flex w-[330px] max-w-full grow flex-col mx-auto pb-7 rounded-3xl max-md:mt-8">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca02cd3e-c4e8-4b0b-af3c-0cbe7a973f7e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca02cd3e-c4e8-4b0b-af3c-0cbe7a973f7e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca02cd3e-c4e8-4b0b-af3c-0cbe7a973f7e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca02cd3e-c4e8-4b0b-af3c-0cbe7a973f7e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca02cd3e-c4e8-4b0b-af3c-0cbe7a973f7e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca02cd3e-c4e8-4b0b-af3c-0cbe7a973f7e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca02cd3e-c4e8-4b0b-af3c-0cbe7a973f7e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca02cd3e-c4e8-4b0b-af3c-0cbe7a973f7e?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                className="aspect-[1.12] object-cover object-center w-full self-stretch rounded-3xl"
              />
              <div className="items-start self-center flex w-[270px] max-w-full flex-col mt-5">
                <div className="items-start self-stretch flex flex-col">
                  <div className="self-stretch text-white text-2xl font-semibold leading-8 capitalize w-full">
                    Life On Edena
                  </div>
                  <div className="items-start self-stretch flex justify-between gap-3 mt-1.5">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8f9bbf0c-4aee-4a0e-bc76-3c17d2efa0d5?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f9bbf0c-4aee-4a0e-bc76-3c17d2efa0d5?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f9bbf0c-4aee-4a0e-bc76-3c17d2efa0d5?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f9bbf0c-4aee-4a0e-bc76-3c17d2efa0d5?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f9bbf0c-4aee-4a0e-bc76-3c17d2efa0d5?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f9bbf0c-4aee-4a0e-bc76-3c17d2efa0d5?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f9bbf0c-4aee-4a0e-bc76-3c17d2efa0d5?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f9bbf0c-4aee-4a0e-bc76-3c17d2efa0d5?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                      className="aspect-square object-cover object-center w-6 shrink-0"
                    />
                    <div className="text-white text-base leading-6 w-[252px]">
                      NebulaKid
                    </div>
                  </div>
                </div>
                <div className="items-start self-stretch flex w-full justify-between gap-5 mt-6">
                  <div className="items-start self-stretch flex flex-col w-[114px]">
                    <div className="self-stretch text-zinc-500 text-xs leading-3 w-full">
                      Price
                    </div>
                    <div className="self-stretch text-white text-base leading-6 w-full mt-2">
                      1.63 ETH
                    </div>
                  </div>
                  <div className="justify-center items-end self-stretch flex flex-col w-[135px]">
                    <div className="self-stretch text-zinc-500 text-right text-xs leading-3 w-full">
                      Highest Bid
                    </div>
                    <div className="self-stretch text-white text-right text-base leading-6 w-full mt-2">
                      0.33 wETH
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full">
            <div className="items-center bg-neutral-700 flex w-[330px] max-w-full grow flex-col mx-auto pb-7 rounded-3xl max-md:mt-8">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1e542fce-43dd-425b-ae00-b2a79031da10?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e542fce-43dd-425b-ae00-b2a79031da10?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e542fce-43dd-425b-ae00-b2a79031da10?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e542fce-43dd-425b-ae00-b2a79031da10?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e542fce-43dd-425b-ae00-b2a79031da10?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e542fce-43dd-425b-ae00-b2a79031da10?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e542fce-43dd-425b-ae00-b2a79031da10?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e542fce-43dd-425b-ae00-b2a79031da10?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                className="aspect-[1.12] object-cover object-center w-full self-stretch rounded-3xl"
              />
              <div className="items-start self-center flex w-[270px] max-w-full flex-col mt-5">
                <div className="items-start self-stretch flex flex-col">
                  <div className="self-stretch text-white text-2xl font-semibold leading-8 capitalize w-full">
                    AstroFiction
                  </div>
                  <div className="items-start self-stretch flex justify-between gap-3 mt-1.5">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6797534b-253b-4b40-8666-750abdefe460?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6797534b-253b-4b40-8666-750abdefe460?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6797534b-253b-4b40-8666-750abdefe460?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6797534b-253b-4b40-8666-750abdefe460?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6797534b-253b-4b40-8666-750abdefe460?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6797534b-253b-4b40-8666-750abdefe460?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6797534b-253b-4b40-8666-750abdefe460?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6797534b-253b-4b40-8666-750abdefe460?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                      className="aspect-square object-cover object-center w-6 shrink-0"
                    />
                    <div className="text-white text-base leading-6 w-[252px]">
                      Spaceone
                    </div>
                  </div>
                </div>
                <div className="items-start self-stretch flex w-full justify-between gap-5 mt-6">
                  <div className="items-start self-stretch flex flex-col w-[114px]">
                    <div className="self-stretch text-zinc-500 text-xs leading-3 w-full">
                      Price
                    </div>
                    <div className="self-stretch text-white text-base leading-6 w-full mt-2">
                      1.63 ETH
                    </div>
                  </div>
                  <div className="justify-center items-end self-stretch flex flex-col w-[135px]">
                    <div className="self-stretch text-zinc-500 text-right text-xs leading-3 w-full">
                      Highest Bid
                    </div>
                    <div className="self-stretch text-white text-right text-base leading-6 w-full mt-2">
                      0.33 wETH
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
