export default function Hero() {
  const videoLink = "https://res.cloudinary.com/dyvixdh7n/video/upload/v1767943516/elevare_video_ws2zds.mp4";
  const logoPath = "/elevare-logo.png"

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <video
        src={videoLink}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/10" />

      {/* Logo */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <img
          src={logoPath}
          alt="Hero Logo"
          className="object-contain w-[300px] sm:w-[400px] md:w-[700px] px-5 drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
