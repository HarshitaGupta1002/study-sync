export default function Features() {
  const features = [
    { title: "Connect via Interests", desc: "Match with peers based on skills like DSA, Web, AI." },
    { title: "Collaborative Dashboard", desc: "Track goals, daily coding streaks, and shared tasks." },
    { title: "Secure & Scalable", desc: "Built with MERN stack + JWT Auth for seamless experience." },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why StudyBuddy?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{f.title}</h3>
            <p className="text-gray-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
