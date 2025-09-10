import { Button } from "./components/button/button";
import { Icon } from "./components/icons/icon";
function App() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex max-w-2xl items-center gap-4">
        <Button variant="primary" size="medium">
          Button
        </Button>
        <Button variant="destructive">
          <Icon className="h-4 w-4" type="clipboard" />
          Button
        </Button>
        <div className="bg-secondary-500 text-brand-white">Secondary</div>
      </div>
    </div>
  );
}

export default App;
