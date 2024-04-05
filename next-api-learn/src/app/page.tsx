import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/users">Get User List</Link>
      <br />
      <br />
      <Link href="/addUser">Add User</Link>
    </main>
  );
}
