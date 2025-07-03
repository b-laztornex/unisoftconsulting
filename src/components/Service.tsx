const Service: React.FC = () => {
  
  
  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
      ></div>
      {/* Deep blue overlay */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 container mx-auto py-12 px-4">
        <h2 className="text-center text-3xl font-bold text-white mb-4">
          What I Offer
        </h2>
        <p className="text-center text-lg text-gray-300 mb-8">
          With over 10 years of experience in web development, I specialize in
          building scalable, high-performance applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service Card 1: Full-Stack Development */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg
                className="w-full h-full text-blue-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 18l6-6-6-6M8 6L2 12l6 6"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-blue-900 mb-2 text-center">
              Full-Stack Development
            </h4>
            <p className="text-gray-600 text-center">
              Expertise in front-end (React, Angular, SolidJS) and back-end
              (Node.js, PHP, Python) development, delivering robust solutions.
            </p>
          </div>

          {/* Service Card 2: 3D Web Development */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg
                className="w-full h-full text-blue-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4a2 2 0 001-1.73z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7.5 4.21l7 4.01M7.5 19.79l7-4.01"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-blue-900 mb-2 text-center">
              3D Web Development
            </h4>
            <p className="text-gray-600 text-center">
              Advanced WebGL and three.js implementations for interactive 3D
              applications and visualizations.
            </p>
          </div>

          {/* Service Card 3: API & Cloud Solutions */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg
                className="w-full h-full text-blue-900"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 13a4 4 0 011.1-7.9 5.5 5.5 0 0110.8 1.2A3.5 3.5 0 0117 13H3z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-blue-900 mb-2 text-center">
              API & Cloud Solutions
            </h4>
            <p className="text-gray-600 text-center">
              Designing and developing RESTful APIs with secure cloud-based
              integrations using Docker, Kubernetes, and Azure.
            </p>
          </div>

          {/* Service Card 4: Technical Mentoring */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg
                className="w-full h-full text-blue-900"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a6 6 0 00-6 6c0 2.637 1.98 4.835 4.5 5.665V15a1 1 0 001 1h3a1 1 0 001-1v-1.335C14.02 12.835 16 10.637 16 8a6 6 0 00-6-6zm0 12a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-blue-900 mb-2 text-center">
              Technical Mentoring
            </h4>
            <p className="text-gray-600 text-center">
              Helping teams grow through mentoring in Agile methodologies,
              testing automation, and software architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
