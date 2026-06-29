import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Bike, MapPinned, MessageCircle, Phone } from 'lucide-react';

const actions = [
  {
    key: 'maps',
    href: 'https://www.google.com/maps/place/MR+Grand+Men%E2%80%99s+Stay+PG/@17.4202267,78.380742,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb959c3803809d:0x595a43bfe0441ac4!8m2!3d17.4202267!4d78.380742!16s%2Fg%2F11lyxwnyn_?entry=ttu',
    icon: MapPinned,
    accent: '#e50914',
  },
  {
    key: 'rapido',
    href: 'https://www.rapido.bike/Home',
    icon: Bike,
    accent: '#c9a84c',
  },
  {
    key: 'call',
    href: 'tel:+919652282229',
    icon: Phone,
    accent: '#f2d892',
  },
  {
    key: 'whatsapp',
    href: 'https://wa.me/919652282229?text=Hi%20I%20would%20like%20to%20visit%20MR%20Grand%20PG%20today.',
    icon: MessageCircle,
    accent: '#25d366',
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function GettingHereEasy() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="getting-easy-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      aria-labelledby="getting-easy-title"
    >
      <style>{`
        .getting-easy-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 5.75rem 4%;
          background:
            radial-gradient(circle at 18% 16%, rgba(229, 9, 20, 0.18), transparent 25rem),
            radial-gradient(circle at 84% 30%, rgba(201, 168, 76, 0.14), transparent 24rem),
            linear-gradient(180deg, #050505 0%, #0b0909 52%, #050505 100%);
        }

        .getting-easy-section::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            linear-gradient(90deg, rgba(255, 255, 255, 0.026) 1px, transparent 1px),
            linear-gradient(rgba(255, 255, 255, 0.022) 1px, transparent 1px);
          background-size: 70px 70px;
          mask-image: linear-gradient(to bottom, transparent, #000 18%, #000 82%, transparent);
        }

        .getting-easy-section::after {
          content: '';
          position: absolute;
          z-index: -1;
          width: 32rem;
          height: 32rem;
          right: -13rem;
          top: 12%;
          border-radius: 999px;
          background: rgba(229, 9, 20, 0.24);
          filter: blur(6rem);
          opacity: 0.6;
          pointer-events: none;
        }

        .getting-easy-inner {
          width: min(100%, 1180px);
          margin: 0 auto;
        }

        .getting-easy-header {
          max-width: 760px;
          margin-bottom: 2rem;
        }

        .getting-easy-kicker {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          padding: 0.56rem 0.86rem;
          border: 1px solid rgba(201, 168, 76, 0.42);
          border-radius: 999px;
          color: #f2d892;
          background: rgba(201, 168, 76, 0.1);
          -webkit-backdrop-filter: blur(18px);
          backdrop-filter: blur(18px);
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .getting-easy-title {
          margin: 0;
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.15rem, 4.5vw, 4.25rem);
          font-weight: 850;
          letter-spacing: 0;
          line-height: 1;
        }

        .getting-easy-subtitle {
          max-width: 620px;
          margin: 1rem 0 0;
          color: #c8c1b2;
          font-size: clamp(1rem, 1.45vw, 1.15rem);
          line-height: 1.7;
        }

        .getting-easy-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1rem;
        }

        .getting-easy-card {
          position: relative;
          display: flex;
          min-height: 13.5rem;
          overflow: hidden;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.15rem;
          border: 1px solid color-mix(in srgb, var(--easy-accent) 36%, rgba(255, 255, 255, 0.11));
          border-radius: 8px;
          color: #fff;
          background:
            radial-gradient(circle at 22% 0%, color-mix(in srgb, var(--easy-accent) 20%, transparent), transparent 13rem),
            linear-gradient(155deg, rgba(255, 255, 255, 0.105), rgba(255, 255, 255, 0.035) 58%, rgba(255, 255, 255, 0.06));
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.13);
          -webkit-backdrop-filter: blur(24px);
          backdrop-filter: blur(24px);
          text-decoration: none;
          transform-origin: center;
          transition:
            border-color 320ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 320ms cubic-bezier(0.22, 1, 0.36, 1),
            background 320ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .getting-easy-card::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0;
          pointer-events: none;
          transform: translateX(-32%);
          background: linear-gradient(115deg, transparent 8%, rgba(255, 255, 255, 0.12) 26%, transparent 46%);
          transition: opacity 280ms cubic-bezier(0.22, 1, 0.36, 1), transform 620ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .getting-easy-card:hover,
        .getting-easy-card:focus-visible {
          border-color: color-mix(in srgb, var(--easy-accent) 74%, #fff);
          box-shadow:
            0 34px 90px rgba(0, 0, 0, 0.46),
            0 0 46px color-mix(in srgb, var(--easy-accent) 20%, transparent),
            inset 0 1px 0 rgba(255, 255, 255, 0.18);
          outline: none;
        }

        .getting-easy-card:hover::before,
        .getting-easy-card:focus-visible::before {
          opacity: 1;
          transform: translateX(30%);
        }

        .getting-easy-card-top {
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .getting-easy-icon {
          display: grid;
          place-items: center;
          width: 3.3rem;
          height: 3.3rem;
          border: 1px solid color-mix(in srgb, var(--easy-accent) 50%, rgba(255, 255, 255, 0.12));
          border-radius: 8px;
          color: color-mix(in srgb, var(--easy-accent) 86%, #fff);
          background: color-mix(in srgb, var(--easy-accent) 16%, rgba(255, 255, 255, 0.05));
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.14);
          transition:
            transform 300ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 300ms cubic-bezier(0.22, 1, 0.36, 1),
            background 300ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .getting-easy-card:hover .getting-easy-icon,
        .getting-easy-card:focus-visible .getting-easy-icon {
          transform: scale(1.1) rotate(-3deg);
          background: color-mix(in srgb, var(--easy-accent) 24%, rgba(255, 255, 255, 0.06));
          box-shadow:
            0 0 28px color-mix(in srgb, var(--easy-accent) 22%, transparent),
            inset 0 1px 0 rgba(255, 255, 255, 0.18);
        }

        .getting-easy-arrow {
          color: rgba(255, 255, 255, 0.42);
          transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1), color 300ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .getting-easy-card:hover .getting-easy-arrow,
        .getting-easy-card:focus-visible .getting-easy-arrow {
          color: color-mix(in srgb, var(--easy-accent) 82%, #fff);
          transform: translate(3px, -3px);
        }

        .getting-easy-copy {
          position: relative;
        }

        .getting-easy-copy h3 {
          margin: 0 0 0.5rem;
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: 0;
        }

        .getting-easy-copy p {
          margin: 0;
          color: #bdb5a8;
          font-size: 0.93rem;
          line-height: 1.55;
        }

        @media (max-width: 1024px) {
          .getting-easy-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .getting-easy-section {
            padding: 4.35rem 4%;
          }

          .getting-easy-grid {
            grid-template-columns: 1fr;
          }

          .getting-easy-card {
            min-height: 11.75rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .getting-easy-card,
          .getting-easy-card::before,
          .getting-easy-icon,
          .getting-easy-arrow {
            transition: none;
          }
        }
      `}</style>

      <div className="getting-easy-inner">
        <motion.div className="getting-easy-header" variants={itemVariants}>
          <span className="getting-easy-kicker">{t('gettingHere.kicker')}</span>
          <h2 className="getting-easy-title" id="getting-easy-title">
            {t('gettingHere.title')}
          </h2>
          <p className="getting-easy-subtitle">
            {t('gettingHere.subtitle')}
          </p>
        </motion.div>

        <motion.div className="getting-easy-grid" variants={sectionVariants}>
          {actions.map((action) => {
            const Icon = action.icon;
            const isPhone = action.href.startsWith('tel:');
            const label = t(`gettingHere.actions.${action.key}.label`);
            const description = t(`gettingHere.actions.${action.key}.description`);

            return (
              <motion.a
                className="getting-easy-card"
                href={action.href}
                key={action.key}
                rel={isPhone ? undefined : 'noopener noreferrer'}
                target={isPhone ? undefined : '_blank'}
                variants={itemVariants}
                whileHover={{ y: -9, scale: 1.01 }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                style={{ '--easy-accent': action.accent }}
                aria-label={`${label} for MR Grand Men's Stay PG`}
              >
                <span className="getting-easy-card-top">
                  <span className="getting-easy-icon">
                    <Icon size={25} strokeWidth={2} />
                  </span>
                  <ArrowUpRight className="getting-easy-arrow" size={20} />
                </span>
                <span className="getting-easy-copy">
                  <h3>{label}</h3>
                  <p>{description}</p>
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
