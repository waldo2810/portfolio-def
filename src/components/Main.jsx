import { useSelector } from "react-redux";

const MainSection = () => {
  const mode = useSelector((state) => state.mode);
  return (
    <div className={mode === "light" ? "light" : "dark"}>
      <section className="dark:bg-black w-4/5 mx-auto h-screen text-center max-w-lg pt-[12rem]">
        <h1 className="dark:text-white font-black text-4xl lg:text-6xl">
          Meet{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-green-600">
            your
          </span>{" "}
          next developer.
        </h1>
        <p className="dark:text-white mt-20 leading-7">
          I'm a colombian dev, minimalism enthusiast based in Cartagena. I like
          to be in the verge where peaks of design and awesome coding meet each
          other.
        </p>
        <hr className="dark:border-gray-900 mt-20 w-3/4 mx-auto" />
      </section>
    </div>
  );
};

export default MainSection;
