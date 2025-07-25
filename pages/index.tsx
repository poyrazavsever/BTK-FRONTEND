
import Logo from "@/components/ui/logo";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <p>This is the home page.</p>
      <p>Explore the app and enjoy!</p>

      <div className="space-y-6 max-w-xs mx-auto mt-8">
        <Logo variant="icon" />
        <Logo variant="withText" />
        <Logo variant="withText" textClassName="text-blue-500" />
        <Button>Click Me</Button>
      </div>
    </div>
  );
}
