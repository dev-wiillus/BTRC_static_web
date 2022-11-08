import Link from "next/link";

const menu = [
  { name: "텀블러 기부", path: "/tumbler-donation" },
  { name: "파트너십", path: "/partnership" },
];

function Navigation() {
  return (
    <nav>
      <ul>
        {menu.map(({ name, path }) => (
          <li key={path}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
