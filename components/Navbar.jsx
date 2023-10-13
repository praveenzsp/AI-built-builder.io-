import * as React from "react";

export default function MarketplaceComponent() {
  return (
    <main className= "justify-between items-center self-stretch bg-zinc-800 flex flex-col px-5">
      <header className="self-center flex w-full max-w-[1180px] items-start justify-between gap-5 -ml-5 my-5 max-md:max-w-full max-md:flex-wrap">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c20b54f8-8e8f-4912-b639-ff72185aef59?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c20b54f8-8e8f-4912-b639-ff72185aef59?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c20b54f8-8e8f-4912-b639-ff72185aef59?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c20b54f8-8e8f-4912-b639-ff72185aef59?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c20b54f8-8e8f-4912-b639-ff72185aef59?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c20b54f8-8e8f-4912-b639-ff72185aef59?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c20b54f8-8e8f-4912-b639-ff72185aef59?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c20b54f8-8e8f-4912-b639-ff72185aef59?apiKey=0a03bfded039464692f8a98b0a4cdb34&"className="aspect-[7.59] object-cover object-center w-[243px] self-center shrink-0 my-auto"
          alt="Logo"
        />
        <nav className="justify-between items-start self-stretch flex w-[587px] max-w-full gap-5 max-md:flex-wrap max-md:justify-center">
          <a href="#" className="text-white text-center text-base font-semibold leading-6 self-center my-auto">
            Marketplace
          </a>
          <a href="#" className="text-white text-center text-base font-semibold leading-6 self-center my-auto">
            Rankings
          </a>
          <button className="text-white text-center text-base font-semibold leading-6 self-center w-36 my-auto">
            Connect a wallet
          </button>
          <div className="justify-between items-start bg-purple-500 self-stretch flex w-[152px] max-w-full gap-3 px-5 py-5 rounded-3xl">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ff4e5352-542d-4221-a8db-640a94759ee3?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff4e5352-542d-4221-a8db-640a94759ee3?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff4e5352-542d-4221-a8db-640a94759ee3?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff4e5352-542d-4221-a8db-640a94759ee3?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff4e5352-542d-4221-a8db-640a94759ee3?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff4e5352-542d-4221-a8db-640a94759ee3?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff4e5352-542d-4221-a8db-640a94759ee3?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff4e5352-542d-4221-a8db-640a94759ee3?apiKey=0a03bfded039464692f8a98b0a4cdb34&"className="aspect-square object-cover object-center w-5 shrink-0 mt-px"
              alt="User Icon"
            />
            <div className="text-white text-center text-base font-semibold leading-6 self-stretch">
              Sign Up
            </div>
          </div>
        </nav>
      </header>
    </main>
  );
}