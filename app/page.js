
export default function AcquisitionSite() {
  const calendlyUrl = "#";
  const formAction = "#";
  const differentiators = [
    {
      title: "Performance-First",
      text: "Every decision is tied to measurable business outcomes — not vanity metrics.",
    },
    {
      title: "Full Transparency",
      text: "Real-time dashboards, plain-language reporting, and no hidden fees — ever.",
    },
    {
      title: "Senior-Led Teams",
      text: "Your account is managed by experienced strategists, not junior account managers.",
    },
    {
      title: "True Partnership",
      text: "We embed ourselves in your business and treat your growth as our own.",
    },
  ];

  const servicesTop = [
    {
      icon: "◎",
      title: "Paid Search Advertising",
      text: "Manage and optimize high-intent search campaigns across Google and Bing. Reach buyers at the exact moment they're ready to convert.",
      accent: "from-sky-500/20 to-blue-500/20 text-sky-300",
    },
    {
      icon: "⤴",
      title: "Social Media Ads",
      text: "Strategic campaigns on Meta, TikTok, LinkedIn, and emerging platforms — built to build audiences and drive measurable action.",
      accent: "from-violet-500/20 to-fuchsia-500/20 text-violet-300",
    },
    {
      icon: "▥",
      title: "Programmatic Display",
      text: "Targeted display advertising using advanced audience data and automation across the full open web at scale.",
      accent: "from-pink-500/20 to-rose-500/20 text-pink-300",
    },
  ];

  const servicesBottom = [
    {
      icon: "⌕",
      title: "SEO & Content Strategy",
      text: "Long-term organic growth through technical SEO, content strategy, and authority building that compounds over time.",
      accent: "from-emerald-500/20 to-green-500/20 text-emerald-300",
    },
    {
      icon: "◔",
      title: "Creative Strategy",
      text: "High-performing ad creatives built through rigorous testing, data-driven iteration, and platform-native design principles.",
      accent: "from-amber-500/20 to-orange-500/20 text-amber-300",
    },
    {
      title: "Not sure where to start?",
      text: "Book a free 30-minute strategy call. We'll map out the highest-impact opportunities for your specific business.",
      cta: "Book a free call",
      featured: true,
    },
  ];

  const founders = [
    {
      initials: "AT",
      name: "Aidan Than",
      role: "Co-Founder",
      text: "Aidan leads growth strategy and paid media operations. His background spans performance marketing for e-commerce, SaaS, and direct-to-consumer brands across Meta, Google, and programmatic ecosystems.",
      accent: "from-sky-500 to-cyan-400",
    },
    {
      initials: "KG",
      name: "Kavin Greaser",
      role: "Co-Founder",
      text: "Kavin oversees creative strategy and analytics infrastructure. He brings a data-first approach to every creative decision, bridging the gap between compelling storytelling and measurable business outcomes.",
      accent: "from-violet-500 to-fuchsia-500",
    },
  ];

  const values = [
    {
      title: "Relentlessly Results-Focused",
      text: "We measure our success by our clients' revenue growth. Every strategy, every campaign, every optimization — it's all in service of your bottom line.",
    },
    {
      title: "Speed as a Competitive Edge",
      text: "Markets move fast. We operate with urgency — fast launches, rapid testing, and weekly optimizations that keep you ahead of competitors.",
    },
    {
      title: "True Partnership",
      text: "We embed ourselves in your business. You'll have direct access to your team, transparent reporting, and a partner who treats your budget like their own.",
    },
    {
      title: "Excellence Over Volume",
      text: "We're selective about the clients we take on. When we say yes, you get our full attention — not a junior account manager and a templated playbook.",
    },
  ];

  const process = [
    {
      num: "01",
      title: "Strategy & Audit",
      text: "We analyze your business model, existing funnel, ad account history, and competitive landscape to identify the clearest path to growth.",
    },
    {
      num: "02",
      title: "Campaign Architecture",
      text: "We build structured campaigns designed for scale — the right channel mix, budget allocation, and account structure from day one.",
    },
    {
      num: "03",
      title: "Creative Development",
      text: "Develop high-performing ad creatives and messaging frameworks. Every asset is built with a testing hypothesis and clear success metric.",
    },
    {
      num: "04",
      title: "Launch & Optimization",
      text: "Campaigns go live with rigorous A/B testing, bid management, and weekly optimization cycles based on real performance data.",
    },
    {
      num: "05",
      title: "Scale",
      text: "Once profitable acquisition is proven, we systematically increase investment — expanding channels, audiences, and creative to compound your growth.",
    },
  ];

  const reportingBullets = [
    "Real-time data pulled directly from ad platforms",
    "Full-funnel attribution — from click to revenue",
    "Weekly performance summaries in plain language",
    "Direct access to your senior strategist at all times",
  ];

  const contactItems = [
    { label: "Email", value: "hello@acquisitionads.net", icon: "✉" },
    { label: "Phone", value: "949-922-3830", icon: "◔" },
    { label: "Office", value: "Irvine, California", icon: "⌖" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#090b12] text-white">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes floatSlow { 0%,100% { transform: translateY(0px);} 50% { transform: translateY(-8px);} }
        @keyframes pulseGlow { 0%,100% { opacity: .7;} 50% { opacity: 1;} }
        @keyframes shimmer { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
        .glass-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.03), 0 18px 40px rgba(0,0,0,0.22);
          backdrop-filter: blur(16px);
        }
        .noise-overlay::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.12;
          background-image: radial-gradient(rgba(255,255,255,0.85) 0.8px, transparent 0.8px);
          background-size: 22px 22px;
        }
        .float-slow { animation: floatSlow 8s ease-in-out infinite; }
        .pulse-glow { animation: pulseGlow 4s ease-in-out infinite; }
        .animated-gradient {
          background-size: 200% 200%;
          animation: shimmer 8s linear infinite alternate;
        }
      `}</style>

      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#090b12] noise-overlay">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(80,120,255,0.22),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(255,70,120,0.16),transparent_26%),radial-gradient(circle_at_48%_72%,rgba(130,70,255,0.12),transparent_28%)]" />
        <div className="absolute left-0 top-20 h-48 w-[420px] rounded-full bg-yellow-200/20 blur-3xl" />
        <div className="absolute left-6 top-36 h-2 w-[320px] rounded-full bg-yellow-100/80 blur-[2px]" />
        <div className="absolute left-24 top-20 h-28 w-2 rounded-full bg-yellow-100/80 blur-[2px]" />
        <div className="absolute left-0 top-24 h-2 w-[240px] -rotate-12 rounded-full bg-yellow-100/70 blur-[2px]" />
        <div className="absolute left-32 top-24 h-2 w-[140px] rotate-45 rounded-full bg-yellow-100/70 blur-[2px]" />
        <div className="absolute right-0 top-0 h-full w-[28%] bg-gradient-to-l from-red-500/20 via-fuchsia-500/8 to-transparent blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#090b12]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-sm font-bold">A</div>
            <span className="text-2xl font-semibold tracking-tight">Acquisition</span>
          </a>
          <nav className="hidden items-center gap-10 text-lg text-white/80 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-base font-semibold shadow-[0_0_30px_rgba(99,102,241,0.3)] transition hover:scale-[1.02]">Book a Call</a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-24">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] pulse-glow">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Now accepting new clients • Q2 2026</span>
            </div>
            <h1 className="mt-10 text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-[96px]">
              <span className="block text-white">Performance-Driven</span>
              <span className="animated-gradient block bg-gradient-to-r from-sky-400 via-blue-500 to-fuchsia-400 bg-clip-text text-transparent">Advertising.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-white/80 sm:text-2xl">
              We build scalable customer acquisition systems through paid media, data infrastructure, and creative strategy — for ambitious brands ready to grow.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-10 py-4 text-lg font-semibold shadow-[0_0_35px_rgba(99,102,241,0.35)] transition hover:scale-[1.02]">Book a Strategy Call →</a>
              <a href="#services" className="rounded-full border border-white/15 bg-white/[0.03] px-10 py-4 text-lg font-medium text-white/90 transition hover:bg-white/[0.06]">Explore Services</a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="text-center">
            <div className="text-sm uppercase tracking-[0.35em] text-white/55">Why Acquisition</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">What sets us apart</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {differentiators.map((item) => (
              <div key={item.title} className="glass-card rounded-[28px] p-8 float-slow">
                <div className="mb-6 h-1 w-10 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
                <h3 className="text-3xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-5 text-xl leading-9 text-white/72">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-white/55">What we do</div>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">Full-spectrum performance advertising services</h2>
            <p className="mt-6 text-2xl text-white/80">Every channel. Every platform. One unified strategy built to grow your revenue.</p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {servicesTop.map((service, idx) => (
              <div key={service.title} className={`glass-card rounded-[30px] p-8 ${idx === 1 ? 'lg:translate-y-3' : ''}`}>
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-2xl font-semibold ${service.accent}`}>{service.icon}</div>
                <h3 className="mt-7 text-3xl font-semibold leading-tight">{service.title}</h3>
                <p className="mt-5 text-lg leading-8 text-white/72">{service.text}</p>
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block text-base font-medium text-sky-300">Learn more →</a>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {servicesBottom.map((service) => (
              <div key={service.title} className={`rounded-[30px] border border-white/10 p-8 ${service.featured ? 'bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 shadow-[0_0_40px_rgba(128,90,213,0.08)]' : 'glass-card'}`}>
                {!service.featured && <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-2xl font-semibold ${service.accent}`}>{service.icon}</div>}
                <h3 className="mt-7 text-3xl font-semibold leading-tight">{service.title}</h3>
                <p className="mt-5 text-lg leading-8 text-white/72">{service.text}</p>
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block text-base font-medium text-sky-300">{service.cta || 'Learn more →'}</a>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-sm uppercase tracking-[0.35em] text-white/55">Company</div>
          <h2 className="mt-4 max-w-5xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
            We built Acquisition
            <br />
            <span className="animated-gradient bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">to fix advertising</span>
          </h2>
          <p className="mt-8 max-w-4xl text-xl leading-9 text-white/78">
            Most agencies optimize for retainers. We optimize for results. Acquisition was founded on the belief that great performance marketing is a partnership — one built on transparency, accountability, and relentless execution.
          </p>
          <div className="mt-12 max-w-5xl border-l border-white/20 pl-6 text-lg leading-8 text-white/65">
            “We started Acquisition after watching too many great brands get burned by agencies that prioritized their own growth over client results. Our model is simple: we succeed when you succeed. That alignment drives everything — how we hire, how we operate, and how we communicate.”
          </div>
          <div className="mt-6 flex items-center gap-4 text-white/70">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 font-semibold">AT</div>
            <div>
              <div className="font-semibold text-white">Aidan Than & Kavin Greaser</div>
              <div>Co-Founders, Acquisition</div>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-3xl font-semibold">The Founders</h3>
            <p className="mt-2 text-white/60">The people behind Acquisition.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {founders.map((founder) => (
                <div key={founder.name} className="glass-card rounded-[30px] p-7">
                  <div className="flex items-start gap-5">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${founder.accent} text-lg font-bold`}>{founder.initials}</div>
                    <div>
                      <div className="text-3xl font-semibold">{founder.name}</div>
                      <div className="text-lg text-white/60">{founder.role}</div>
                    </div>
                  </div>
                  <p className="mt-6 text-lg leading-8 text-white/74">{founder.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-3xl font-semibold">Our Values</h3>
            <p className="mt-2 text-white/60">The principles that guide every decision we make.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="glass-card rounded-[30px] p-7">
                  <div className="mb-5 h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20" />
                  <h4 className="text-2xl font-semibold">{value.title}</h4>
                  <p className="mt-4 text-lg leading-8 text-white/72">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-white/55">Our process</div>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">How we scale brands</h2>
            <p className="mt-4 text-2xl text-white/78">A proven five-step system built to create predictable, compounding growth.</p>
          </div>
          <div className="mt-14 space-y-6">
            {process.map((step, i) => (
              <div key={step.num} className="glass-card rounded-[30px] p-7 sm:p-10">
                <div className="flex gap-6">
                  <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${i < 2 ? 'from-blue-500 to-violet-500' : i < 4 ? 'from-violet-500 to-fuchsia-500' : 'from-fuchsia-500 to-pink-500'} text-xl font-bold`}>{step.num}</div>
                  <div>
                    <h3 className="text-3xl font-semibold">{step.title}</h3>
                    <p className="mt-3 max-w-4xl text-lg leading-8 text-white/72">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">Client reporting</div>
              <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">Live performance at your fingertips</h2>
              <p className="mt-8 max-w-3xl text-xl leading-9 text-white/78">Every client receives access to a private performance dashboard — populated in real-time directly from your advertising platforms. No spreadsheets. No guesswork.</p>
              <ul className="mt-8 space-y-4">
                {reportingBullets.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-lg text-white/78">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-[34px] p-5 shadow-[0_0_40px_rgba(0,0,0,0.25)]">
              <div className="rounded-[28px] border border-white/10 bg-[#0b0d15] p-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-5 text-white/80">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="ml-3 text-lg">Performance Dashboard · Live</span>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {[["Ad Spend", "This month"],["ROAS", "Return on ad spend"],["Conversions", "Last 30 days"],["Impressions", "Across all channels"]].map(([title, sub]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="text-base text-white/72">{title}</div>
                      <div className="mt-2 text-4xl font-semibold">—</div>
                      <div className="mt-1 text-sm text-white/45">{sub}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-lg font-semibold">Channel Performance</div>
                  <div className="mt-5 space-y-4">
                    {[["Google Ads", "78%", "from-sky-500 to-blue-500"],["Meta Ads", "66%", "from-violet-500 to-fuchsia-500"],["TikTok", "52%", "from-pink-500 to-rose-500"],["Programmatic", "40%", "from-emerald-400 to-green-500"]].map(([label, width, gradient]) => (
                      <div key={label}>
                        <div className="mb-2 flex justify-between text-base"><span>{label}</span><span className="text-white/45">{width}</span></div>
                        <div className="h-2.5 rounded-full bg-white/10"><div className={`h-2.5 rounded-full bg-gradient-to-r ${gradient}`} style={{ width }} /></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-white/55">Get in touch</div>
              <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">Let's talk about your growth</h2>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-white/78">Fill out the form and our team will get back to you within 24 hours. Or reach out directly through any of the channels below.</p>
              <div className="mt-10 space-y-6">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-lg text-white/80">{item.icon}</div>
                    <div>
                      <div className="text-xl font-semibold">{item.label}</div>
                      <div className="text-lg text-white/70">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card rounded-[32px] p-6 sm:p-8">
              <form action={formAction} method="POST" className="space-y-5">
                <input type="hidden" name="_subject" value="New Acquisition website lead" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-base text-white/72">Full Name</label>
                    <input name="fullName" type="text" placeholder="John Smith" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-violet-400/60" />
                  </div>
                  <div>
                    <label className="mb-2 block text-base text-white/72">Email</label>
                    <input name="email" type="email" placeholder="john@company.com" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-violet-400/60" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-base text-white/72">Monthly Ad Budget</label>
                  <select name="budget" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none focus:border-violet-400/60">
                    <option value="">Select your budget range</option>
                    <option>$5k - $10k</option>
                    <option>$10k - $25k</option>
                    <option>$25k - $50k</option>
                    <option>$50k+</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-base text-white/72">Tell us about your goals</label>
                  <textarea name="goals" rows={5} placeholder="What are you looking to achieve?" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-violet-400/60" />
                </div>
                <button type="submit" className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-4 text-lg font-semibold shadow-[0_0_35px_rgba(99,102,241,0.35)] transition hover:scale-[1.01]">✈ Send Message</button>
              </form>
              <p className="mt-4 text-sm text-white/45">Replace <span className="font-mono">YOUR_FORM_ID</span> near the top of this file with your real Formspree form ID.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}