import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

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
          className="text-white text-2xl sm:text-3xl font-semibold text-center mt-10 mb-6"
        >
          Forgot Password
        </motion.h2>

        <motion.p
          variants={item}
          className="text-center text-white/90 text-xs sm:text-sm mb-6 leading-relaxed"
        >
          Don’t worry! Enter your registered email below. <br />
          We will send a reset link to recover your account.
        </motion.p>

        {/* Email Input */}
        <motion.div
          variants={item}
          className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-3xl px-5 py-3 mb-6 border border-white/40"
        >
          <FaEnvelope className="text-white text-lg sm:text-xl" />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent outline-none text-white placeholder:text-white/70 w-full text-sm sm:text-base"
          />
        </motion.div>

        {/* Reset button */}
        <motion.button
          variants={item}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 240 }}
          className="w-full py-3 rounded-3xl bg-gradient-to-r from-[#4facfe] to-[#c471f5] font-semibold text-white text-base sm:text-lg shadow-md hover:opacity-90 transition"
        >
          RESET PASSWORD
        </motion.button>

        {/* Back to login */}
        <motion.p
          variants={item}
          className="text-center text-white mt-6 text-xs sm:text-sm"
        >
          Remember your password?{" "}
          <NavLink to="/" className="underline font-semibold">
            Back to Login
          </NavLink>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
