'use client';

export default function ProblemSolution() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The <span className="text-gradient">Skill Discovery</span> Problem
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            With thousands of skills available, finding the right one is like searching for a needle in a haystack.
          </p>
        </div>

        {/* Problem/Solution cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Problem */}
          <div className="glass rounded-3xl p-10 border-2 border-red-500/20 hover-glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-red-400">The Problem</h3>
            </div>
            
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span><strong className="text-white">Manual browsing</strong> through thousands of skills wastes time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span><strong className="text-white">Keyword matching</strong> misses semantically similar skills</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span><strong className="text-white">No context awareness</strong> leads to irrelevant results</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span><strong className="text-white">Poor ranking</strong> buries the best skills</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span><strong className="text-white">Cloud dependency</strong> raises privacy concerns</span>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="glass rounded-3xl p-10 border-2 border-green-500/20 hover-glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-green-400">Our Solution</h3>
            </div>
            
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span><strong className="text-white">Semantic understanding</strong> finds skills by meaning, not just keywords</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span><strong className="text-white">Hybrid ranking</strong> combines relevance, popularity & personalization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span><strong className="text-white">Lightning fast</strong> with &lt;10ms average query time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span><strong className="text-white">100% local</strong> execution for complete privacy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span><strong className="text-white">Intelligent caching</strong> learns from your preferences</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-2xl text-gray-400 mb-6">
            See the difference for yourself
          </p>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold text-lg hover-glow transition-all duration-300"
          >
            Try the Live Demo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
