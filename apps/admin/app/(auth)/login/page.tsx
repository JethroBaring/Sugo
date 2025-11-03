import { LoginForm } from "@/components/login-form";

// Avoid prerender/export issues: render this route dynamically at runtime
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
