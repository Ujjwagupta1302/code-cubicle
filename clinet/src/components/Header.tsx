"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import img from "/public/ai.webp"
import Link from "next/link";
import SignupPage from "@/app/signup/page";
import LoginPage from "@/app/login/page";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
     
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
    >
      <Menu setActive={setActive}>
        <Link href="#problem">
        <MenuItem setActive={setActive} active={active} item="Problem Statment">
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div> */}
        </MenuItem>
        </Link>
        <Link href="#features">
        <MenuItem setActive={setActive} active={active} item="Features">
          {/* <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
            title="Algochurn"
            href="https://algochurn.com"
            src="/public/ai.webp"
            description="Prepare for tech interviews like never before."
            />
            <ProductItem
            title="Tailwind Master Kit"
            href="https://tailwindmasterkit.com"
            src="/public/ai.webp"
            description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
            title="Moonbeam"
            href="https://gomoonbeam.com"
            src="/public/ai.webp"
            description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
            title="Rogue"
            href="https://userogue.com"
            src="/public/ai.webp"
            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div> */}
        </MenuItem>
          </Link>
        <Link href="/signup">
        <MenuItem setActive={setActive} active={active} item="Signup">
       
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div> */}
        </MenuItem>
        </Link>
          <Link href ="/login">
        <MenuItem setActive={setActive} active={active} item="Login">
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div> */}
        </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
