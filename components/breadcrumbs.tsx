import Link from "next/link";

type BreadcrumbsProps = {
  items: {
    label: string;
    href?: string;
  }[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm font-semibold text-[var(--color-muted)]">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li className="flex items-center gap-2" key={`${item.label}-${index}`}>
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {item.href ? (
              <Link className="hover:text-[var(--color-cyan)]" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-[var(--color-navy)]">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
