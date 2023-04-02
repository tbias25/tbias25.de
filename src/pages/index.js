import GithubIcon from "@/icons/github-icon";
import InstagramIcon from "@/icons/instagram-icon";
import LinkedInIcon from "@/icons/linkedin-icon";
import TwitterIcon from "@/icons/twitter-icon";
import Link from "next/link";

export default function Home() {
  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <section id="start" className="hero min-h-screen bg-base-200">
        <div className="hero-content text-left">
          <div className="max-w-md">
            <code className="text-md font-bold text-primary">
              hello, my name is
            </code>
            <p className="py-2">
              <code className="text-3xl font-bold">tobias abbenhaus.</code>
            </p>
            <p className="py-4">
              <code>
                i&apos;m a software engineering student based in dortmund, germany
                specializing in building websites, mobile apps, and everything
                between.
              </code>
            </p>
            <Link
              href="#about"
              onClick={handleScroll}
              className="btn btn-outline btn-primary"
            >
              <code className="lowercase">//learn more</code>
            </Link>
          </div>
        </div>
      </section>
      <section id="about" className="hero min-h-screen bg-base-200">
        <div className="hero-content text-left">
          <div className="max-w-md">
            <code className="text-md font-bold">
              <span className="text-primary">&lt;</span>about
              <span className="text-primary">/&gt;</span>
            </code>
            <p className="py-4">
              <code>
                i&apos;m tobias, a 21-year-old student of software development. at
                the age of 14, i started teaching myself programming. from the
                beginning, i was fascinated by the ability to solve complex
                problems and develop innovative solutions through software
                development. since then, i have tirelessly worked to expand and
                deepen my knowledge and skills in this field.
              </code>
            </p>
            <p className="py-2">
              <code>
                i am determined to continue my career in software development
                and take my expertise to the next level. you can find some of
                the projects i have worked on here on my homepage.
              </code>
            </p>
            <p className="py-2">
              <code>
                here are a few technologies i&rsquo;ve been working with recently:
              </code>
            </p>
            <p className="py-2">
              <code className="font-bold">
                <span className="text-primary">/</span>javascript
                <span className="text-primary">/</span>nodejs
                <span className="text-primary">/</span>nextjs
                <span className="text-primary">/</span>tailwindcss
                <span className="text-primary">/</span>
              </code>
            </p>
          </div>
        </div>
      </section>
      <section id="projects" className="hero min-h-screen bg-base-200">
        <div className="hero-content text-left">
          <div className="max-w-md">
            <code className="text-md font-bold">
              <span className="text-primary">&lt;</span>projects
              <span className="text-primary">/&gt;</span>
            </code>
            <p className="py-2">
              <code className="text-3xl font-bold">oh, try again later</code>
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="max-w-xl">
            <div className="card w-full shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="flex flex-row gap-2">
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <input
                  type="text"
                  placeholder="subject"
                  className="input input-bordered"
                />
                <textarea
                  placeholder="message"
                  className="textarea textarea-bordered"
                ></textarea>
                <button className="btn btn-primary lowercase">
                  <code>send message</code>
                </button>
                <div className="divider">get in touch</div>
                <div className="flex flex-row items-center justify-center gap-x-8">
                  <Link
                    href="https://www.instagram.com/tbias25.prv"
                    className="hover:text-primary"
                  >
                    <InstagramIcon />
                  </Link>
                  <Link
                    href="https://www.twitter.com/tbias25"
                    className="hover:text-primary"
                  >
                    <TwitterIcon />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/tbias25"
                    className="hover:text-primary"
                  >
                    <LinkedInIcon />
                  </Link>
                  <Link
                    href="https://www.github.com/tbias25"
                    className="hover:text-primary"
                  >
                    <GithubIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
