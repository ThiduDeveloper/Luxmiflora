export const metadata = {
  title: 'Luxmi Flora Studio CMS',
  description: 'Sanity Studio CMS Content Management for Luxmi Flora',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="fixed inset-0 z-[99999] bg-black">{children}</div>;
}
