import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import {
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
} from "@/components/ui/SocialIcons";
import { Logo } from "@/components/ui/Logo";

type FooterDict = {
  tagline: string;
  aboutOurWorkTitle: string;
  followUsTitle: string;
  generalInfo: string;
  customerSupport: string;
  phone: string;
};

type NavDict = {
  whatWeDo: string;
  technologies: string;
  aboutUs: string;
};

export function Footer({
  locale,
  dict,
  navDict,
}: {
  locale: string;
  dict: FooterDict;
  navDict: NavDict;
}) {
  return (
    <footer className="border-t border-border bg-[var(--c-bg)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 py-14 sm:py-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-body">
            {dict.tagline}
          </p>
          <div className="mt-6 flex gap-3">
            <SocialIcon href="https://www.linkedin.com" label="LinkedIn">
              <LinkedinIcon className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="https://www.facebook.com" label="Facebook">
              <FacebookIcon className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com" label="Instagram">
              <InstagramIcon className="h-4 w-4" />
            </SocialIcon>
          </div>
        </div>

        <FooterCol title={dict.aboutOurWorkTitle}>
          <FooterLink href={`/${locale}/what-we-do`}>{navDict.whatWeDo}</FooterLink>
          <FooterLink href={`/${locale}/technologies`}>
            {navDict.technologies}
          </FooterLink>
          <FooterLink href={`/${locale}/about-us`}>{navDict.aboutUs}</FooterLink>
        </FooterCol>

        <FooterCol title="Resources">
          <FooterLink href={`/${locale}/team`}>Team</FooterLink>
          <FooterLink href="mailto:info@infostream.co.me">Contact</FooterLink>
        </FooterCol>

        <FooterCol title={dict.followUsTitle}>
          <ContactRow
            icon={<Mail className="h-4 w-4" />}
            label={dict.generalInfo}
            value="info@infostream.co.me"
            href="mailto:info@infostream.co.me"
          />
          <ContactRow
            icon={<Mail className="h-4 w-4" />}
            label={dict.customerSupport}
            value="servicedesk@infostream.co.me"
            href="mailto:servicedesk@infostream.co.me"
          />
          <ContactRow
            icon={<Phone className="h-4 w-4" />}
            label={dict.phone}
            value="+382 (0) 20 664 808"
            href="tel:+38220664808"
          />
        </FooterCol>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 sm:px-6 py-6 text-xs text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Infostream IT Solutions</span>
          <span>Built in Montenegro · ISO 27001 · ISO 9001</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-heading">
        {title}
      </h3>
      <ul className="space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link href={href} className="text-body transition-colors hover:text-heading">
        {children}
      </Link>
    </li>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-0.5 text-brand-violet">{icon}</span>
      <span>
        <span className="block text-[11px] uppercase tracking-wider text-muted">
          {label}
        </span>
        <a href={href} className="text-body transition-colors hover:text-heading">
          {value}
        </a>
      </span>
    </li>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-body transition-all hover:-translate-y-0.5 hover:border-brand-violet hover:text-brand-violet"
    >
      {children}
    </a>
  );
}
