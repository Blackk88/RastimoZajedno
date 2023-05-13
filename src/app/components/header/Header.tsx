"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Contacts from "./Contacts";
import logo from "@/assets/logo.png";
import classes from "./header.module.css";

interface Dictionary {
  home: string;
  about: string;
  work: string;
  video: string;
  contacts: string;
  team: string;
}

export function Header({ dict }: { dict: Dictionary }) {
  const pathname = usePathname();
  const localePath = pathname.split("/")[1];

  function getLinkHref(href: string): string {
    const url = `/${localePath}${href}`;

    return url;
  }

  function isLinkActive(href: string): boolean {
    const url = getLinkHref(href);
    const isPathnameMatch = url === pathname;

    return isPathnameMatch;
  }

  return (
    <header className="">
      <Contacts />
      <nav className="navbar navbar-expand-md justify-content-between align-items-center">
        <div className="container-fluid text-center">
          <Link href={localePath} className="navbar-brand">
            <Image
              src={logo}
              alt="Rastimo Zajedno Logo"
              className={classes.logo}
              width={150}
              height={150}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-header"
            aria-controls="navbar-header"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-header">
            <ul className="navbar-nav my-2 my-md-0 ms-auto gap-2 justify-content-between align-items-center ">
              <li className={"nav-item " + classes.navItem}>
                <Link
                  className={`nav-link ${classes.navLink} ${
                    isLinkActive("") ? classes.active : ""
                  }`}
                  aria-current="page"
                  href={getLinkHref("")}
                >
                  {dict.home}
                </Link>
              </li>
              <li className={"nav-item dropdown-center " + classes.navItem}>
                <Link
                  className={`nav-link dropdown-toggle text-uppercase ${
                    classes.navLink
                  } ${
                    isLinkActive("/about") || isLinkActive("/our-team")
                      ? classes.active
                      : ""
                  }`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {dict.about}
                </Link>
                <ul
                  className={
                    "dropdown-menu text-center text-uppercase " +
                    classes.dropdownMenu
                  }
                >
                  <li>
                    <Link
                      className={"dropdown-item " + classes.dropdownItem}
                      href={getLinkHref("/about")}
                    >
                      {dict.about}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={"dropdown-item " + classes.dropdownItem}
                      href={getLinkHref("/our-team")}
                    >
                      {dict.team}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item w-100">
                <Link
                  className={`nav-link ${classes.navLink} ${
                    isLinkActive("/our-work") ? classes.active : ""
                  }`}
                  href={getLinkHref("/our-work")}
                >
                  {dict.work}
                </Link>
              </li>
              <li className={"nav-item " + classes.navItem}>
                <Link
                  className={`nav-link ${classes.navLink} ${
                    isLinkActive("/videos") ? classes.active : ""
                  }`}
                  href={getLinkHref("/videos")}
                >
                  {dict.video}
                </Link>
              </li>
              <li className={"nav-item " + classes.navItem}>
                <Link
                  className={`nav-link ${classes.navLink} ${
                    isLinkActive("/contacts") ? classes.active : ""
                  }`}
                  href={getLinkHref("/contacts")}
                >
                  {dict.contacts}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
