interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex flex-col mx-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="mt-1">{subtitle}</p>}
    </div>
  );
}
