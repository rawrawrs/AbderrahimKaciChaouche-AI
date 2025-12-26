import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import MegaFooter from "@/components/MegaFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import fifthSectionVideo from "@/assets/FifthSectionVid.mp4";
import { useLocation } from "react-router-dom";
import { SEO } from "@/components/SEO";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    phone: "",
    company: "",
    details: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: string, text: string } | null>(null);

  const videoRef = useRef(null);
  const location = useLocation();
  const currentLanguage = location.pathname.startsWith('/fr') ? 'fr' : 'en';

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";

      const handleCanPlay = () => {
        if (video.paused) {
          video.play().catch(e => console.log("Autoplay prevented:", e));
        }
      };

      video.addEventListener('canplay', handleCanPlay);

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay failed:", error);
        });
      }

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.role || !formData.company || !formData.details) {
      setSubmitMessage({
        type: "error",
        text: "Please fill in all required fields."
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language: currentLanguage
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitMessage({
          type: "success",
          text: result.message
        });
        setFormData({ name: "", email: "", role: "", phone: "", company: "", details: "" });
      } else {
        setSubmitMessage({
          type: "error",
          text: result.message || "An error occurred while sending your message."
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage({
        type: "error",
        text: "Unable to connect to server. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact - Start Your AI Journey with Abderrahim Kaci Chaouche"
        description="Get in touch with Abderrahim Kaci Chaouche to discuss your project, ask questions, or request a demo. Connect with Algeria's leading AI researcher and developer for advanced solutions in neural architectures, object detection, and more."
        lang="en"
        alternates={[{ lang: 'fr', href: '/fr/contact' }]}
        keywords="contact Abderrahim Kaci Chaouche, AI researcher contact, Algeria AI expert, AI development contact, Syntron Architecture, Trafp-ODC, neural architectures, object detection, machine learning expert, AI research Algeria"
        author="Abderrahim Kaci Chaouche"
        robots="index, follow"
      />
      <Navigation />
      <div className="py-12 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6"
                style={{ color: '#264653' }}
              >
                Get in touch with Abderrahim
              </h1>
              <p
                className="text-lg md:text-xl"
                style={{ color: '#264653' }}
              >
                Start your AI journey with Abderrahim
              </p>
            </div>

            {submitMessage && (
              <div className={`mb-8 p-4 rounded-lg ${submitMessage.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
                }`}>
                {submitMessage.text}
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information - Left side */}
              <div className="lg:pr-12">
                <div className="space-y-12">
                  <div>
                    <h2
                      className="text-2xl font-normal mb-4"
                      style={{ color: '#264653' }}
                    >
                      Get in Touch
                    </h2>
                    <p
                      className="text-base md:text-lg mb-6"
                      style={{ color: '#264653' }}
                    >
                      I am here to help you harness the power of AI for your business. Whether you're looking for a demo, have questions about my solutions, or want to discuss a custom project, I'd love to hear from you.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3
                        className="text-xl font-normal mb-2"
                        style={{ color: '#264653' }}
                      >
                        Email
                      </h3>
                      <p
                        className="text-lg"
                        style={{ color: '#2a9d8f' }}
                      >
                        abdelrahim.kacich@gmail.com
                      </p>
                    </div>

                    <div>
                      <h3
                        className="text-xl font-normal mb-2"
                        style={{ color: '#264653' }}
                      >
                        Press & Events
                      </h3>
                      <p
                        className="text-base md:text-lg"
                        style={{ color: '#264653' }}
                      >
                        For media inquiries, interviews, and event collaborations, please reach out through this section. Whether you are a journalist, conference organizer, or partner interested in featuring my work, I'll be happy to connect with you.
                      </p>
                    </div>

                    <div>
                      <h3
                        className="text-xl font-normal mb-2"
                        style={{ color: '#264653' }}
                      >
                        Questions
                      </h3>
                      <p
                        className="text-base md:text-lg"
                        style={{ color: '#264653' }}
                      >
                        Have a question about my services, technology, or how I can support your project? Use this section to get in touch, and I will provide you with the information you need.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form - Right side (taking more space) */}
              <div className="lg:pl-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-base md:text-lg font-normal mb-2 block"
                      style={{ color: '#264653' }}
                    >
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="py-3 px-0 text-base border-0 border-b border-[#264653] rounded-none focus:ring-0 focus:border-[#2a9d8f] focus:ring-offset-0 focus:ring-transparent"
                      style={{
                        color: '#264653'
                      }}
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-base md:text-lg font-normal mb-2 block"
                      style={{ color: '#264653' }}
                    >
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="py-3 px-0 text-base border-0 border-b border-[#264653] rounded-none focus:ring-0 focus:border-[#2a9d8f] focus:ring-offset-0 focus:ring-transparent"
                      style={{
                        color: '#264653'
                      }}
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="role"
                      className="text-base md:text-lg font-normal mb-2 block"
                      style={{ color: '#264653' }}
                    >
                      Role <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="py-3 px-0 text-base border-0 border-b border-[#264653] rounded-none focus:ring-0 focus:border-[#2a9d8f] focus:ring-offset-0 focus:ring-transparent"
                      style={{
                        color: '#264653'
                      }}
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-base md:text-lg font-normal mb-2 block"
                      style={{ color: '#264653' }}
                    >
                      Phone Number (Optional)
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="py-3 px-0 text-base border-0 border-b border-[#264653] rounded-none focus:ring-0 focus:border-[#2a9d8f] focus:ring-offset-0 focus:ring-transparent"
                      style={{
                        color: '#264653'
                      }}
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="company"
                      className="text-base md:text-lg font-normal mb-2 block"
                      style={{ color: '#264653' }}
                    >
                      Company / Organization Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="py-3 px-0 text-base border-0 border-b border-[#264653] rounded-none focus:ring-0 focus:border-[#2a9d8f] focus:ring-offset-0 focus:ring-transparent"
                      style={{
                        color: '#264653'
                      }}
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="details"
                      className="text-base md:text-lg font-normal mb-2 block"
                      style={{ color: '#264653' }}
                    >
                      Request / Project Details <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="py-3 px-0 text-base border-0 border-b border-[#264653] rounded-none focus:ring-0 focus:border-[#2a9d8f] resize-none focus:ring-offset-0 focus:ring-transparent"
                      style={{
                        color: '#264653'
                      }}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="py-3 px-8 text-lg font-medium rounded-lg border focus:ring-0 focus:ring-offset-0"
                      style={{
                        backgroundColor: '#FFFFFF',
                        color: '#264653',
                        borderColor: '#2a9d8f'
                      }}
                    >
                      {isSubmitting ? "Sending..." : "Submit"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Video section from homepage */}
        <div className="mt-24">
          <div className="container mx-auto px-6">
            <div className="relative w-full">
              {/* Video container */}
              <div className="relative overflow-hidden rounded-lg">
                <video
                  ref={videoRef}
                  src={fifthSectionVideo}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-auto object-cover"
                />

                {/* Mobile layout: Text at top left, button at bottom right */}
                <div className="sm:hidden absolute inset-x-0 top-0 p-4 z-10 flex flex-col justify-between items-start gap-4">
                  <div className="w-full">
                    <h3
                      className="text-sm sm:text-base md:text-lg font-normal font-inter mb-1"
                      style={{ color: '#FFFFFF' }}
                    >
                      AI for the Future of Algeria
                    </h3>

                    <h2
                      className="text-base sm:text-xl md:text-2xl lg:text-3xl font-normal font-inter leading-tight"
                      style={{
                        color: '#FFFFFF'
                      }}
                    >
                      Your Next Step in AI Begins
                    </h2>
                    <h2
                      className="text-base sm:text-xl md:text-2xl lg:text-3xl font-normal font-inter mt-1 leading-tight"
                      style={{
                        color: '#FFFFFF'
                      }}
                    >
                      Here with Abderrahim
                    </h2>
                  </div>

                  <div className="w-full flex justify-end">
                    <button
                      className="px-3 py-1.5 border border-white bg-transparent text-white font-medium rounded-md hover:bg-white hover:text-background transition-colors duration-300 text-xs"
                      onClick={() => window.location.href = '/en/contact'}
                    >
                      Contact
                    </button>
                  </div>
                </div>

                {/* Desktop layout: Text at bottom left, button at bottom right */}
                <div className="hidden sm:block absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 z-10">
                  <div className="flex flex-row justify-between items-end">
                    <div className="max-w-[70%]">
                      <h3
                        className="text-base sm:text-lg md:text-xl font-normal font-inter mb-1 sm:mb-2"
                        style={{ color: '#FFFFFF' }}
                      >
                        AI for the Future of Algeria
                      </h3>

                      <h2
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal font-inter leading-tight"
                        style={{
                          color: '#FFFFFF'
                        }}
                      >
                        Your Next Step in AI Begins
                      </h2>
                      <h2
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal font-inter mt-1 sm:mt-2 leading-tight"
                        style={{
                          color: '#FFFFFF'
                        }}
                      >
                        Here with Abderrahim
                      </h2>
                    </div>

                    <div className="self-end">
                      <button
                        className="px-3 py-1.5 sm:px-6 sm:py-3 border border-white bg-transparent text-white font-medium rounded-md hover:bg-white hover:text-background transition-colors duration-300 text-xs sm:text-sm md:text-base"
                        onClick={() => window.location.href = '/en/contact'}
                      >
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MegaFooter />
    </div>
  );
};

export default ContactUs;