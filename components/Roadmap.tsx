'use client';

export default function Roadmap() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      status: 'Completed',
      timeline: 'Q4 2025',
      items: [
        'Semantic search POC with 6,700+ skills',
        'Intent extraction system',
        'Hybrid ranking algorithm',
        'Performance optimization (<10ms)',
        'Local execution with embeddings cache',
      ],
      color: 'from-green-500 to-emerald-500',
      statusColor: 'bg-green-500',
    },
    {
      phase: 'Phase 2',
      title: 'LLM Integration',
      status: 'In Progress',
      timeline: 'Q1 2026',
      items: [
        'Replace pattern matching with LLM-based intent extraction',
        'Add conversation context awareness',
        'Multi-intent request support',
        'Intelligent clarification dialog',
        'Enhanced natural language understanding',
      ],
      color: 'from-blue-500 to-cyan-500',
      statusColor: 'bg-blue-500',
    },
    {
      phase: 'Phase 3',
      title: 'Enhanced Search',
      status: 'Planned',
      timeline: 'Q2 2026',
      items: [
        'Persistent embeddings cache to disk',
        'Category and tag filtering',
        'Hybrid semantic + keyword search',
        'User preference boosting',
        'Skill popularity metrics',
      ],
      color: 'from-purple-500 to-pink-500',
      statusColor: 'bg-purple-500',
    },
    {
      phase: 'Phase 4',
      title: 'Scale & Production',
      status: 'Planned',
      timeline: 'Q3 2026',
      items: [
        'Approximate NN for >100K skills (FAISS/HNSW)',
        'REST API endpoints',
        'WebSocket real-time search',
        'A/B testing framework',
        'Analytics and insights dashboard',
      ],
      color: 'from-pink-500 to-red-500',
      statusColor: 'bg-pink-500',
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Product <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From proof of concept to production-grade semantic search platform
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 via-purple-500 to-pink-500 opacity-30"></div>

          {/* Phase cards */}
          <div className="space-y-12">
            {phases.map((phase, idx) => (
              <div
                key={idx}
                className={`relative ${idx % 2 === 0 ? 'lg:pr-[50%]' : 'lg:pl-[50%]'}`}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 border-4 border-black shadow-lg"></div>

                {/* Card */}
                <div className="glass rounded-3xl p-8 hover-glow transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-sm text-gray-500 mb-2">{phase.phase}</div>
                      <h3 className="text-3xl font-bold text-white mb-2">{phase.title}</h3>
                      <div className="text-sm text-gray-400">{phase.timeline}</div>
                    </div>
                    <div className={`px-4 py-2 ${phase.statusColor} bg-opacity-20 rounded-full`}>
                      <span className={`text-sm font-semibold`} style={{ color: phase.statusColor.replace('bg-', '') }}>
                        {phase.status}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-6">
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${phase.color} transition-all duration-1000`}
                        style={{
                          width: phase.status === 'Completed' ? '100%' : phase.status === 'In Progress' ? '40%' : '0%'
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Items */}
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-gray-300">
                        <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Want to contribute or suggest features?{' '}
            <a href="https://github.com/openclaw/skill-search" className="text-indigo-400 hover:text-indigo-300 transition-colors font-semibold">
              Join us on GitHub →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
