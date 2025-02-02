import AllProducts from "@/components/test/allProducts";
import TodoApp from "@/components/test/TodoApp";

export default function Home() {
  return (
    <>
      <div className="max-w-[1146px] mx-auto ">
        <div className="bg-background mt-20">
          <h1>hello wolrd</h1>
          <h2>hello world</h2>
          <h4>hello wirld</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod
            veritatis repellat consectetur architecto quisquam quibusdam
            delectus quo iusto ex?
          </p>
        </div>
        <TodoApp></TodoApp>
        <br />
        {/* <AllProducts></AllProducts> */}
      </div>
    </>
  );
}
