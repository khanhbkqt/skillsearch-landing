'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Natural Language Input',
      description: 'User expresses their need in plain English: "I want to create a blog post"',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Intent Extraction',
      description: 'LLM-based system extracts search intent and converts to optimized query',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Embedding Generation',
      description: 'Query converted to 384-dimensional vector using all-MiniLM-L6-v2 model',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Semantic Search',
      description: 'Cosine similarity computed across 6,700+ skill embeddings in ~8ms',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Hybrid Ranking',
      description: 'Results ranked by semantic relevance, popularity, and user preferences',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
        </svg>
      ),
    },
    {
      number: '06',
      title: 'Smart Results',
      description: 'Top 3 most relevant skills delivered with confidence scores',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A glimpse into the architecture powering lightning-fast semantic search
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="mb-20">
          <div className="glass rounded-3xl p-12">
            <div className="relative">
              {/* Connection lines */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30"></div>
              
              {/* Steps */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="relative group"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="glass rounded-2xl p-6 h-full hover-glow transition-all duration-300">
                      {/* Number badge */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg group-hover:scale-110 transition-transform">
                        {step.number}
                      </div>
                      
                      {/* Icon */}
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 mt-4 group-hover:scale-110 transition-transform">
                        <div className="text-indigo-400">
                          {step.icon}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack */}
        <div className="glass rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center mb-12">
            Technology <span className="text-gradient">Stack</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">ML</span>
              </div>
              <h4 className="font-bold text-white mb-2">Embeddings</h4>
              <p className="text-sm text-gray-400">all-MiniLM-L6-v2<br/>384 dimensions</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">⚡</span>
              </div>
              <h4 className="font-bold text-white mb-2">Search</h4>
              <p className="text-sm text-gray-400">Cosine similarity<br/>O(n) complexity</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">🔌</span>
              </div>
              <h4 className="font-bold text-white mb-2">Integration</h4>
              <p className="text-sm text-gray-400">Gateway plugin<br/>REST API ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
