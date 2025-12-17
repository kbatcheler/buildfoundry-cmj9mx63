export function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Natural Language Understanding</h3>
            <p className="text-gray-600">Our chatbot understands context and delivers accurate responses.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Real-Time Communication</h3>
            <p className="text-gray-600">Engage in seamless real-time conversations with users.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Customizable Responses</h3>
            <p className="text-gray-600">Tailor the chatbot's personality and tone to match your brand.</p>
          </div>
        </div>
      </div>
    </section>
  );
}