export function SectionTitle({ children }) {
  return (
    <h2 className="text-xl font-bold text-gray-900">
      {children}
    </h2>
  );
}

export function Introduction({ children }) {
  return (
    <p className="max-w-5xl text-lg leading-8 text-gray-700">
      {children}
    </p>
  )
}

export function BulletList({ children }) {
  return (
    <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-7 text-gray-700">
      {children}
    </ul>
  );
}

export function SubBulletList({ children }) {
  return (
    <ul className="mt-2 list-[circle] pl-6 space-y-2">
      {children}
    </ul>
  )
}

export function OrderedList({ children }) {
  return (
    <ol className="mt-10 list-decimal space-y-8 pl-6 text-gray-800">
      {children}
    </ol>
  );
}

