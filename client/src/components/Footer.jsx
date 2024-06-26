/* eslint-disable react/no-unescaped-entities */
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
import { Navbar } from "flowbite-react";
import { useLocation } from "react-router-dom";
export default function FooterCom() {
  const path = useLocation().pathname;
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-blue-950 via-teal-600 to-emerald-600 rounded-lg text-white">
                AirGuard
              </span>
              Empresa
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Navbar>
                <Footer.Title title="FAQ" />
                <Navbar.Link active={path === "/"} as={"div"}>
                  <Link to="/faq">Preguntas frecuentes</Link>
                </Navbar.Link>
              </Navbar>
            </div>
            <div>
              <Footer.Title title="Nosotros" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://es.linkedin.com/pulse/aplicaciones-innovadoras-del-iot-transformando"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Innovando en IoT
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AirGuard
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/* <div>
              <Footer.Title title="Síganos" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/diomastrio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div> */}

            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Politica de Privacidad</Footer.Link>
                <Footer.Link href="#">Terminos &amp; Condiciones</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="AirGuard"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="https://github.com/diomastrio" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
