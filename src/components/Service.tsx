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
          {/* Service Card */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              {/* Example icon */}
              <svg
                className="w-full h-full text-blue-900"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
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

          {/* Service Card */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg
                className="w-full h-full text-blue-900"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
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

          {/* Service Card */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg
                className="w-full h-full text-blue-900"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
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

          {/* Service Card */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              <svg
                className="w-full h-full text-blue-900"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
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
