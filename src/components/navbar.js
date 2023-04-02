import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("div div ul li span");
    window.onscroll = () => {
      var current = "start";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id");
          console.log(current);
        }
      });
      navLi.forEach((span) => {
        span.classList.remove("text-primary");
        if (span.classList.contains(current)) {
          span.classList.add("text-primary");
        }
      });
    };
  });
  const handleScroll = (e) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="navbar fixed bg-base-100">
        <div className="flex-1">
          <Link
            href="#start"
            className="btn btn-ghost normal-case text-xl"
            onClick={handleScroll}
          >
            <code>
              <span className="text-primary">&lt;</span>tbias25
              <span className="text-primary">/&gt;</span>
            </code>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="#start" onClick={handleScroll}>
                <code>
                  <span className="start text-primary">&lt;</span>start
                  <span className="start text-primary">/&gt;</span>
                </code>
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={handleScroll}>
                <code>
                  <span className="about">&lt;</span>about
                  <span className="about">/&gt;</span>
                </code>
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={handleScroll}>
                <code>
                  <span className="projects">&lt;</span>projects
                  <span className="projects">/&gt;</span>
                </code>
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={handleScroll}>
                <code>
                  <span className="contact">&lt;</span>contact
                  <span className="contact">/&gt;</span>
                </code>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
