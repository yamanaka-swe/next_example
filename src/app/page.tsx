export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Yamanaka SWE
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Software Engineer & Technology Enthusiast
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded"></div>
        </header>

        <main className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              About Me
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Welcome to my personal website! I'm a passionate software engineer with expertise in 
                modern web technologies, system architecture, and clean code practices.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I love building scalable applications, exploring new technologies, and sharing 
                knowledge with the developer community.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'AWS'].map((tech) => (
                <div key={tech} className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
              Get In Touch
            </h2>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:yamanaka@engineer-tips.com"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/yamanaka_swe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                GitHub
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
