import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHeader({
  title,
  subtitle,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col mx-8", className)}>
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="mt-1">{subtitle}</p>}
    </div>
  );
}
