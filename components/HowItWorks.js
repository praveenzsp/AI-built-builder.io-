import * as React from "react";

export default function MyComponent() {
  return (
    <div className="flex flex-col">
      <div className="items-center self-stretch bg-zinc-800 flex w-full flex-col mt-0 px-5 py-10 max-md:max-w-full">
        <div className="items-start self-center flex w-full max-w-[1050px] flex-col -ml-5 mt-10 max-md:max-w-full">
          <div className="text-white text-4xl font-semibold leading-10 capitalize self-center w-[1050px] max-md:max-w-full">
            How it works
          </div>
          <div className="text-white text-2xl leading-9 capitalize self-center w-[1050px] mt-2.5 max-md:max-w-full">
            Find out how to get started
          </div>
        </div>
        <div className="self-center w-full max-w-[1050px] -ml-5 mt-12 mb-10 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full">
              <div className="items-center bg-neutral-700 flex w-[330px] max-w-full grow flex-col mx-auto pt-2.5 pb-8 px-5 rounded-3xl max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0dad65ad-8da3-4986-81a6-cb109ee9b277?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dad65ad-8da3-4986-81a6-cb109ee9b277?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dad65ad-8da3-4986-81a6-cb109ee9b277?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dad65ad-8da3-4986-81a6-cb109ee9b277?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dad65ad-8da3-4986-81a6-cb109ee9b277?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dad65ad-8da3-4986-81a6-cb109ee9b277?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dad65ad-8da3-4986-81a6-cb109ee9b277?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dad65ad-8da3-4986-81a6-cb109ee9b277?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                  className="aspect-square object-cover object-center w-[250px] self-center max-w-full"
                />
                <div className="items-center self-center flex w-[270px] max-w-full flex-col mt-5">
                  <div className="self-stretch text-white text-center text-2xl font-semibold leading-8 capitalize w-full">
                    Setup Your wallet
                  </div>
                  <div className="self-stretch text-white text-center text-base leading-6 w-full mt-2.5">
                    Set up your wallet of choice. Connect it to the Animarket by
                    clicking the wallet icon in the top right corner.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full">
              <div className="items-center self-stretch bg-neutral-700 flex w-[330px] max-w-full grow flex-col mx-auto pt-2.5 pb-10 px-5 rounded-3xl max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/75582a50-1ac7-49d2-805e-603aaf395fc9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/75582a50-1ac7-49d2-805e-603aaf395fc9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/75582a50-1ac7-49d2-805e-603aaf395fc9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/75582a50-1ac7-49d2-805e-603aaf395fc9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/75582a50-1ac7-49d2-805e-603aaf395fc9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/75582a50-1ac7-49d2-805e-603aaf395fc9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/75582a50-1ac7-49d2-805e-603aaf395fc9?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/75582a50-1ac7-49d2-805e-603aaf395fc9?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                  className="aspect-square object-cover object-center w-[250px] self-center max-w-full"
                />
                <div className="items-center self-center flex w-[270px] max-w-full flex-col mt-5 mb-3">
                  <div className="self-stretch text-white text-center text-2xl font-semibold leading-8 capitalize w-full">
                    Create Collection
                  </div>
                  <div className="self-stretch text-white text-center text-base leading-6 w-full mt-2.5">
                    Upload your work and setup your collection. Add a
                    description, social links and floor price.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full">
              <div className="items-center self-stretch bg-neutral-700 flex w-[330px] max-w-full grow flex-col mx-auto pt-2.5 pb-8 px-5 rounded-3xl max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/be2c9cee-e5ac-41dd-be74-b6713677d01c?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/be2c9cee-e5ac-41dd-be74-b6713677d01c?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/be2c9cee-e5ac-41dd-be74-b6713677d01c?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/be2c9cee-e5ac-41dd-be74-b6713677d01c?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/be2c9cee-e5ac-41dd-be74-b6713677d01c?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/be2c9cee-e5ac-41dd-be74-b6713677d01c?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/be2c9cee-e5ac-41dd-be74-b6713677d01c?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/be2c9cee-e5ac-41dd-be74-b6713677d01c?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
                  className="aspect-square object-cover object-center w-[250px] self-center max-w-full"
                />
                <div className="items-center self-center flex w-[270px] max-w-full flex-col mt-5">
                  <div className="self-stretch text-white text-center text-2xl font-semibold leading-8 capitalize w-full">
                    Start Earning
                  </div>
                  <div className="self-stretch text-white text-center text-base leading-6 w-full mt-2.5">
                    Choose between auctions and fixed-price listings. Start
                    earning by selling your NFTs or trading others.
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
