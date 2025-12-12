import React from "react";
import { BiPhone } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="mb-4">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

      <div className="space-y-2">
        <div className="flex items-center gap-3 text-sm text-zinc-600 hover:text-black transition cursor-pointer">
          <MdMail size={22} />
          <span>info@elevare.lk</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-zinc-600 hover:text-black transition cursor-pointer">
          <BiPhone size={22} />
          <span>+94 11 220 122</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-zinc-600 hover:text-black transition cursor-pointer">
          <CgWebsite size={22} />
          <Link to="/" className="hover:underline">
            www.elevare.lk
          </Link>
        </div>
      </div>
    </section>
  );
}
