'use client';

export default function CTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main CTA card */}
        <div className="glass rounded-[3rem] p-12 md:p-16 text-center hover-glow">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Ready to <span className="text-gradient">Discover</span>?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform how you find and use skills with semantic search. 
            Join the future of skill discovery today.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="#installation"
              className="group px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-bold text-xl hover-glow transition-all duration-300 flex items-center gap-3"
            >
              Get Started Now
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="https://github.com/openclaw/skill-search"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 glass rounded-full text-white font-bold text-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-gradient mb-1">6,706</div>
              <div className="text-sm text-gray-400">Skills Indexed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-1">&lt;10ms</div>
              <div className="text-sm text-gray-400">Query Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-1">100%</div>
              <div className="text-sm text-gray-400">Local & Private</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-1">Open</div>
              <div className="text-sm text-gray-400">Source</div>
            </div>
          </div>
        </div>

        {/* Links section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <a
            href="https://github.com/openclaw/skill-search"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-2xl p-6 hover-glow transition-all duration-300 text-center group"
          >
            <svg className="w-12 h-12 mx-auto mb-4 text-indigo-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <h3 className="text-xl font-bold text-white mb-2">Documentation</h3>
            <p className="text-gray-400 text-sm">Complete API docs and guides</p>
          </a>

          <a
            href="https://github.com/openclaw/skills"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-2xl p-6 hover-glow transition-all duration-300 text-center group"
          >
            <svg className="w-12 h-12 mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <h3 className="text-xl font-bold text-white mb-2">Skill Registry</h3>
            <p className="text-gray-400 text-sm">Browse 6,700+ available skills</p>
          </a>

          <a
            href="https://discord.gg/openclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-2xl p-6 hover-glow transition-all duration-300 text-center group"
          >
            <svg className="w-12 h-12 mx-auto mb-4 text-pink-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            <h3 className="text-xl font-bold text-white mb-2">Community</h3>
            <p className="text-gray-400 text-sm">Join our Discord server</p>
          </a>
        </div>
      </div>
    </section>
  );
}
