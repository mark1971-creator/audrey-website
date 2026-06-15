export function Contact() {
    return (
      <section id="contact" className="section py-24 bg-white">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="heading text-6xl font-bold mb-8">Let’s Connect</h2>
          
          <p className="text-xl text-gray-600 mb-10">
            Whether you want to collaborate, order a custom "Designed by Odd" piece, 
            or just say hi — I’d love to hear from you.
          </p>
          
          <a 
            href="mailto:audrey.vandeneijnde@gmail.com" 
            className="inline-block bg-black text-white px-12 py-5 rounded-full text-xl hover:bg-[#6B8E73] transition-all font-medium"
          >
            Send me a message
          </a>
        </div>
      </section>
    );
  }