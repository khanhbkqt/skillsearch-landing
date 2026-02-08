'use client';

import { useState } from 'react';

export default function Installation() {
  const [copied, setCopied] = useState(false);

  const installCommand = 'openclaw plugins install skill-search';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="installation" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Get <span className="text-gradient">Started</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Install the Skill Search plugin in seconds and start discovering skills smarter
          </p>
        </div>

        {/* Installation steps */}
        <div className="space-y-8 mb-16">
          {/* Step 1: Install */}
          <div className="glass rounded-3xl p-8 hover-glow">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Install the Plugin</h3>
                <p className="text-gray-400 mb-6">
                  Run this command in your terminal to install the Skill Search plugin:
                </p>
                <div className="relative">
                  <div className="code-block flex items-center justify-between">
                    <code className="text-indigo-300 flex-1">{installCommand}</code>
                    <button
                      onClick={copyToClipboard}
                      className="ml-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white text-sm font-semibold transition-all flex items-center gap-2"
                    >
                      {copied ? (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Copied!
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Configure */}
          <div className="glass rounded-3xl p-8 hover-glow">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Configure Sources (Optional)</h3>
                <p className="text-gray-400 mb-4">
                  The plugin works out of the box with all three sources enabled:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span><strong className="text-white">Local skills</strong> - Skills installed on your machine</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span><strong className="text-white">External registry</strong> - 6,700+ skills from GitHub</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span><strong className="text-white">User bookmarks</strong> - Your personally starred skills</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3: Use */}
          <div className="glass rounded-3xl p-8 hover-glow">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-600 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Start Searching!</h3>
                <p className="text-gray-400 mb-6">
                  Use natural language to find skills in your OpenClaw workflows:
                </p>
                <div className="space-y-3">
                  <div className="code-block">
                    <div className="text-gray-500 text-sm mb-1"># Search for skills</div>
                    <code className="text-indigo-300">openclaw search "I want to create a blog post"</code>
                  </div>
                  <div className="code-block">
                    <div className="text-gray-500 text-sm mb-1"># Or use in your agent workflows</div>
                    <code className="text-indigo-300">Agent: Find me a skill to analyze spreadsheets</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="glass rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Requirements
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <div className="font-semibold text-white mb-2">OpenClaw Gateway</div>
              <div className="text-sm text-gray-400">Version 2.0 or higher</div>
            </div>
            <div>
              <div className="font-semibold text-white mb-2">Node.js</div>
              <div className="text-sm text-gray-400">Version 18 or higher</div>
            </div>
            <div>
              <div className="font-semibold text-white mb-2">Storage</div>
              <div className="text-sm text-gray-400">~60MB for embeddings cache</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
