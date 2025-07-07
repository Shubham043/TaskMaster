function About() {
  return (
    <div className="min-h-[calc(100vh-56px)] flex flex-col items-center justify-center bg-gradient-to-r from-purple-500  to-red-400">
      <div className="max-w-2xl bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 font-extrabold text-center mb-6">
          About TaskMaster
        </h1>
        
        <div className="space-y-4 text-gray-700">
          <p className="text-lg leading-relaxed">
            <span className="font-semibold text-purple-600">TaskMaster</span> is your ultimate productivity companion designed to simplify task management and help you achieve more every day. Our intuitive interface combines powerful features with beautiful design.
          </p>
          
          <div className="p-4 bg-gradient-to-r from-purple-300 to-blue-400 rounded-lg border-l-4 border-purple-500">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Why Choose TaskMaster?</h2>
            <ul className="space-y-2 pl-5 list-disc text-gray-700">
              <li><span className="font-medium text-purple-600">Smart Organization:</span> Categorize tasks with tags and priorities</li>
              <li><span className="font-medium text-blue-600">Cross-Platform Sync:</span> Access your tasks anywhere, anytime</li>
              <li><span className="font-medium text-pink-600">Focus Mode:</span> Minimize distractions when you need to concentrate</li>
            </ul>
          </div>
          
          <p className="text-lg leading-relaxed">
            Built with modern technologies including <span className="font-mono bg-gray-100 px-2 py-1 rounded text-purple-700">React</span>, <span className="font-mono bg-gray-100 px-2 py-1 rounded text-blue-700">Tailwind CSS</span>, and <span className="font-mono bg-gray-100 px-2 py-1 rounded text-green-700">Firebase</span>, TaskMaster delivers a seamless experience across all your devices.
          </p>
        </div>
        
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;