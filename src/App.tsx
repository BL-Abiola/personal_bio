/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Twitter, 
  Instagram,
  User,
  MessageCircle,
  ExternalLink
} from "lucide-react";

// --- Types & Data ---

interface SocialLink {
  id: string;
  title: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

/**
 * Updated links to only keep Instagram and Twitter as requested.
 * HOW TO UPDATE YOUR LINKS:
 * 1. Modify the SOCIAL_LINKS array below.
 * 2. title: The text shown on the button.
 * 3. url: The link destination (social profile, portfolio, etc).
 * 4. icon: The Lucide-React icon to display.
 * 5. color: The background color class for the icon box.
 */
const SOCIAL_LINKS: SocialLink[] = [
  { 
    id: "instagram", 
    title: "Instagram", 
    url: "https://www.instagram.com/biola_009?igsh=YzljYTk1ODg3Zg==", 
    icon: <Instagram className="w-5 h-5" />, 
    color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500" 
  },
];

const LinkButton = ({ link, index }: { link: SocialLink; index: number }) => {
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index + 0.5, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative w-full flex items-center justify-between p-5 glass-card rounded-3xl glow-hover overflow-hidden transition-all"
    >
      <div className="flex items-center gap-4 z-10">
        <div className={`p-3 rounded-2xl ${link.color} text-white shadow-lg`}>
          {link.icon}
        </div>
        <span className="font-semibold text-lg text-white/90 group-hover:text-white transition-colors">
          {link.title}
        </span>
      </div>
      <div className="z-10 text-white/20 group-hover:text-accent transition-all group-hover:translate-x-1">
        <ExternalLink className="w-5 h-5" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen w-full max-w-md mx-auto px-6 py-12 flex flex-col items-center">
      
      {/* Background Glows */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-[5%] right-[-5%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      {/* --- Profile Header --- */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center text-center mb-12"
      >
        <div className="relative mb-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="w-32 h-32 rounded-full p-1.5 bg-gradient-to-tr from-accent to-blue-400 shadow-2xl shadow-accent/20"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-charcoal border-4 border-charcoal">
              <img 
                src="https://picsum.photos/seed/biola_vibes/400/400" 
                alt="Biola"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          {/* Casual Status Indicator */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-1 right-1 w-7 h-7 bg-accent border-4 border-charcoal rounded-full flex items-center justify-center"
          >
             <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-4"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Say Hi!
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl font-extrabold tracking-tight mb-3 text-white"
        >
          Biola
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white/40 text-lg leading-relaxed max-w-[260px] font-medium"
        >
          Just living my best life. Catch me on the chat! ✨
        </motion.p>
      </motion.header>

      {/* --- Links Stack --- */}
      <div className="w-full space-y-4 mb-20">
        {SOCIAL_LINKS.map((link, index) => (
          <LinkButton key={link.id} link={link} index={index} />
        ))}
      </div>

      {/* --- Footer --- */}
      <footer className="mt-auto text-center pb-8">
        <p className="text-white/10 text-[10px] font-bold uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} Biola • Stay Real
        </p>
      </footer>
    </div>
  );
}

