import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <section className="flex flex-col justify-center items-center p-10 w-screen h-2/3">
      <h2 className="font-bold text-3xl text-center p-4">Welcome!</h2>
      <p className="w-2/3 text-xl font-semibold text-center">{`This app takes a picture of your driver's liscense (don't worry, it's not stored anywhere!) and will examine the information on your liscense and display that information in an accessible format. Say Cheese!`}</p>
      <Link
        className="text-gray-100 text-lg font-semibold border-2 rounded w-fit p-3 m-8 shadow shadow-slate-500 active:translate-y-1 active:shadow-sm bg-blue-600 border-blue-600 hover:bg-blue-300 hover:border-blue-300 hover:text-gray-800"
        to={"/parse"}
      >
        Get Started
      </Link>
    </section>
  );
};
