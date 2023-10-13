import * as React from "react";

export default function MyComponent() {
  return (
    <div className="flex flex-col -mt-24">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/554c72ee-6a92-424c-81ee-eea9db88ba6e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/554c72ee-6a92-424c-81ee-eea9db88ba6e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/554c72ee-6a92-424c-81ee-eea9db88ba6e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/554c72ee-6a92-424c-81ee-eea9db88ba6e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/554c72ee-6a92-424c-81ee-eea9db88ba6e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/554c72ee-6a92-424c-81ee-eea9db88ba6e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/554c72ee-6a92-424c-81ee-eea9db88ba6e?apiKey=0a03bfded039464692f8a98b0a4cdb34&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/554c72ee-6a92-424c-81ee-eea9db88ba6e?apiKey=0a03bfded039464692f8a98b0a4cdb34&"
        className="aspect-[2] object-cover object-center w-full self-stretch mt-24 max-md:max-w-full"
      />
    </div>
  );
}
