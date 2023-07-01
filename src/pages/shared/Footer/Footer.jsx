import { Link } from "react-router-dom";
import logo from "../../../assets/logo/toyLogo.png";
import { FaRobot } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" text-white">
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex px-10 md:px-0 flex-wrap">
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <img className="w-10" src={logo} alt="logo" />
              <Link className="flex items-center mb-2 gap-1" to="./">
                <p
                  style={{ fontFamily: `'Rubik Puddles', cursive` }}
                  className=" font-bold uppercase primary-text flex items-center gap-1 text-xl"
                >
                  Toywire
                  <span className="ms-1 text-secondary">
                    <FaRobot />
                  </span>
                </p>
              </Link>
              <p className="text-gray-400 mb-2">123 Toy Street</p>
              <p className="text-gray-400 mb-2">City, State ZIP</p>
              <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
              <p className="text-gray-400">Email: info@toywire.com</p>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h4 className="text-white text-lg font-bold mb-4">
                Customer Service
              </h4>
              <ul className="text-gray-400">
                <li className="mb-2">Shipping &amp; Returns</li>
                <li className="mb-2">FAQs</li>
                <li className="mb-2">Contact Us</li>
                <li className="mb-2">Privacy Policy</li>
                <li>Terms &amp; Conditions</li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h4 className="text-white text-lg font-bold mb-4">Categories</h4>
              <ul className="text-gray-400">
                <li className="mb-2">Action Figures</li>
                <li className="mb-2">Building Blocks</li>
                <li className="mb-2">Dolls</li>
                <li className="mb-2">Educational Toys</li>
                <li>Remote Control</li>
              </ul>
            </div>
            <div className="w-full items-center flex flex-col justify-center md:w-1/4">
              <h4 className="text-white text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex gap-7 text-gray-400">
                <span className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </span>
                <span className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </span>
                <span className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <hr className="border-gray-700 my-6" />
          <p className="text-gray-400 text-sm text-center">
            &copy; 2023 ToyWire. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
