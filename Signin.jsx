import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUser,
  FaLock,
  FaGoogle,
  FaTwitter,
  FaGithub,
  FaEye,
  FaEyeSlash,
  FaEnvelopeOpenText,
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

export default function Login() {
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
        whileHover={{ y: -3 }}
        className="w-[420px] max-w-[95%] p-10 sm:p-10 px-6 rounded-[40px] shadow-xl bg-gradient-to-br from-[#c471f5] via-[#f7797d] to-[#4facfe] relative"
      >
        {/* Avatar */}
        <motion.div
          variants={item}
          initial={{ scale: 0, y: -30 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center shadow-xl"
        >
          <FaUser className="text-4xl sm:text-5xl text-[#8a2be2]" />
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={item}
          className="text-white text-2xl sm:text-3xl font-semibold text-center mt-10 mb-8"
        >
          Sign In
        </motion.h2>

        {/* Social Login */}
        <motion.div
          variants={item}
          className="flex justify-center gap-4 sm:gap-6 mb-7 flex-wrap"
        >
          {[FaGoogle, FaTwitter, FaGithub, FaEnvelopeOpenText].map(
            (Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 2 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center text-white text-xl sm:text-2xl border border-white/50 cursor-pointer shadow-lg"
              >
                <Icon />
              </motion.div>
            )
          )}
        </motion.div>

        {/* OR Divider */}
        <motion.div variants={item} className="flex items-center gap-4 mb-7">
          <div className="flex-1 h-[1px] bg-white/40" />
          <span className="text-white/85 font-semibold tracking-wider text-xs sm:text-sm">
            OR
          </span>
          <div className="flex-1 h-[1px] bg-white/40" />
        </motion.div>

        {/* Username */}
        <motion.div
          variants={item}
          className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-3xl px-5 py-3 mb-5 border border-white/40"
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
          className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-3xl px-5 py-3 mb-3 border border-white/40"
        >
          <FaLock className="text-white text-lg sm:text-xl" />
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className="bg-transparent outline-none text-white placeholder:text-white/70 w-full text-sm sm:text-base"
          />
          <span
            onClick={() => setShow(!show)}
            className="cursor-pointer text-white"
          >
            {show ? <FaEyeSlash /> : <FaEye />}
          </span>
        </motion.div>

        {/* Remember + Forgot */}
        <motion.div
          variants={item}
          className="flex justify-between items-center text-white text-xs sm:text-sm mb-6"
        >
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="cursor-pointer" />
            Remember me
          </label>

          <NavLink to="/forgot" className="hover:underline">
            Forgot password?
          </NavLink>
        </motion.div>

        {/* Login button */}
        <motion.button
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 220 }}
          className="w-full py-3 rounded-3xl bg-gradient-to-r from-[#4facfe] to-[#c471f5] font-semibold text-white text-base sm:text-lg shadow-md hover:opacity-90 transition"
        >
          LOGIN
        </motion.button>

        {/* Signup link */}
        <motion.p
          variants={item}
          className="text-center text-white mt-5 text-xs sm:text-sm"
        >
          Don’t have an account?{" "}
          <NavLink to="/signup" className="underline font-semibold">
            Sign up!
          </NavLink>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
