export default function Home() {
  const name = String("John Doe"); // constant declaration (explicit String)
  let age = Number(12.2); // variable declaration (expllicit Number)

  return (
    <div className="h-[100vh] w-screen flex justify-center items-center">
      <div className="w-full h-full px-24 flex flex-col items-center justify-center">
        <p className="text-center text-2xl">Hello, my name is {name}.</p>
        <br />
        <p className="text-center text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          aspernatur, cumque labore nemo quos voluptates. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quibusdam aspernatur, cumque labore
          nemo quos voluptates. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quibusdam aspernatur, cumque labore nemo quos
          voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quibusdam aspernatur, cumque labore nemo quos voluptates.
        </p>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <img src="/profile/lynn_profile.png" className="w-[600px] h-[600px]" />
      </div>
    </div>
  );
}
