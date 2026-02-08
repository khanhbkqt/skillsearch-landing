'use client';

import { useState } from 'react';

interface SearchResult {
  id: string;
  name: string;
  description: string;
  score: number;
}

const mockResults: Record<string, SearchResult[]> = {
  'blog': [
    { id: 'tomstools11/blog-writer', name: 'Blog Writer', description: 'Create engaging blog posts and articles with AI assistance', score: 0.89 },
    { id: 'shensi8312/blogburst', name: 'BlogBurst - AI Content Repurposing', description: 'Turn any article into social media posts', score: 0.82 },
    { id: 'azade-c/bearblog', name: 'Bear Blog Skill', description: 'Create, edit, and manage posts on Bear Blog', score: 0.78 },
  ],
  'video': [
    { id: 'marketingpro/promo-video', name: 'Marketing Promo Video', description: 'Create professional promotional videos', score: 0.85 },
    { id: 'videocreator/youtube-automation', name: 'YouTube Automation', description: 'Automate video creation and publishing', score: 0.79 },
    { id: 'clipmaster/video-editor', name: 'Video Editor Pro', description: 'Edit and enhance videos with AI', score: 0.73 },
  ],
  'spreadsheet': [
    { id: 'datatools/xlsx-manipulation', name: 'XLSX Manipulation Skill', description: 'Analyze and manipulate Excel spreadsheets', score: 0.92 },
    { id: 'sheetmaster/google-sheets', name: 'Google Sheets Automation', description: 'Automate Google Sheets operations', score: 0.84 },
    { id: 'csvpro/csv-analyzer', name: 'CSV Data Analyzer', description: 'Advanced CSV file analysis and transformation', score: 0.77 },
  ],
};

export default function LiveDemo() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTime, setSearchTime] = useState(0);

  const handleSearch = () => {
    if (!query.trim()) return;

    setIsSearching(true);
    const startTime = performance.now();

    // Simulate search delay
    setTimeout(() => {
      const queryLower = query.toLowerCase();
      let foundResults: SearchResult[] = [];

      if (queryLower.includes('blog') || queryLower.includes('write') || queryLower.includes('article')) {
        foundResults = mockResults.blog;
      } else if (queryLower.includes('video') || queryLower.includes('youtube') || queryLower.includes('promo')) {
        foundResults = mockResults.video;
      } else if (queryLower.includes('spreadsheet') || queryLower.includes('excel') || queryLower.includes('xlsx') || queryLower.includes('data')) {
        foundResults = mockResults.spreadsheet;
      } else {
        // Default to blog results for any other query
        foundResults = mockResults.blog;
      }

      const endTime = performance.now();
      setSearchTime(Math.round(endTime - startTime));
      setResults(foundResults);
      setIsSearching(false);
    }, 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const exampleQueries = [
    'I want to create a blog post',
    'Help me make a promotional video',
    'Analyze this spreadsheet',
  ];

  return (
    <section id="demo" className="relative py-32 px-6 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Try It <span className="text-gradient">Live</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Search through 6,700+ skills using natural language. Watch semantic search in action.
          </p>
        </div>

        {/* Search interface */}
        <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto mb-12">
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask in natural language: 'I want to create a blog post about AI'"
              className="flex-1 px-6 py-4 bg-zinc-900/50 border border-indigo-500/30 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-all"
            />
            <button
              onClick={handleSearch}
              disabled={isSearching}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white font-semibold hover-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSearching ? (
                <svg className="w-6 h-6 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              ) : (
                'Search'
              )}
            </button>
          </div>

          {/* Example queries */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-gray-400">Try:</span>
            {exampleQueries.map((example, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setQuery(example);
                  setTimeout(() => handleSearch(), 100);
                }}
                className="text-sm px-3 py-1 bg-indigo-500/20 hover:bg-indigo-500/30 rounded-full text-indigo-300 transition-all"
              >
                {example}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="max-w-4xl mx-auto animate-slide-up">
            {/* Search stats */}
            <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
              <span>Found {results.length} relevant skills</span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Query time: {searchTime}ms
              </span>
            </div>

            {/* Result cards */}
            <div className="space-y-4">
              {results.map((result, idx) => (
                <div
                  key={result.id}
                  className="glass rounded-2xl p-6 hover-glow transition-all duration-300"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-gradient">#{idx + 1}</span>
                        <h3 className="text-xl font-semibold text-white">{result.name}</h3>
                      </div>
                      <p className="text-gray-400 mb-3">{result.description}</p>
                      <code className="text-xs text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full">
                        {result.id}
                      </code>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="text-2xl font-bold text-gradient">
                        {Math.round(result.score * 100)}%
                      </div>
                      <div className="text-xs text-gray-500">relevance</div>
                      <div className="h-2 w-24 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                          style={{ width: `${result.score * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {results.length === 0 && !isSearching && (
          <div className="text-center text-gray-500 py-12">
            <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p>Try searching for something to see semantic search in action!</p>
          </div>
        )}
      </div>
    </section>
  );
}
