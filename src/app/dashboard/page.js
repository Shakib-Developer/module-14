import { headers } from "next/headers";
import AppNavBar from "../component/AppNavBar";

async function GetData() {
  const headersList = headers();
  return headersList.get("email");
}

const Page = async () => {
  const x = await GetData();
  return (
    <div>
      <AppNavBar />
      <div>
        <div className="bg-red-300 text-center h-[500px] flex items-center justify-center w-3/4 mx-auto">
          <h1 className="text-6xl p-2 bg-blue-300 font-semibold">
            This Dashboard Page
          </h1>
          <h4>{x}</h4>
        </div>
      </div>
    </div>
  );
};

export default Page;
