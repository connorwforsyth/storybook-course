import { Button } from "./components/button/button";
import { PlusIcon } from "lucide-react";

function App() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex max-w-2xl items-baseline gap-4">
        <Button variant="primary" size="medium">
          Button
        </Button>
        <Button variant="destructive" size="large">
          <PlusIcon className="h-4 w-4" />
          Button
        </Button>
        <div className="bg-secondary-500 text-text-white">Secondary</div>
      </div>
    </div>
  );
}

export default App;
