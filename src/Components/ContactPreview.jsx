function ContactPreview() {
  return (
    <section className="px-8 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center">
        Contact Us
      </h1>

      <form className="mt-12 grid gap-6">

        <input
          type="text"
          placeholder="Your Name"
          className="border p-4 rounded-xl"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="border p-4 rounded-xl"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          className="border p-4 rounded-xl"
        ></textarea>

        <button className="bg-blue-600 text-white py-4 rounded-xl">
          Send Message
        </button>

      </form>
    </section>
  )
}

export default ContactPreview