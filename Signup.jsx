import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaTwitter,
  FaGithub,
  FaEnvelopeOpenText
} from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

export default function Signup() {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex justify-center w-screen min-h-screen px-4 pt-14 sm:pt-0 items-start sm:items-center"
    >
      <motion.div
        variants={item}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ y: -4 }}
        className="w-[420px] max-w-[95%] p-10 sm:p-10 px-6 rounded-[40px] shadow-xl bg-linear-to-br from-[#c471f5] via-[#f7797d] to-[#4facfe] relative"
      >
        {/* Avatar */}
        <motion.div
          variants={item}
          initial={{ scale: 0, y: -40 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          whileHover={{ scale: 1.1, rotate: 3 }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center shadow-xl"
        >
          <FaUser className="text-4xl sm:text-5xl text-[#c471f5]" />
        </motion.div>

        <motion.h2
          variants={item}
          className="text-white text-2xl sm:text-3xl font-semibold text-center mt-10 mb-8"
        >
          Sign Up
        </motion.h2>

        {/* Social Icons */}
        <motion.div
          variants={item}
          className="mt-2 flex items-center justify-center gap-4 sm:gap-6 flex-wrap"
        >
          {[FaGoogle, FaTwitter, FaGithub, FaEnvelopeOpenText].map(
            (Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/50 flex items-center justify-center bg-white/10 backdrop-blur-sm cursor-pointer shadow-sm"
              >
                <Icon className="text-white text-lg sm:text-xl" />
              </motion.div>
            )
          )}
        </motion.div>

        {/* OR Divider */}
        <motion.div variants={item} className="flex items-center my-6">
          <span className="flex-1 h-[1px] bg-white/40"></span>
          <span className="px-3 text-white/80 text-xs sm:text-sm font-semibold">
            OR
          </span>
          <span className="flex-1 h-[1px] bg-white/40"></span>
        </motion.div>

        {/* Email */}
        <motion.div
          variants={item}
          className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-3xl px-5 py-3 mb-4 border border-white/40"
        >
          <FaEnvelope className="text-white text-lg sm:text-xl" />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent outline-none text-white placeholder:text-white/70 w-full text-sm sm:text-base"
          />
        </motion.div>

        {/* Username */}
        <motion.div
          variants={item}
          className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-3xl px-5 py-3 mb-4 border border-white/40"
        >
          <FaUser className="text-white text-lg sm:text-xl" />
          <input
            type="text"
            placeholder="Username"
            className="bg-transparent outline-none text-white placeholder:text-white/70 w-full text-sm sm:text-base"
          />
        </motion.div>

        {/* Password */}
        <motion.div
          variants={item}
          className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-3xl px-5 py-3 mb-4 border border-white/40"
        >
          <FaLock className="text-white text-lg sm:text-xl" />
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className="bg-transparent outline-none text-white placeholder:text-white/70 w-full text-sm sm:text-base"
          />
          <motion.span
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShow(!show)}
            className="cursor-pointer text-white"
          >
            {show ? <FaEyeSlash /> : <FaEye />}
          </motion.span>
        </motion.div>

        {/* Signup btn */}
        <motion.button
          variants={item}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 240 }}
          className="w-full py-3 rounded-3xl bg-gradient-to-r from-[#4facfe] to-[#c471f5] font-semibold text-white text-base sm:text-lg shadow-md hover:opacity-90 transition"
        >
          SIGN UP
        </motion.button>

        {/* Login link */}
        <motion.p
          variants={item}
          className="text-center text-white mt-5 text-xs sm:text-sm"
        >
          Already have an account?{" "}
          <NavLink to="/" className="underline font-semibold">
            Login!
          </NavLink>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
