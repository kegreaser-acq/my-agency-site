export default function Home() {
  const calendlyUrl = "#"; // replace later
  const formAction = "#"; // replace later

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

  const services = [
    {
      title: "Paid Search",
      text: "High-intent campaigns across Google and Bing.",
    },
    {
      title: "Social Ads",
      text: "Meta, TikTok, LinkedIn campaigns that convert.",
    },
    {
      title: "SEO",
      text: "Long-term organic growth and authority building.",
    },
  ];

  return (
    <div style={{ background: "#090b12", color: "white", minHeight: "100vh" }}>
      
      {/* HERO */}
      <section style={{ textAlign: "center", padding: "100px 20px" }}>
        <h1 style={{ fontSize: "60px", fontWeight: "700" }}>
          Performance-Driven Advertising
        </h1>
        <p style={{ marginTop: "20px", fontSize: "20px", maxWidth: "600px", marginInline: "auto" }}>
          We build scalable customer acquisition systems for brands ready to grow.
        </p>

        <button style={{
          marginTop: "30px",
          padding: "15px 30px",
          fontSize: "18px",
          background: "white",
          color: "black",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          Book a Strategy Call 🚀
        </button>
      </section>

      {/* DIFFERENTIATORS */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "40px" }}>What sets us apart</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "40px"
        }}>
          {differentiators.map((item) => (
            <div key={item.title} style={{
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "20px",
              borderRadius: "10px"
            }}>
              <h3>{item.title}</h3>
              <p style={{ marginTop: "10px", opacity: 0.7 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "40px" }}>Services</h2>

        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "40px"
        }}>
          {services.map((service) => (
            <div key={service.title} style={{
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "20px",
              borderRadius: "10px",
              width: "250px"
            }}>
              <h3>{service.title}</h3>
              <p style={{ marginTop: "10px", opacity: 0.7 }}>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "40px" }}>About Us</h2>
        <p style={{ marginTop: "20px", maxWidth: "600px", marginInline: "auto", opacity: 0.7 }}>
          We built Acquisition to fix advertising. Most agencies optimize for retainers — we optimize for results.
        </p>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "40px" }}>Contact</h2>

        <form action={formAction} method="POST" style={{ marginTop: "30px" }}>
          <input placeholder="Name" style={inputStyle} />
          <input placeholder="Email" style={inputStyle} />
          <textarea placeholder="Your goals" style={{ ...inputStyle, height: "100px" }} />

          <button style={{
            marginTop: "20px",
            padding: "15px 30px",
            background: "white",
            color: "black",
            border: "none",
            borderRadius: "8px"
          }}>
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  maxWidth: "400px",
  margin: "10px auto",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "transparent",
  color: "white"
};