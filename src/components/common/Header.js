"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import data from "../../data/common/header.json";
import Icon from "../ui/Icon";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1280) setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary-dark/95 text-white backdrop-blur-md">
      <div className="container-site flex h-[68px] items-center justify-between gap-4 md:h-[76px]">
        <Link href={data.logo.href} className="shrink-0" onClick={closeAll}>
          <Image
            src={data.logo.src}
            alt={data.logo.alt}
            width={data.logo.width}
            height={data.logo.height}
            className="h-9 w-auto md:h-10"
            loading="eager"
          />
        </Link>

        <nav aria-label="Main" className="hidden h-full xl:block">
          <ul className="flex h-full items-center gap-6 2xl:gap-8">
            {data.nav.map((item) => {
              const active = item.href === pathname;
              const hasChildren = Boolean(item.children?.length);
              const isOpen = openMenu === item.label;

              return (
                <li
                  key={item.label}
                  className="relative flex h-full items-center"
                  onMouseEnter={() => hasChildren && setOpenMenu(item.label)}
                  onMouseLeave={() => hasChildren && setOpenMenu(null)}
                >
                  {hasChildren ? (
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() => setOpenMenu(isOpen ? null : item.label)}
                      className="flex h-full items-center gap-1 text-[15px] font-medium text-white/90 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    >
                      {item.label}
                      <Icon
                        name="chevronDown"
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        strokeWidth={2.2}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative flex h-full items-center text-[15px] font-medium transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${
                        active ? "text-white" : "text-white/90"
                      }`}
                    >
                      {item.label}
                      {active && (
                        <span className="absolute inset-x-0 bottom-4 h-[2px] rounded-full bg-brand" />
                      )}
                    </Link>
                  )}

                  {hasChildren && (
                    <div
                      className={`absolute left-1/2 top-full w-64 -translate-x-1/2 pt-1 transition-all duration-200 ${
                        isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                      }`}
                    >
                      <ul className="overflow-hidden rounded-xl border border-white/10 bg-charcoal py-2 shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              onClick={closeAll}
                              className="block px-4 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-brand focus-visible:bg-white/5 focus-visible:text-brand focus-visible:outline-none"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <span className="hidden h-8 w-px bg-white/15 xl:block" aria-hidden="true" />
          <a
            href={data.phone.href}
            aria-label={data.phone.ariaLabel}
            className="flex items-center gap-2.5 rounded-lg p-2 text-[15px] font-semibold text-white transition-colors hover:text-brand"
          >
            <Icon name="phone" className="h-[18px] w-[18px] text-brand" strokeWidth={2} />
            <span className="hidden min-[1400px]:inline">{data.phone.display}</span>
          </a>
          <Link
            href={data.cta.href}
            className="group hidden items-center gap-2 rounded-lg bg-brand px-5 py-3 text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(232,93,38,0.35)] transition-all hover:-translate-y-0.5 hover:bg-brand-hover sm:inline-flex"
          >
            {data.cta.label}
            <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? data.menuLabels.close : data.menuLabels.open}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white transition-colors hover:border-brand hover:text-brand xl:hidden"
          >
            <Icon name={mobileOpen ? "close" : "menu"} className="h-6 w-6" strokeWidth={2} />
          </button>
        </div>
      </div>

      <div className="pointer-events-none h-px bg-linear-to-r from-transparent via-brand/60 to-transparent" />

      <div
        id="mobile-menu"
        className={`overflow-y-auto bg-primary-dark transition-[max-height] duration-300 xl:hidden ${
          mobileOpen ? "max-h-[calc(100svh-68px)]" : "max-h-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-site py-4">
          <ul className="divide-y divide-white/5">
            {data.nav.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const groupOpen = openMobileGroup === item.label;
              const active = item.href === pathname;

              return (
                <li key={item.label}>
                  {hasChildren ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={groupOpen}
                        onClick={() => setOpenMobileGroup(groupOpen ? null : item.label)}
                        className="flex w-full items-center justify-between py-3.5 text-base font-semibold text-white"
                      >
                        {item.label}
                        <Icon
                          name="chevronDown"
                          className={`h-4 w-4 text-white/60 transition-transform ${groupOpen ? "rotate-180" : ""}`}
                          strokeWidth={2.2}
                        />
                      </button>
                      {groupOpen && (
                        <ul className="mb-3 space-y-1 border-l-2 border-brand/60 pl-4">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                onClick={closeAll}
                                className="block py-2 text-[15px] text-white/75 hover:text-brand"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      aria-current={active ? "page" : undefined}
                      className={`block py-3.5 text-base font-semibold ${active ? "text-brand" : "text-white"}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-4 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">
            <a
              href={data.phone.href}
              className="flex items-center justify-center gap-2.5 rounded-lg border border-white/15 py-3.5 text-[15px] font-semibold"
            >
              <Icon name="phone" className="h-[18px] w-[18px] text-brand" strokeWidth={2} />
              {data.phone.display}
            </a>
            <Link
              href={data.cta.href}
              onClick={closeAll}
              className="flex items-center justify-center gap-2 rounded-lg bg-brand py-3.5 text-[15px] font-bold"
            >
              {data.cta.label}
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.2} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
