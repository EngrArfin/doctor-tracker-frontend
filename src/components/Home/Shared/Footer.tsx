import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { employersLinks, jobSeekersLinks, legalLinks } from "./footerLinks";

import brandLogo from "@/assets/icons/logo.svg";
import { MdOutlineEmail } from "react-icons/md";
import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      className="bg-white text-gray-700 border-t"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container  mx-auto px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <img
                src={brandLogo}
                alt="FarmLink Logo"
                className="w-10 h-10 rounded-xl shadow-sm"
              />
              <h3 className="text-xl font-semibold text-gray-900">FarmLink</h3>
            </div>

            <p className="text-sm leading-relaxed text-gray-500">
              Connecting skilled agricultural workers with trusted farms across
              the nation through a reliable and transparent platform.
            </p>
          </motion.div>

          {/* Job Seekers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-900">
              Job Seekers
            </h4>
            <ul className="space-y-3 text-sm">
              {jobSeekersLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Employers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-900">
              Employers
            </h4>
            <ul className="space-y-3 text-sm">
              {employersLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-900">
              Contact
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MdOutlineEmail className="text-blue-600" />
                <a
                  href="mailto:support@farmconnect.com"
                  className="hover:text-blue-600 transition-colors"
                >
                  support@farmconnect.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-600" />
                <a
                  href="tel:1800FARMCONNECT"
                  className="hover:text-blue-600 transition-colors"
                >
                  1-800-FARM-CONNECT
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-600" />
                <span>123 Agriculture Way, USA</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>© 2025 FarmConnect. All rights reserved.</p>

          <div className="flex gap-5">
            {legalLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                className="hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

// import { Link } from "react-router-dom";
// import { motion } from "framer-motion"; // ✅

// // import Container from "../Container";
// import {
//   employersLinks,
//   jobSeekersLinks,
//   legalLinks,
//   // socialLinks,
// } from "./footerLinks";
// import brandLogo from "@/assets/icons/logo.svg";
// import { MdOutlineEmail } from "react-icons/md";
// import { MapPin, Phone } from "lucide-react";

// const Footer = () => {
//   return (
//     <motion.footer
//       className="bg-background-darkBlue text-white"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="flex flex-col gap-14 pt-20 pb-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
//           {/* Brand Section */}
//           <motion.div
//             className="space-y-6"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="flex items-center gap-2">
//               <motion.img
//                 className="size-10 rounded-xl"
//                 src={brandLogo}
//                 alt="FarmLink Logo"
//                 whileHover={{ rotate: 360 }}
//                 transition={{ duration: 0.6 }}
//                 whileInView={{ rotate: 0 }}
//                 viewport={{ once: true }}
//               />
//               <h4 className="text-xl font-medium">FarmLink</h4>
//             </div>
//             <motion.p
//               className="text-website-lightGray w-[80%]"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//             >
//               Connecting skilled agricultural workers with trusted farms across
//               the nation.
//             </motion.p>
//             {/* <div className="text-base flex gap-2">
//               {socialLinks.map(({ href, icon: Icon, label }, index) => (
//                 <motion.a
//                   key={label}
//                   target="_blank"
//                   href={href}
//                   aria-label={label}
//                   className="bg-white w-9 h-9 border flex items-center justify-center rounded-xl text-[#205CA5] hover:bg-blue-50 transition-colors"
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 200,
//                     delay: 0.2 + index * 0.1,
//                   }}
//                   whileHover={{
//                     scale: 1.1,
//                     rotate: 5,
//                     backgroundColor: "#eff6ff",
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <Icon />
//                 </motion.a>
//               ))}
//             </div> */}
//           </motion.div>

//           {/* Job Seekers */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             <h4 className="mb-6 text-website-lightGray font-light">
//               For Job Seekers
//             </h4>
//             <ul className="space-y-2">
//               {jobSeekersLinks.map((link, idx) => (
//                 <motion.li
//                   key={idx}
//                   initial={{ opacity: 0, x: -10 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.3, delay: 0.2 + idx * 0.05 }}
//                 >
//                   <Link
//                     to={link.to}
//                     className="hover:underline hover:text-blue-200 transition-colors"
//                   >
//                     {link.label}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Employers */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h4 className="mb-6 text-website-lightGray font-light">
//               Employers
//             </h4>
//             <ul className="space-y-2">
//               {employersLinks.map((link, idx) => (
//                 <motion.li
//                   key={idx}
//                   initial={{ opacity: 0, x: -10 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
//                 >
//                   <Link
//                     to={link.to}
//                     className="hover:underline hover:text-blue-200 transition-colors"
//                   >
//                     {link.label}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             <h4 className="mb-6 text-website-lightGray font-light">Contact</h4>
//             <ul className="space-y-2">
//               <motion.li
//                 className="flex gap-3 items-center"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.3, delay: 0.4 }}
//                 whileHover={{ x: 5 }}
//               >
//                 <MdOutlineEmail size={16} />
//                 <a
//                   href="mailto:support@farmconnect.com"
//                   className="hover:underline hover:text-blue-200 transition-colors"
//                 >
//                   support@farmconnect.com
//                 </a>
//               </motion.li>
//               <motion.li
//                 className="flex gap-3 items-center"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.3, delay: 0.45 }}
//                 whileHover={{ x: 5 }}
//               >
//                 <Phone size={16} />
//                 <a
//                   href="tel:1800FARMCONNECT"
//                   className="hover:underline hover:text-blue-200 transition-colors"
//                 >
//                   1-800-FARM-CONNECT
//                 </a>
//               </motion.li>
//               <motion.li
//                 className="flex gap-3 items-center"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.3, delay: 0.5 }}
//                 whileHover={{ x: 5 }}
//               >
//                 <MapPin size={16} />
//                 <span className="hover:text-blue-200 transition-colors">
//                   123 Agriculture Way
//                 </span>
//               </motion.li>
//             </ul>
//           </motion.div>
//         </div>

//         {/* Legal */}
//         <motion.div
//           className="border-t border-[#E9EFF6] pt-4 text-xs md:text-sm text-[#BCBEBE] flex flex-col md:flex-row justify-between items-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//           >
//             © 2025 FarmConnect. All rights reserved.
//           </motion.p>
//           <div className="flex text-center flex-wrap justify-center gap-4 mt-2 md:mt-0">
//             {legalLinks.map((link, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.3, delay: 0.6 + idx * 0.1 }}
//               >
//                 <Link
//                   to={link.to}
//                   className="hover:underline hover:text-white transition-colors"
//                 >
//                   {link.label}
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </motion.footer>
//   );
// };

// export default Footer;
