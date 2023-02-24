import yio from "../assets/me.jpg";

const Me = () => {
  return (
    <div
      id="me"
      className="flex flex-col items-center my-10 w-4/5 lg:w-1/2 mx-auto"
    >
      <h2 className="mb-10 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-green-600">
        Get to know me
      </h2>
      <img src={yio} alt="me" className="lg:h-[30rem] pb-5" />
      <p className=" dark:text-white text-sm leading-7">
        I'm Waldo Sobrino, a creative full-stack developer with over 4 years of
        expertise. I'm passionate about developing innovative solutions for
        complex problems and enjoy collaborating with others to achieve common
        goals. I am skilled in multiple languages and frameworks with expertise
        in building web and mobile applications. I'm a great communicator and
        work well in a team environment.
      </p>
    </div>
  );
};

export default Me;
