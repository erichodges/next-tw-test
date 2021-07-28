// import Head from 'next/head'

import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw"
      }}
    >
      <Image
        src="https://res.cloudinary.com/dn3baky3u/image/upload/v1580246844/gatsby-cloudinary/evora-gt-side.jpg"
        alt="car"
        width="2400"
        height="1200"
        layout="responsive"
        priority="true"
      />
      <h2
        className="absolute text-xl text-center"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100vw"
        }}
      >
        Text Text
      </h2>
    </div>
  );
}
